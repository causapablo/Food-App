import './App.css';
import {Route} from "react-router-dom";
import Nav from "./components/NavBar/Nav";
import Home from "./components/Home/Home";
import RecipeDetail from "./components/RecipeDetail/RecipeDetail";
import CreateRecipe from "./components/CreateRecipe/CreateRecipe";

function App() {
    return (
       <main>

           <Nav/>
           <Route exact path={'/home'} component={Home}/>
           <Route exact path={'/create'} component={CreateRecipe}/>
           <Route exact path={'/recipe/:id'} component={RecipeDetail}/>


       </main>
    );
}

export default App;
// <div className="App">
//     <nav>
//         NavBar con Inicio - Create Recipe - About
//     </nav>
//     <main>
//         <section>
//             SearchBar con Input de Busque de Recipe - Filtrado por dietas - Filtrado por Rango de HealthScore
//         </section>
//         <section>
//             <section>
//                 <div>
//                     Seccion de Paginate con botones de desplazamiento.
//                 </div>
//                 <div>
//                     Botones de ordenado de A-Z, Z-A, Min-Max, Max-Min
//                 </div>
//             </section>
//             <section>
//                 Seccion de Cards
//             </section>
//         </section>
//     </main>
// </div>