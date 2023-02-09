const {Schema, model, connect} = require('mongoose');
const Diet = require('./diet.model.js');


const recipeSchema = new Schema({
    id:{type: String, required: true},
    title:{type: String, required:true},
    summary:{type:String, required:true},
    healthScore:{type:Number, required:true},
    image:{type:String, required:true},
    steps:{type:String, required:true},
    dishType:{type:String, required:true},
    createdINBd:{type:Boolean, required: true},
    diets:[{type:{name:String}, required: true}]
}
)


const Recipe = model('RecipeSchema', recipeSchema);

module.exports = Recipe;