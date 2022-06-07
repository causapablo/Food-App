import { NavBar } from "../NavBar/NavBar";
import { AllRecipes } from "../AllRecipes/AllRecipes.jsx";
import { Footer } from "../Footer/Footer";
import { Aside as Filter } from "../Aside/Aside";
import imgLanding from "../../assets/HomeBackground.jpg";


export default function Home() {
    return (
        <div>
            <div>
                <img className="img" src={imgLanding} alt="" />
            </div>
            <NavBar />
            <Filter />
            <AllRecipes />
            <div>
                <Footer/>
            </div>
        </div>
    );
}

window.scrollTo(0, 0);
















// import React, {useEffect, useState} from 'react';
// import {
//     getAllRecipes,
//     getAllDiets,
//     filterByDiets,
//     orderByScore,
//     orderByName
// } from "../../redux/actions/actionsCreators";
// import {useDispatch, useSelector} from "react-redux";
// import Recipe from "../Recipe/Recipe";
// import Paginate from "../Paginate/Paginate";
// import SearchBar from "../SearchBar/SearchBar";
// import OrderByName from "../Filters/OrderByName";
// import OrderByScore from "../Filters/OrderByScore";
// import FilterByDiet from "../Filters/FilterByDiet";
// import {Link} from "react-router-dom";
//
// function Home() {
//     const dispatch = useDispatch();
//     const recipes = useSelector(state=> state.recipes);
//     const diets = useSelector(state=>state.diets);
//     const loading = useSelector(state=>state.loading);
//     const [ordered, setOrdered] = useState(true)
//
//     const [currentPage, setCurrentPage] = useState(1);    // pagina que ira cambiando
//     const [recipesPerPage, setRecipesPerPage] = useState(9); // self-explanatory
//     const lastRecipe = recipesPerPage * currentPage; //9     // indice ultima receta renderizada
//     const firstRecipe = lastRecipe - recipesPerPage; //0         // indice primera receta renderizada
//     const currentRecipes = recipes.slice(firstRecipe, lastRecipe); // las 9 recetas que se iran mostrando en cda pág
//
//
//     useEffect(()=>{
//         dispatch(getAllRecipes());
//         dispatch(getAllDiets());//Aca le va a decir al reducer que cargue las dietas en el store, así podemos traerlas como opciones.
//
//     },[dispatch]);
//
//     const paginate = (number) => {
//         setCurrentPage(number)
//     };
//     function handleFilterByDiets(e) {
//         console.log(e.target.value);
//         dispatch(filterByDiets(e.target.value))
//     };
//     function handleOrderByName(e) {
//         dispatch(orderByName(e.target.value));
//
//         ordered ? setOrdered(false) : setOrdered(true);
//     };
//     function handleOrderByScore(e) {
//         dispatch(orderByScore(e.target.value))
//         ordered ? setOrdered(false) : setOrdered(true)
//     };
//     function returnToFirstPage() {
//         setCurrentPage(1)
//     };
//
//
//     return (
//         <div>
//
//             <div>
//
//                 <OrderByName handleOrderByName={handleOrderByName}/>
//                 <FilterByDiet handleFilterByDiets={handleFilterByDiets} diets={diets}/>
//                 <OrderByScore handleOrderByScore={handleOrderByScore}/>
//                 <Link to = {'/create'}>Create Recipe</Link>
//                 <SearchBar returnToFirstPage={returnToFirstPage} />
//             </div>
//             <div>
//                 <Paginate
//                     recipesPerPage={recipesPerPage}
//                     recipes={recipes?.length}
//                     paginate={paginate}
//                     currentPage={currentPage}
//                 />
//                 <div>
//                     {
//                          loading ? 'Loading' : currentRecipes.map((recipe,index) => {
//                             return (
//                                 <Recipe key = {index} id = {recipe.id}  image = {recipe.image} title = {recipe.title}
//                                             healthScore = {recipe.healthScore} diets = {recipe.diets}
//                                 />
//                             )
//                         })
//                     }
//                 </div>
//             </div>
//         </div>
//     );
// }
//
// export default Home;