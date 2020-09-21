import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Button, Form, Col, Tabs, Tab, OverlayTrigger, Tooltip } from "react-bootstrap";
import Draggable from "react-draggable";

import Ball from "./Editor/Editor";
import Alert from "react-bootstrap/Alert";
import Client from "shopify-buy";
import { DivStyle, DivFrame, ImgStyle } from "./Platos.style";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
var enlace = "";

var pru = 'url("img/fondoPlato.png")';
const Platos = forwardRef((props, ref) => {
	const [ value, setValue ] = useState(false);
	const [ fondo, setFondo ] = useState("");
	const [ coor, setCoor ] = useState("");
	const [ top, setTop ] = useState("0px");
	const [ left, setLeft ] = useState("0px");
	const [ show, setShow ] = useState(false);
	const client = Client.buildClient({
		domain: "nuria-pozas.myshopify.com",
		storefrontAccessToken: "c23d72381b2e48034a6cb4d8bca27ad8"
	});
	var data = null;

	const links = [
		{
			id: "prueba",
			link: "36127397609636"
		},
		{
			id: "prueba2",
			link: "36196470456484"
		},
		{
			id: "prueba3",
			link: "36196470456484"
		},
		{
			id: "prueba4",
			link: "36196470456484"
		}
	];

	const showToast = (name, xX, xY) => {
		setValue(true);
		document.getElementById("img").setAttribute("src", process.env.PUBLIC_URL + "/img/" + name + ".png");
		setTop(xX);
		setLeft(xY);
		console.log(top);

		data = links.filter((item) => item.id === name);
		//if (name !== "") {
		//	enlace = data[0].link;
		//}
		//if (name === "") {
		enlace = null;
		//}
	};

	const setFondoA = (fondo) => {
		document.getElementById("fondo").style.backgroundImage = fondo;
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

	const redirect = () => {
		if (document.getElementById("img").getAttribute("src") === "" || enlace === null) {
			setShow(true);
		} else {
			const input = {
				lineItems: [
					{
						variantId: Buffer.from("gid://shopify/ProductVariant/" + enlace).toString("base64"),
						quantity: 1
					}
				],
				note:
					"https://www.alambique.com/1546-large_default/bandeja-plato-redonda-para-tarta-bagatelle.jpg,https://www.alambique.com/1546-large_default/bandeja-plato-redonda-para-tarta-bagatelle.jpg"
			};
			client.checkout.create(input).then((checkout) => {
				const page = document.getElementById("fondo");
				var pdf = null;

				html2canvas(page, {
					backgroundColor: null,
					useCORS: true,
					allowTaint: false,
					scrollY: -window.scrollY
				})
					.then((canvas) => {
						var imgData = canvas.toDataURL("image/png", 1.0);
						pdf = new jsPDF();
						pdf.addImage(imgData, "PNG", 20, 20);
					})
					.then((e) => {
						window.parent.location.href = checkout.webUrl;
					});
			});
		}
	};

	useImperativeHandle(ref, () => {
		return {
			showToast: showToast,
			setFondoA: setFondoA,
			getCoordinates: getCoordinates
		};
	});

	const setCoordinates = (e, data) => {
		setCoor(data);
	};

	const getCoordinates = () => {
		return coor;
	};
	const handleDrag = (e, ui) => {
		console.log(ui);
	};

	return (
		<div>
			<Alert show={show} onClose={() => setShow(false)} transition variant="dark" dismissible fade="true">
				Antes de añadir al carrito, selecciona un dibujo y muévelo por la pieza. Puedes hacerlo más grande o más
				pequeño.
			</Alert>
			<Button id="tramitar" variant="outline-dark" onClick={redirect}>
				TRAMITAR VAJILLA
			</Button>

			<OverlayTrigger placement="top" overlay={<Tooltip>Aumenta el tamaño</Tooltip>}>
				<Button id="zoom" className="pepe" variant="outline-dark" onClick={zoomIn}>
					<i id="iconZoom" className="fa fa-search-plus fa-lg" />
				</Button>
			</OverlayTrigger>
			<OverlayTrigger placement="top" overlay={<Tooltip>Disminuye el tamaño</Tooltip>}>
				<Button id="zoomMinus" className="pepe" variant="outline-dark" onClick={zoomOut}>
					<i id="iconZoom" className="fa fa-search-minus fa-lg" />
				</Button>
			</OverlayTrigger>
			<DivStyle
				style={{
					backgroundImage: { pru }
				}}
				id="fondo"
			>
				<Draggable onStop={setCoordinates} onDrag={handleDrag}>
					<DivFrame
						id="move"
						style={{
							height: "300px",
							width: "300px",
							backgroundColor: "black",
							position: "absolute",
							left: left,
							top: top
						}}
					>
						<ImgStyle id="img" draggable={false} src="" alt="" />
					</DivFrame>
				</Draggable>
			</DivStyle>
		</div>
	);
});

export default Platos;
