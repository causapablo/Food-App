const {DataTypes} = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('recipe', {
            //{name, summary, score, healthScore, step_by_step,db}
            //{id,title,readyInMinutes,servings,image,summary,diets,healthScore,analyzedInstructions}
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                get(){
                    const firstCapital = this.getDataValue('title');
                    return firstCapital.charAt(0).toUpperCase() + firstCapital.slice(1);
                }
            }
            ,
            readyInMinutes : {
                type : DataTypes.INTEGER,
                allowNull: true
            },
            servings : {
                type : DataTypes.INTEGER,
                allowNull: true
            },
            image: {
                type: DataTypes.STRING,
                allowNull: false
            },
            summary: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            healthScore: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate : {
                    min : 0,
                    max : 100
                }
            },
            analyzedInstructions: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            db: {
                type: DataTypes.BOOLEAN,
                defaultValue: true
            }
        },
        {
            timestamps: false
        });
};
