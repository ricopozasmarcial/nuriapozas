import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Button } from "react-bootstrap";
import Ball from "./Editor/Editor";
import Alert from "react-bootstrap/Alert";
import Client from "shopify-buy";
import axios from "axios";

var enlace = "";
const Platos = forwardRef((props, ref) => {
	const [ value, setValue ] = useState(false);
	const [ show, setShow ] = useState(false);
	const client = Client.buildClient({
		domain: "nuria-pozas.myshopify.com",
		storefrontAccessToken: "c23d72381b2e48034a6cb4d8bca27ad8"
	});
	var data = null;
	var imagen = "";
	const links = [
		{
			id: "prueba",
			link: "36127397609636"
		},
		{
			id: "prueba2",
			link: "36196470456484"
		}
	];
	const showToast = (name) => {
		setValue(true);
		document.getElementById("img").setAttribute("src", process.env.PUBLIC_URL + "/img/" + name + ".png");
		imagen = document.getElementById("img").getAttribute("src");
		data = links.filter((item) => item.id === name);
		enlace = data[0].link;
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

	const deleteImage = () => {
		document.getElementById("img").setAttribute("src", "");
		document.getElementById("move").style.top = "0";
		document.getElementById("move").style.left = "0";

		imagen = "";
	};
	var checkoutId = null;
	const redirect = () => {
		if (document.getElementById("img").getAttribute("src") === "") {
			setShow(true);
		} else {
			const input = {
				lineItems: [
					{
						variantId: Buffer.from("gid://shopify/ProductVariant/" + enlace).toString("base64"),
						quantity: 1,
						customAttributes: [
							{
								key: "Visualiza aquí: ",
								value:
									"https://www.alambique.com/1546-large_default/bandeja-plato-redonda-para-tarta-bagatelle.jpg"
							}
						]
					}
				],
				note: "https://www.alambique.com/1546-large_default/bandeja-plato-redonda-para-tarta-bagatelle.jpg"
			};
			client.checkout.create(input).then((checkout) => {
				window.parent.location.href = checkout.webUrl;
			});
		}
	};

	useImperativeHandle(ref, () => {
		return {
			showToast: showToast
		};
	});

	return (
		<div>
			<Button style={{ marginRight: "600px" }} variant="outline-dark" onClick={redirect}>
				TRAMITAR VAJILLA
			</Button>

			<Button id="zoom" variant="outline-dark" onClick={zoomIn}>
				<i id="iconZoom" className="fa fa-search-plus fa-lg" />
			</Button>
			<Button id="zoomMinus" variant="outline-dark" onClick={zoomOut}>
				<i id="iconZoom" className="fa fa-search-minus fa-lg" />
			</Button>
			<div
				style={{
					position: "relative",
					display: "block",
					backgroundColor: "black",
					backgroundImage: 'url("img/fondoPlato.png")',
					backgroundPosition: "50% 50%",
					borderRadius: "50%",
					width: "60vw",
					height: "60vw",
					maxWidth: "600px",
					maxHeight: "600px",
					margin: "auto",
					marginBottom: "40px",
					justifyContent: "center",
					alignItems: "center",
					zIndex: "1",
					overflow: "hidden"
				}}
				id="fondo"
			>
				<div
					style={{
						height: "500px",
						width: "500px",
						margin: "auto"
					}}
					id="move"
				>
					<Ball />
				</div>
			</div>
		</div>
	);
});

export default Platos;
