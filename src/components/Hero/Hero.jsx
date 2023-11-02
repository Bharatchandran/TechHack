import "./Hero.css"
import { useState } from "react";
import ActionTag from "../ActionTag/ActionTag"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingListModal from "../ShoppingListModal";

export default function Hero(){
    // const [reloadState, setReloadState] = useState(false);
    const [actionState, setActionState] = useState("");
    const [show, setShowShoppingModal] = useState(false);
    const [isButtonActive, setIsButtonActive] = useState(false)
    const handleCloseShoppingModal = () => {
        setShowShoppingModal(false);
        setIsButtonActive(false)
        setActionState("")
    }
        
    const handleShowShoppingModal = () => {
        setShowShoppingModal(true);
        setIsButtonActive(true)
        setActionState("")
    }
        

    return(
        <>
            <div className="hero">
                <div className="center__header">
                <div className="hero__info">
                    <h1>Know what you have at home.
                        Reduce food waste and save money.
                    </h1>
                    <h3>
                    Keep track of food waste and save money and reduce carbon footprint. Track what is at home ready to make your favourite meal tonight without buying too much or forgetting a key ingrediant.
                    </h3>
                </div>
                <div className="action">
                    <ActionTag  text={"Add Items"} actionState={actionState} setActionState={setActionState} />
                    <ActionTag  text={"My Recipes"}  actionState={actionState} setActionState={setActionState} />
                    <button className={isButtonActive ? 'shoppingListButtonActive' : 'shoppingListButton'}
                        onClick={handleShowShoppingModal}> Shopping List  </button> 
                    <ActionTag  text={"Usage Monitor"} actionState={actionState} setActionState={setActionState} />
                </div>
                <div className="hero__search">
                    <div>Find</div>
                    <input type="text" />
                    <SearchIcon />
                </div>
                </div>
            </div>
            {show && <ShoppingListModal
                show={show}
                handleCloseShoppingModal={handleCloseShoppingModal}
            />}
        </>

    )
}