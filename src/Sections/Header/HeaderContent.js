import React from "react";

const HeaderContent = (props) =>{
    return(
        <div>
          {props.children}
          {props.title}
        </div>
    )
}

export default HeaderContent;

