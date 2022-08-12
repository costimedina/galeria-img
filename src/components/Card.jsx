import React from "react";

function Card(props) {
   return (
		<div className="container-card">
			<img
			className="imagen-card" 
			src={require(`../images/city-${props.image}.jpg`)}
			alt="fotos ciudad 01"/>
			<div className="container-text">
				<p className="name-image"><b>{props.name}</b></p>
				<p className="subname-image"> <i>{props.subname}</i></p>
				<p className="description-image">{props.description}</p>
			</div>
		</div>

	 ) 
}

export default Card;