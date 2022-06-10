const toObject = (data) => {
    let arrayOfObjets = [];
    if (Array.isArray(data)) {
        arrayOfObjets = data.map(item => {
            return {
                id: item.id,
                title: item.title,
                readyInMinutes: item.readyInMinutes,
                servings: item.servings,
                image: item.image,
                summary: item.summary.replace(/<[^>]+>/g, ""),
                diets: item.diets.map(d=>{//['vegan','keto', freegluten']
                    return {
                        name: d
                    }//[{name: vegan}, {name: keto}, {name: freegluten}];
                }),
                healthScore: item.healthScore,
                analyzedInstructions: item.analyzedInstructions[0]?.steps.map(s => s.step).join(" "),
                db : false
            }
        });
        return arrayOfObjets;
    }else{
        let {id,title,readyInMinutes,servings,image,summary,diets,healthScore,analyzedInstructions} = data.data;
        return {
            id,
            title,
            readyInMinutes,
            servings,
            image,
            summary : summary.replace(/<[^>]+>/g, ""),
            diets: diets.map(d=>{
                return {
                    name: d
                }
            }),
            healthScore,
            analyzedInstructions: analyzedInstructions[0]?.steps.map(s => s.step).join(" "),
            db: false
        }
    }

}

module.exports = toObject;