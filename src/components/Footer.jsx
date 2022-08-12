import React from "react";
import Button from 'react-bootstrap/Button';


function Footer(props) {
   return (
		<footer>
            <h5 className="mensaje">{props.mensaje}</h5> 
            <Button className="boton" variant="secondary">Más Información Aquí</Button>{' '}
        </footer>
	 ) 
}

export default Footer;