import "./Hero.css"
import { useState } from "react";
import ActionTag from "../ActionTag/ActionTag"
import SearchIcon from '@mui/icons-material/Search';

export default function Hero(){
    // const [reloadState, setReloadState] = useState(false);
    const [actionState, setActionState] = useState("Add Items");
    return(
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
                <ActionTag  text={"Shopping Lists"} actionState={actionState} setActionState={setActionState} />
                <ActionTag  text={"Usage Monitor"} actionState={actionState} setActionState={setActionState} />
                
            </div>
            <div className="hero__search">
                <div>Find</div>
                <input type="text" />
                <SearchIcon />
            </div>
            </div>
        </div>
    )
}