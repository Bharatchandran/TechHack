import "./Container.css"
export default function Container () {
    return(
        <div className="container">
            <div className="container__text">

            <h1>heading</h1>
            <h4>sub Heading</h4>
            <h3>someText</h3>
            </div>
            {/* <img src="" alt="" /> */}
            <h1>image</h1>

            <div className="container__buttons">
            <button>button</button>
            <button>button</button>
            <button>button</button>

            </div>
            <div className="close">
                <h1>X</h1>
            </div>
        
        </div>
    )
}