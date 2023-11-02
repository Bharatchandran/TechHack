import "../BeansRecipe/BeansRecipe.css"
import { Icon } from '@iconify/react';
export default function SpaghettiRecipe(){
    return(
        <div className="reciepe">
            <div className="reciepe__details">
                <h1>Spaghetti</h1>
                <h3>Eleven Ingredients</h3>
                <h4>Four Ingredients Out of Stock</h4>
            </div>
            <div className="reciepe__image">
            <Icon icon="emojione-monotone:spaghetti" style={{width:"93.75px", height:"93.75px", top:"3.13px", left:"3.13px"}} />
            <Icon icon="emojione-monotone:spaghetti" style={{width:"93.75px", height:"93.75px", top:"3.13px", left:"3.13px"}} />
            <Icon icon="emojione-monotone:spaghetti" style={{width:"93.75px", height:"93.75px", top:"3.13px", left:"3.13px"}} />

            </div>
            <div className="reciepe__functions">
                <button>View Ingredients</button>
                <button>Remove Ingredients from Stock</button>
                <button>Edit Recipe</button> 
            </div>
        </div>
    )
}