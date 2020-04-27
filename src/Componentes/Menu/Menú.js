import React from "react";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilm, faTv, faHome} from '@fortawesome/free-solid-svg-icons'
import "../../Styles/Menu.css";

const Menu = () =>{
    return(
        <div>
            <div className="menu">
                <span>
                    <Link to="/Home" className="links">
                        <FontAwesomeIcon icon={faHome}/>
                    </Link>
                </span>
                <span>
                    <Link to="/Movies" className="links">
                        <FontAwesomeIcon icon={faFilm}/>
                    </Link>
                </span>
                <FontAwesomeIcon icon={faTv}/>
                <FontAwesomeIcon icon={faSearch}/>
            </div>
        </div>
    )
}

export default Menu;