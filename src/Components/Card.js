import React from "react";
import App from "../App";


function Card(props){
    return(
        <>
            <div className="card-info">
                <img src={props.img} />
                <h5>{props.title}</h5>
                <h5>{props.company}</h5>
                <a href="https://www.linkedin.com/feed/">
                <button>linkedin</button>
                </a>
                <h4>{props.phone}</h4>
                <h4>{props.email}</h4>
            </div>
        </>
    )
}

export default Card;