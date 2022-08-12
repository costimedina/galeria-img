import React from "react";

function Header(props) {
   return (
		<header>
            <h1 className="titulo">{props.titulo}</h1>
        </header>
	 ) 
}

export default Header;