import React from "react";

function Navbar(props){
    return(
        <div className="navbar-div">
            <h4>{props.name}</h4>
        </div>
    )
}

export default Navbar;