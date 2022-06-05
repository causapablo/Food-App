import './App.css';
import {Route} from "react-router-dom";

import Home from "./components/Home/Home";
import {RecipeDetail} from "./components/RecipeDetail/RecipeDetail";
import {CreateRecipe} from "./components/CreateRecipe/CreateRecipe";
import {LandingPage} from "./components/LandingPage/LandingPage";
import {ErrorPage} from "./components/ErrorPage/ErrorPage";

function App() {
    return (
       <main>
           <Route exact path={'/'} component={LandingPage}/>
           <Route exact path={'/recipes'} component={Home}/>
           <Route exact path={'/recipe/:id'} component={RecipeDetail}/>
           <Route exact path={'/create'} component={CreateRecipe}/>
           <Route exact path={"/error"} component={ErrorPage}/>
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