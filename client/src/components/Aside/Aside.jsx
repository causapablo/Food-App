import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {

    filterByDiets, getAllDiets,
    orderByName,
    orderByScore
} from "../../redux/actions/actionsCreators";
import "./Aside.css";

export function Aside() {
    const [, setOrder] = useState("");
    const [, setDiets] = useState("allRecipes");

    const dispatch = useDispatch();
    const totalDiets = useSelector((state) => state.diets);


    useEffect(() => {
        dispatch(getAllDiets());
    }, [dispatch]);

    //Funcion de reseteo a los filtros/orden:
    function handleReset() {
        window.location.reload();
    }


    //Filtro por los Typos:
    function handleFilterByDiets(e) {
        e.preventDefault();
        dispatch(filterByDiets(e.target.value));
        setDiets(e.target.value);
    }

    //Orden alfebetico:
    function handleFilterName(e) {
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setOrder(`Order by ${e.target.value}`);
    }

    //Orden por Score:
    function handleOrderByScore(e) {
        e.preventDefault();
        dispatch(orderByScore(e.target.value));
        setOrder(`Order by ${e.target.value}`);
    }

    return (
        <div>
            <aside class="aside-container">
                <div class="ordenado">
                    <label class="label">Sort by: </label>
                    <select
                        class="select"
                        defaultValue="name"
                        onChange={(e) => handleFilterName(e)}
                    >
                        <option class="options" value="name" disabled>
                            Name
                        </option>
                        <option class="options" value="Asc">
                            A - Z
                        </option>
                        <option class="options" value="Desc">
                            Z - A
                        </option>
                    </select>

                    <select
                        class="select"
                        defaultValue="attack"
                        onChange={(e) => handleOrderByScore(e)}
                    >
                        <option class="options" value="attack" disabled>
                            Score
                        </option>
                        <option class="options" value="Asc">
                            Min to Max
                        </option>
                        <option class="options" value="Desc">
                            Max to Min
                        </option>
                    </select>
                </div>

                <div class="filtrado">
                    <label class="label">Filter: </label>
                    <select
                        class="select"
                        defaultValue="Types"
                        onChange={(e) => handleFilterByDiets(e)}
                        id="type-select"
                    >
                        <option class="options" value="Types" disabled>
                            Diets
                        </option>
                        <option class="options" value="allDiets">
                            All Diets
                        </option>
                        {totalDiets &&
                            totalDiets
                                .sort(function (a, b) {
                                    if (a.name < b.name) return -1;
                                    if (a.name > b.name) return 1;
                                    return 0;
                                })
                                .map((d,index) => (
                                    <option class="options" value={d.name} key={index}>
                                        {d.name}
                                    </option>
                                ))}
                    </select>
                    <button class="btn-reload" onClick={(e) => handleReset(e)}>
                        Refresh
                    </button>
                </div>
            </aside>
        </div>
    );
}
