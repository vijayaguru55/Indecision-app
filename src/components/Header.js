import React from "react";


const Header  = (props) =>(
    <div className="header">
         <div className="container">
            <h1 className="header__tittle">{props.tittle}</h1>
            {props.subTittle &&
            <h2 className="header__subtittle">{props.subTittle}</h2>}
        </div>
    </div>
);  

Header.defaultProps =  {
    tittle : 'Indecision ' 
 };

export default Header;