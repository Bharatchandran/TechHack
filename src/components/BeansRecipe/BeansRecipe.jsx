import "./BeansRecipe.css"
import { Icon } from '@iconify/react';
export default function Reciepe(){
    return(
        <div className="reciepe">
            <div className="reciepe__details">
                <h1>Mexican Beans</h1>
                <h3>eight Ingredients</h3>
                <h4>Two Ingredients Out of Stock</h4>
            </div>
            <div className="reciepe__image">
            <Icon icon="emojione-monotone:taco" style={{width:"93.75px", height:"93.75px", top:"3.13px", left:"3.13px"}} />
            <Icon icon="emojione-monotone:taco" style={{width:"93.75px", height:"93.75px", top:"3.13px", left:"3.13px"}} />
            <Icon icon="emojione-monotone:taco" style={{width:"93.75px", height:"93.75px", top:"3.13px", left:"3.13px"}} />

            </div>
            <div className="reciepe__functions">
                <button>Add to Shopping List</button>
                <button>Remove Ingredients from Stock</button>
                <button>Edit Recipe</button> 
            </div>
        </div>
    )
}