import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { createRecipe, getAllDiets, getAllRecipes,} from "../../redux/actions/actionsCreators";
import { useDispatch, useSelector } from "react-redux";
import "./CreateRecipe.css";
import imageCreate from "../../assets/createBackground.jpg"

//Validacion del formulario:
import { validate } from "./Validate.";

export function CreateRecipe() {
    const dispatch = useDispatch();
    const history = useHistory();
    const diets = useSelector((state) => state.diets);
    const allRecipes = useSelector((state) => state.recipes);

    const [errors, setErrorForm] = useState({});

    const [input, setInput] = useState({
        title: '',
        summary: '',
        healthScore: '',
        analyzedInstructions: '',
        image:'',
        diets: []
    });

    useEffect(() => {
        dispatch(getAllDiets());
        dispatch(getAllRecipes());
        // console.log(getTypes)
    }, [dispatch]);

    function handleInputChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        setErrorForm(validate({
            ...input,
            [e.target.name]: e.target.value }));
    };

    function handleDeleteDiet(el) {
        setInput({
            ...input,
            diets: input.diets.filter((diet) => diet !== el),
        });
    };

    function handleDietsChange(e) { // agregar diets
        if(input.diets.includes(e.target.value)){
            return alert('Diet Type exists')
        }else{
            setInput({
                ...input,
                diets:[...input.diets,e.target.value]
            })
        }
        setErrorForm(validate({
            ...input,
            [e.target.value]:e.target.value
        }))
    };

    let handleSubmit = (e)=> {
        e.preventDefault();
        try {
            let findRecipe = allRecipes.filter((r) => r.title.toLowerCase() === input.title.toLowerCase()
            )
            if (!findRecipe) {
                return alert("There's already one recipe with that title, please, change it. Danke schön.");
            } else if (Object.keys(errors).length) {
                return alert(Object.values(errors));
            } else {
                const newRecipe = {
                    title: input.title,
                    summary: input.summary,
                    healthScore: input.healthScore,
                    analyzedInstructions: input.analyzedInstructions,
                    image:input.image,
                    diets: input.diets
                };
                // console.log(newPokemon);
                dispatch(createRecipe(newRecipe));
            }
            setInput({
                title: '',
                summary: '',
                healthScore: '',
                analyzedInstructions: '',
                image:'',
                diets: []
            });
            return (
                alert(`Recipe created successfully`), history.push(`/recipes/`)
            )

        } catch (error) {
            console.log(error);
            return alert(
                "Oh, no! Something went wrong. Try again, Julia Child."
            );
        }
    };
    // console.log(input);
    return (
        <div className="create_container">
            <img className="imgCreate" src={imageCreate} alt="" />
            <h1 className="title">¡Cook your recipe!</h1>

            <form className="form" onSubmit={handleSubmit}>
                <div className="BTNS">
                    <button className="btn-create" type="submit">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Create
                    </button>
                    <Link className="btn-create" to="/recipes/" style={{ textDecoration: "none" }}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Home
                    </Link>
                </div>
                <div className="info-form">

                    <div>
                        <label for="title">Title:</label>
                        <input
                            onChange={handleInputChange}
                            value={input.title}
                            name="title"
                            type="text"
                            className="input"
                            placeholder="Recipe's Title"
                        />
                        {errors.title && (
                            <div className="errors">
                                <div id="title">{errors.title}</div>
                            </div>
                        )}
                    </div>

                    <div>
                        <label>Summary:</label>
                        <textarea
                            onChange={handleInputChange}
                            value={input.summary}
                            name="summary"
                            type="text"

                            placeholder="Write a summary"
                        />
                        {errors.summary && (
                            <div className="errors">
                                <div>{errors.summary}</div>
                            </div>
                        )}
                    </div>

                    <div>
                        <label>Health Score:</label>
                        <input
                            onChange={handleInputChange}
                            value={input.healthScore}
                            name="healthScore"
                            type="number"
                            min="1"
                            max="100"
                            placeholder="Insert the helth score"
                            className="input"
                        />
                        {errors.healthScore && (
                            <div className="errors">
                                <div>{errors.healthScore}</div>
                            </div>
                        )}
                    </div>

                    <div>
                        <label>Image:</label>
                        <input
                            onChange={handleInputChange}
                            value={input.image}
                            name="image"
                            type="text"
                            placeholder="Upload a picture"
                            className="input"
                        />
                        {errors.image && (
                            <div className="errors">
                                <div>{errors.image}</div>
                            </div>
                        )}
                    </div>

                    <div>
                        <label>Analyzed instructions:</label>
                        <textarea
                            onChange={handleInputChange}
                            value={input.analyzedInstructions}
                            name="analyzedInstructions"
                            placeholder="Write the instructions here.."

                        />
                        {errors.analyzedInstructions && (
                            <div className="errors">
                                <div>{errors.analyzedInstructions}</div>
                            </div>
                        )}
                    </div>


                    <div>
                        <label>Diets:</label>
                        {input.diets.length === 0 ? (
                            <p className="selectDiet">Select at least one Diet, please!</p>
                        ) :  null}
                        <p className="diet-s">
                            <select
                                value={input.diets}
                                name="diets"
                                className="Dit"
                                onChange={handleDietsChange}
                            >
                                {diets.map((e,index) => (
                                    <option key={index} value={e.name}>{e.name}</option>
                                ))}
                            </select>
                        </p>
                        <h5 className="deleteType">
                            {input.diets?.map((el) => (
                                <p className="nameDiet">
                                    {el}
                                    <button type="button" className="btnDelete" onClick={(e) => handleDeleteDiet(el)}>Del</button>
                                </p>
                            ))}
                        </h5>
                    </div>

                </div>


            </form>
            <div>
                <Footer />
            </div>
        </div>
    );
}




// import React, {useState,useEffect} from 'react';
// import {useDispatch, useSelector} from "react-redux";
// import {createRecipe,getAllDiets} from "../../redux/actions/actionsCreators";
// import {Link} from "react-router-dom";
//
// function validate(post) {
//     let errors = {};
//     if (!post.title) {
//         errors.title = 'Ingresar nombre de la receta'
//     }
//     if (!post.summary) {
//         errors.summary = 'Escribe un breve resumen'
//     }
//
//     if (!post.healthScore || post.healthScore < 0 || post.healthScore > 100) {
//         errors.healthScore = 'Ingresa un valor de 0 a 100'
//     }
//     if (!post.analyzedInstructions.length) {
//         errors.analyzedInstructions = 'Escribe una serie de pasos sobre cómo cocinar la receta'
//     }
//     if (!post.image) {
//         errors.image = 'Ingresar URL de alguna imagen representativa'
//     }
//     if (!post.diets.length) {
//         errors.diets = 'Elige al menos un tipo de dieta'
//     }
//     return errors;
// }
//
// let CreateRecipe = () => {
//     const dispatch = useDispatch();
//     const diets = useSelector(state => state.diets);
//     const [errors, setErrors] = useState({});
//
//     useEffect(() => {
//         dispatch(getAllDiets())
//     }, [dispatch])
//
//
//     const [post, setPost] = useState({
//         title: '',
//         summary: '',
//         healthScore: 0,
//         image: '',
//         analyzedInstructions: "",
//         diets: []
//     })
//     function handleInputChange(e) {
//         setPost({
//             ...post,
//             [e.target.name]: e.target.value
//         });
//         setErrors(validate({
//             ...post,
//             [e.target.name]: e.target.value
//         }));
//     };
//
//     function handleSubmit(e) {
//         e.preventDefault();
//         if (Object.values(errors).length > 0) alert("Por favor rellenar todos los campos")
//         else {
//             console.log(post);
//             dispatch(createRecipe(post))
//             alert('¡Receta creada con éxito!')
//         }
//     };
//
//     function handleSelectDiets(e) {
//         if (!post.diets.includes(e.target.value))
//             setPost({
//                 ...post,
//                 diets: [...post.diets, e.target.value]
//             });
//         setErrors(validate({
//             ...post,
//             diets: [...post.diets, e.target.value]
//         }));
//     };
//
//
//
//     function handleDietDelete(diet) {
//         setPost({
//             ...post,
//             diets: post.diets.filter(elemet => elemet !== diet)
//         })
//         setErrors(validate({
//             ...post,
//             diets: [...post.diets]
//         }));
//
//     };
//     return (
//         <div>
//             <div/>
//             <div>
//                 <div>
//                     <h1>Please fill in all the fields</h1>
//                     <form onSubmit={e => handleSubmit(e)}>
//                         <div>
//                             <label>Nombre</label>
//                             <input type="text" value={post.title} name='title' onChange={e => handleInputChange(e)} />
//                             {errors.title && (
//                                 <p>{errors.title}</p>
//                             )}
//                         </div>
//                         <div>
//                             <label>Resumen</label>
//                             <textarea value={post.summary} name='summary' onChange={e => handleInputChange(e)} />
//                             {errors.summary && (
//                                 <p>{errors.summary}</p>
//                             )}
//                         </div>
//
//                         <div>
//                             <label>Nivel Saludable</label>
//                             <input type="number" min="0" max='100' value={post.healthScore} name='healthScore' onChange={e => handleInputChange(e)} />
//                             {errors.healthScore && (
//                                 <p>{errors.healthScore}</p>
//                             )}
//                         </div>
//                         <div>
//                             <label>Imagen</label>
//                             <input type="text" value={post.image} name='image' onChange={e => handleInputChange(e)} />
//                             {errors.image && (
//                                 <p>{errors.image}</p>
//                             )}
//                         </div>
//                         <div>
//                             <label>Paso a Paso</label>
//                             <textarea value={post.analyzedInstructions} name='analyzedInstructions' onChange={e => handleInputChange(e)} />
//                             {errors.analyzedInstructions && (
//                                 <p>{errors.analyzedInstructions}</p>
//                             )}
//                         </div>
//                         <div>
//                             <select onChange={e => handleSelectDiets(e)} defaultValue='default'
//                                     >
//                                 <option value="default" disabled>Elegir dietas</option>
//                                 {
//                                     diets && diets.map((d,index) => (
//                                         <option value={d.name} key={index}>{d.name}</option>
//                                     ))
//                                 }
//                             </select>
//                             {errors.diets && (
//                                 <p style={{ float: 'right' }}>{errors.diets}</p>
//                             )}
//                             {post.diets.map((d,index) =>
//                                 <div key={index}>
//                                     <p>{d}</p>
//                                     <button onClick={() => handleDietDelete(d)}
//                                             >X</button>
//                                 </div>
//                             )}
//                         </div>
//                         <button type='submit'>¡Crear!</button>
//                     </form>
//                     <Link to='/home'>
//                         <button>Volver</button>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     )
// }
//
// export default CreateRecipe;