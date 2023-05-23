import React from "react";
import App from "../App";


function Card(props){
    return(
        <>
            <div ClassName='card-div'>
                <img src={props.img} />
                <h5>{props.title}</h5>
                <h4>{props.phone}</h4>
                <h4>{props.email}</h4>
            </div>
        </>
    )
}

export default Card;