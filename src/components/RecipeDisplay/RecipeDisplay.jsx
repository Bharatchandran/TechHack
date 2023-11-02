import "./RecipeDisplay.css"
import BeansRecipe from "../BeansRecipe/BeansRecipe"
import SpaghettiRecipe from "../SpaghettiRecipe/SpaghettiRecipe"
export default function RecipeDisplay(){
    return(
        <div className="reciepe-display">
            <div className="display__reciepe">
            <BeansRecipe/>
            <SpaghettiRecipe/>
            </div>
            <button className="add-reciepe">Add a New Recipe</button>
        </div>
    )
}