import "./NavBar.css"
import React from "react";
import { Link } from "react-router-dom";
export default function NavBar(){
    return(
        <div className="navbar">  
           <div className="nav__left">
            <h4>Food Store</h4>
            <h4>Search</h4>
            <input type="text" />
           </div>
           <div className="nav__right">
            <Link to="/" style={{textDecoration: 'none'}}><p>Food Items</p></Link>
            <Link to="/" style={{textDecoration: 'none'}}><p>Recipes</p></Link>
            <Link to="/" style={{textDecoration: 'none'}}><p>Shopping List</p></Link>
            <Link to="/" style={{textDecoration: 'none'}}><button>+/- Item</button></Link>
            <Link to="/" style={{textDecoration: 'none'}}><p>Login</p></Link>
           </div>
        </div>
    )
}