import "./ActionTag.css"
import { useState } from "react";
export default function ActionTag({text, actionState, setActionState }){
    // const [actionState, setActionState] = useState("Add Items");
    return(
      
        <div className={actionState.toString() === text.toString()  ? "actiontag-active" : "actiontag"}>
            <button onClick={() => {
                setActionState(text)
                }}>{text}</button>
        </div>
    )
}