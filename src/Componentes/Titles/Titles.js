import React from "react";
import "../../Styles/Common.css";

const Titles = props =>{
    return(
        <span className="title-span">
            <h2 className="h2">
                {props.children}
            </h2>
            <h3 className="h3">
                Explore All
            </h3>
        </span>
    )
}

export default Titles;