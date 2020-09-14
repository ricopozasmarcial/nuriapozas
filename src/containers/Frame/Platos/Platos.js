import React, { useState, forwardRef, useImperativeHandle } from "react";
import { PlatosDiv } from "./Platos.style";
import { Button } from "react-bootstrap";

import Ball from "./Editor/Editor";
const Platos = forwardRef((props, ref) => {
	const [ value, setValue ] = useState(false);

	const showToast = (name) => {
		if (!value) {
			setValue(true);
			document.getElementById("img").setAttribute("src", process.env.PUBLIC_URL + "/img/" + name + ".png");
			document.getElementById("img").setAttribute("height", "300");
			document.getElementById("img").setAttribute("width", "300");
		} else {
			setValue(false);
			document.getElementById("img").setAttribute("src", "");
		}
	};

	const zoomOut = () => {
		var altura = document.getElementById("img").getAttribute("height");
		altura = altura - 20;
		var ancho = document.getElementById("img").getAttribute("width");
		ancho = ancho - 20;
		document.getElementById("img").setAttribute("height", altura);
		document.getElementById("img").setAttribute("width", ancho);
	};

	const zoomIn = () => {
		var altura2 = document.getElementById("img").getAttribute("height");
		altura2 = +altura2 + 20;
		var ancho2 = document.getElementById("img").getAttribute("width");
		ancho2 = +ancho2 + 20;
		document.getElementById("img").setAttribute("height", altura2);
		document.getElementById("img").setAttribute("width", ancho2);
	};

	useImperativeHandle(ref, () => {
		return {
			showToast: showToast
		};
	});

	return (
		<PlatosDiv>
			<Button id="zoom" variant="outline-dark" onClick={zoomIn}>
				<i id="iconZoom" className="fa fa-search-plus fa-lg" />
			</Button>
			<Button id="zoomMinus" variant="outline-dark" onClick={zoomOut}>
				<i id="iconZoom" className="fa fa-search-minus fa-lg" />
			</Button>
			<div id="move">
				<img id="img" src="" />
				<Ball />
			</div>
			<div id="fondo">
				<img id="img" src="img/fondoPlato.png" />
			</div>
		</PlatosDiv>
	);
});

export default Platos;
