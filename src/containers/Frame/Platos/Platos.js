import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Button } from "react-bootstrap";
import Ball from "./Editor/Editor";
import Alert from "react-bootstrap/Alert";
var enlace = "";
const Platos = forwardRef((props, ref) => {
	const [ value, setValue ] = useState(false);
	const [ show, setShow ] = useState(false);

	var data = null;
	var imagen = "";
	const links = [
		{
			id: "prueba",
			link: "http://nuria-pozas.myshopify.com/cart/add?id=36127397609636&quantity=1"
		},
		{
			id: "prueba2",
			link: "http://nuria-pozas.myshopify.com/cart/add?id=36196470456484&quantity=1"
		}
	];
	const showToast = (name) => {
		setValue(true);
		document.getElementById("img").setAttribute("src", process.env.PUBLIC_URL + "/img/" + name + ".png");
		imagen = document.getElementById("img").getAttribute("src");
		data = links.filter((item) => item.id === name);
		enlace = data[0].link;
		var myHeaders = new Headers();
		myHeaders.append(
			"Authorization",
			"Basic NDk1NzBmNjhiZTQ5NGYwZTc0YjA2Mzc0ZTVmOGY2NmI6c2hwcGFfNzI1N2Q4NTVkMzhjNDc1MDQzODI1MmU1MmVhZGQ5MTg="
		);
		myHeaders.append("Access-Control-Allow-Origin", "*");

		myHeaders.append(
			"Cookie",
			"_master_udr=eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWsyWVdOaVpUWXhNQzAwTXpjMUxUUmxOV010T1RGaVlpMDVORGczTVdWa09USTBNbVVHT2daRlJnPT0iLCJleHAiOiIyMDIyLTA5LTE2VDEyOjAwOjE3LjgxMFoiLCJwdXIiOiJjb29raWUuX21hc3Rlcl91ZHIifX0%3D--e49e17ebf957ef7368e14e3d4f00f84703a3c091; _secure_admin_session_id_csrf=494fce97b53e68747a6b580d9a406df7; _secure_admin_session_id=494fce97b53e68747a6b580d9a406df7; __cfduid=d68640ba127d1abb1aa542acf785c83f21600257617; _y=6519426c-553b-42db-9d33-ed4574119033; _orig_referrer=https%3A%2F%2Fnuria-pozas.myshopify.com%2Fadmin%2Fapi%2F2020-07%2Fdraft_orders.json%250A; _landing_page=%2Fadmin%2Fauth%2Flogin; identity-state=BAh7BkkiJWM4Y2FhZDBhNGI5NzFjYzg4NmIwYTAwYjFhNGEwMTVjBjoGRUZ7C0kiDnJldHVybi10bwY7AFRJIjdodHRwczovL251cmlhLXBvemFzLm15c2hvcGlmeS5jb20vYWRtaW4vYXV0aC9sb2dpbgY7AFRJIhFyZWRpcmVjdC11cmkGOwBUSSJDaHR0cHM6Ly9udXJpYS1wb3phcy5teXNob3BpZnkuY29tL2FkbWluL2F1dGgvaWRlbnRpdHkvY2FsbGJhY2sGOwBUSSIQc2Vzc2lvbi1rZXkGOwBUOgxhY2NvdW50SSIPY3JlYXRlZC1hdAY7AFRmFzE2MDAyNTc2MTcuODI4ODY5M0kiCm5vbmNlBjsAVEkiJTI2NDI1NzJkZDRmOWQzYjdmN2VjZTE1NzRhNDVkNmM3BjsARkkiCnNjb3BlBjsAVFsLSSIKZW1haWwGOwBUSSI3aHR0cHM6Ly9hcGkuc2hvcGlmeS5jb20vYXV0aC9kZXN0aW5hdGlvbnMucmVhZG9ubHkGOwBUSSILb3BlbmlkBjsAVEkiDHByb2ZpbGUGOwBUSSJOaHR0cHM6Ly9hcGkuc2hvcGlmeS5jb20vYXV0aC9wYXJ0bmVycy5jb2xsYWJvcmF0b3ItcmVsYXRpb25zaGlwcy5yZWFkb25seQY7AFRJIjBodHRwczovL2FwaS5zaG9waWZ5LmNvbS9hdXRoL2JhbmtpbmcubWFuYWdlBjsAVA%3D%3D--a34550892d459a8d49e15eae3d1380480b816b37; _shopify_y=6519426c-553b-42db-9d33-ed4574119033"
		);

		var requestOptions = {
			method: "GET",
			headers: myHeaders,

			redirect: "follow"
		};

		fetch("https://nuria-pozas.myshopify.com/admin/api/2020-07/checkouts.json", requestOptions)
			.then((response) => response.text())
			.then((result) => console.log(result))
			.catch((error) => console.log("error", error));
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

	const redirect = () => {
		if (document.getElementById("img").getAttribute("src") === "") {
			setShow(true);
		} else {
			return (window.parent.location.href = enlace);
		}
	};

	useImperativeHandle(ref, () => {
		return {
			showToast: showToast
		};
	});

	return (
		<div>
			<Button style={{ marginRight: "600px" }} variant="outline-dark">
				<a target="_parent" id="aniadir" href="http://nuria-pozas.myshopify.com/cart/36127397609636:1">
					AÑADIR AL CARRITO
				</a>
			</Button>
			<Button id="zoom" variant="outline-dark" onClick={zoomIn}>
				<i id="iconZoom" className="fa fa-search-plus fa-lg" />
			</Button>
			<Button id="zoomMinus" variant="outline-dark" onClick={zoomOut}>
				<i id="iconZoom" className="fa fa-search-minus fa-lg" />
			</Button>
			<div style={{
				position: 'relative',
				display: 'block',
				backgroundColor: 'black',
				backgroundImage: 'url("img/fondoPlato.png")',
				backgroundPosition: '50% 50%',
				borderRadius: '50%',
				width: '60vw',
				height: '60vw',
				maxWidth: '600px',
				maxHeight: '600px',
				margin: "auto",
				marginBottom: "40px",
				justifyContent: 'center',
				alignItems: 'center',
				zIndex: '1',
				overflow: 'hidden'
			}} id="fondo">
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
