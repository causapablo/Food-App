import React from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";
import {Loading as Loader} from '../Loading/Loading'
import  imgDetails from "../../assets/DetailBackground.jpg"
import { getRecipeDetail } from "../../redux/actions/actionsCreators";
import "./RecipeDetail.css";

export function RecipeDetail() {
    const dispatch = useDispatch();
    const {id} = useParams(); //Para obtener el ID por Params
    const oneRecipe = useSelector((state) => state.recipeDetail);
    const charging = useSelector(state=> state.loading);

    useEffect(() => {
        dispatch(getRecipeDetail(id));

    }, [dispatch, id]);
    console.log("recipeDetail");
    return (
        <div>
            {
                charging ?
                    (<div >
                                     <NavBar/>
                                     <div>
                                         <Loader />
                                     </div>
                                 </div>
                    ) :
                    <div>
                        <img className="imgDetails" src={imgDetails} alt="imgDetail"/>
                        <div className="background">
                            <div className="cardsDetails">
                                <div>
                                    <h3 className="recipeTitle">
                                        Recipe : {oneRecipe.title}
                                    </h3>
                                    <img
                                        src={oneRecipe.image}
                                        alt={oneRecipe.title}
                                        className="recipeImage"
                                    />
                                </div>

                                <div className="description">
                                    <div className="diets">
                                        <p>Diet types:</p>
                                        <div className="diet">{oneRecipe.diets ? oneRecipe.diets.map((d, index) => <p
                                            key={index}> - {d.name}</p>) : 'Loading'}</div>
                                    </div>
                                    <div className="score">
                                        <p>{`Health Score: ${oneRecipe.healthScore}`}</p>
                                    </div>
                                    <div className="summary">
                                        <p>{`Summary: ${oneRecipe.summary}`}</p>
                                    </div>
                                    <div className="instructions">
                                        <p>{`Instructions : ${oneRecipe.analyzedInstructions ? oneRecipe.analyzedInstructions : "No instructions avaiable"}`}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="buttonss">
                                <button className="button-home">
                                    <Link to="/recipes/" class="linked">
                                        Back
                                    </Link>
                                </button>

                            </div>
                        </div>
                        <Footer/>
                    </div>
            }
        </div>

    )

}


// import React, {useEffect} from 'react';
// import {useDispatch, useSelector} from "react-redux";
// import {useParams} from "react-router-dom";
// import {getRecipeDetail} from "../../redux/actions/actionsCreators";
//
//
// let RecipeDetail = () => {
//     const {id} = useParams();
//     const dispatch = useDispatch();
//     const detail = useSelector((state) => state.recipeDetail);
//     const loading = useSelector((state)=> state.loading);
//     useEffect(() => {
//         dispatch(getRecipeDetail(id));
//     }, [dispatch, id]);
//     console.log(detail);
//     return (
//         <div>
//             {
//                     loading ? 'Loading...' :
//                     <div>
//                         <h1>{detail.title}</h1>
//                         <div>
//                             <img src={detail.image} alt='img not found'
//                                  width="500px" height="400px"/>
//                         </div>
//                         <div>
//
//                             <h3>Healthy-Food level: {detail.healthScore}</h3>
//                             <h3>Step-by-step:</h3>
//                             <p>{detail.analyzedInstructions}</p>
//                             <h3>Summary:</h3><p>{detail.summary}</p>
//                             <h3>Diet types:</h3><ul>{detail.diets ? detail.diets.map((d,index) => <li key={index}>{d.name}</li>) : 'Loading'}</ul>
//                         </div>
//                     </div>
//             }
//         </div>
//     );
// }
//
// export default RecipeDetail;