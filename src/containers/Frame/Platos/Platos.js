import React, { useState, forwardRef, useImperativeHandle } from "react";
import { PlatosDiv } from "./Platos.style";
import { Button } from "react-bootstrap";
import Ball from "./Editor/Editor";
const Platos = forwardRef((props, ref) => {
	const [value, setValue] = useState(false);

	const showToast = (name) => {
		setValue(true);
		document.getElementById("img").setAttribute("src", process.env.PUBLIC_URL + "/img/" + name + ".png");
	};

	const zoomOut = () => {
		let str = document.getElementById("move").style.height.toString();
		var alturaAux = str.replace("px", "");
		var alturaNew = parseInt(alturaAux) - 20;
		document.getElementById("move").style.height = alturaNew + "px";
		let str2 = document.getElementById("move").style.width.toString();
		var anchoAux = str2.replace("px", "");
		var anchoNew = parseInt(anchoAux) - 20;
		document.getElementById("move").style.width = anchoNew + "px";
	};

	const zoomIn = () => {
		let str = document.getElementById("move").style.height.toString();
		var alturaAux = str.replace("px", "");
		var alturaNew = parseInt(alturaAux) + 20;
		document.getElementById("move").style.height = alturaNew + "px";
		let str2 = document.getElementById("move").style.width.toString();
		var anchoAux = str2.replace("px", "");
		var anchoNew = parseInt(anchoAux) + 20;
		document.getElementById("move").style.width = anchoNew + "px";
	};

	useImperativeHandle(ref, () => {
		return {
			showToast: showToast
		};
	});

	return (
		<PlatosDiv>
			<div style={{
				position: 'absolute',
				backgroundColor: 'black',
				backgroundImage: 'url("img/fondoPlato.png")',
				backgroundPosition: '50% 50%',
				borderRadius: '50%',
				width: '600px',
				height: '600px',
				marginLeft: '10%',
				marginTop: '10%',
				justifyContent: 'center',
				alignItems: 'center',
				zIndex: '1',
				overflow: 'hidden'
			}} id="fondo">
				<div
					style={{
						height: "500px",
						width: "500px"
					}}
					id="move"
				>
					<Ball />
				</div>
			</div>
			<h2
				style={{
					height: "auto",
					fontFamily: "Montserrat Light",
					fontWeight: 650,
					color: "black",
					marginTop: "40px",
					fontSize: "15px",
					backgroundColor: "none"
				}}
			>
				{" "}
				TU PLATO{" "}
			</h2>
			<hr />

			<Button style={{ marginRight: "600px" }} variant="outline-dark">
				<a id="aniadir" href="http://nuria-pozas.myshopify.com/cart/36127397609636:1">
					AÑADIR AL CARRITO
				</a>
			</Button>
			<Button id="zoom" variant="outline-dark" onClick={zoomIn}>
				<i id="iconZoom" className="fa fa-search-plus fa-lg" />
			</Button>
			<Button id="zoomMinus" variant="outline-dark" onClick={zoomOut}>
				<i id="iconZoom" className="fa fa-search-minus fa-lg" />
			</Button>
		</PlatosDiv>
	);
});

export default Platos;
