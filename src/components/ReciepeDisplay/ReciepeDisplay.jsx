import "./ReciepeDisplay.css"
import Reciepe from "../Reciepe/Reciepe"
export default function ReciepeDisplay(){
    return(
        <div className="reciepe-display">
            <div className="display__reciepe">
            <Reciepe/>
            <Reciepe/>

            </div>
            <button className="add-reciepe">Add a New Recipe</button>
        </div>
    )
}