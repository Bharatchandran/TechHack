import "./BeansRecipe.css"
import { Icon } from '@iconify/react';
import { useEffect, useState } from "react";
import MissingIngredientsModal from "../MissingIngredientsModal";

export default function BeansRecipe(){
    // const [recipeIngredients, setRecipeIngredients] = useState({
    //     recipe: "",
    //     ingredients_list: ""
    //   });

    const [show, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    return(
        <>
            <div className="reciepe">
                <div className="reciepe__details">
                    <h1>Mexican Beans</h1>
                    <h3>Eight Ingredients</h3>
                    <h4>Two Ingredients Out of Stock</h4>
                </div>
                <div className="reciepe__image">
                <Icon icon="emojione-monotone:taco" style={{width:"93.75px", height:"93.75px", top:"3.13px", left:"3.13px"}} />
                <Icon icon="emojione-monotone:taco" style={{width:"93.75px", height:"93.75px", top:"3.13px", left:"3.13px"}} />
                <Icon icon="emojione-monotone:taco" style={{width:"93.75px", height:"93.75px", top:"3.13px", left:"3.13px"}} />

                </div>
                <div className="reciepe__functions">
                    <button onClick={handleShowModal}>
                    Add to Shopping List
                    </button>
                    <button>Remove Ingredients from Stock</button>
                    <button>Edit Recipe</button> 
                </div>
            </div>
            {show && <MissingIngredientsModal
                show={show}
                handleCloseModal={handleCloseModal}
            />}
        </>
    )
}