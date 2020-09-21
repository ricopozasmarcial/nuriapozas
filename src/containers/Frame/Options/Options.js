import React, { useRef, useState } from "react";
import Joyride from "react-joyride";

import Platos from "../Platos/Platos";
import {
	Button,
	Form,
	Jumbotron,
	Accordion,
	Image,
	Card,
	Tooltip,
	Badge,
	Tabs,
	Popover,
	OverlayTrigger,
	Tab
} from "react-bootstrap";

import { GridList, GridListTile, GridListTileBar, makeStyles } from "@material-ui/core";
import { Container, Row, Col } from "react-bootstrap";
import { DivFrame, DivPlatos, DivOptions, H2Plato, H2Select, GridRoot } from "./Options.style";

function App() {
	var elementos = {
		opacity: "0.4",
		pointerEvents: "none",
		overflowX: "hidden"
	};
	var arrayFotos = [];
	const ref = useRef(null);
	const [ show, setShow ] = useState(true);
	const [ runJoy, setRunJoy ] = useState(false);
	const [ joyrideStepIndex, setJoyrideStepIndex ] = useState(0);
	const [ mostrarImagenes, setMostrarImagenes ] = useState(true);
	const [ dibujos, setDibujos ] = useState(elementos);
	const [ key, setKey ] = useState(1);
	const [ actual, setActual ] = useState(0);
	const [ key2, setKey2 ] = useState(1);
	const [ limite, setLimite ] = useState();
	const [ fotos, setFotos ] = useState([]);
	const useStyles = makeStyles((theme) => ({
		gridList: {
			position: "relative",
			justifyContent: "space-around",
			overflow: "auto",
			backgroundColor: "transparent",
			width: "auto",
			height: "auto",
			paddingBottom: "30%",
			paddingTop: "5px"
		},
		icon: {
			color: "rgba(255, 255, 255, 0.54)"
		}
	}));
	var id;
	document.addEventListener(
		"click",
		function(e) {
			id = e.target.id;
		},
		false
	);
	const handleClick = (e) => {
		var i = { name: e.target.id, top: 0, left: 0, width: "300px", height: "300px" };
		var listina = fotos;
		listina[actual] = i;
		setFotos(listina);
		ref.current.showToast(e.target.id, i.top, i.left, i.width, i.height);
	};

	const showTab = (e) => {
		setShow(false);
		setKey(2);
		elementos = null;
		setDibujos(elementos);
		document.getElementById("anterior").disabled = true;
		document.getElementById("tramitar").disabled = true;
		ref.current.setFondoA(e.target.id);
	};

	const showImagenes = (e) => {
		if (e.target.value !== "0") {
			setLimite(e.target.value);
			setMostrarImagenes(false);
		} else {
			setMostrarImagenes(true);
		}
	};

	const handleJoyrideCallback = (event) => {
		if (event.lifecycle === "tooltip" && event.index === 0) {
			setMostrarImagenes(false);
		}
		if (event.type === "step:after" && event.index === 4) {
			ref.current.showToast("prueba2");
		}
		if (event.action === "next" && event.index === 3) {
			setShow(false);
			setKey(2);
			elementos = null;
			setDibujos(elementos);
		}
		if (event.status === "finished") {
			setShow(true);
			setMostrarImagenes(true);
			setKey(1);
			elementos = {
				opacity: "0.4",
				pointerEvents: "none"
			};
			setDibujos(elementos);
			ref.current.showToast("");
		}
	};

	const previousImage = () => {
		if (fotos[actual] !== undefined) {
			var childPos = document.getElementById("move").getBoundingClientRect();
			var parentPos = document.getElementById("fondo").getBoundingClientRect();
			var lista2 = fotos;
			lista2[actual] = {
				name: fotos[actual].name,
				top: childPos.top - parentPos.top,
				left: childPos.left - parentPos.left,
				width: document.getElementById("move").style.width,
				height: document.getElementById("move").style.height
			};
			setFotos(lista2);
		}
		if (fotos[actual - 1] === undefined) ref.current.showToast("", 0, 0, "300px", "300px");
		else {
			ref.current.showToast(
				fotos[actual - 1].name,
				fotos[actual - 1].top,
				fotos[actual - 1].left,
				fotos[actual - 1].width,
				fotos[actual - 1].height
			);
		}
		if (actual === 0) {
			document.getElementById("anterior").disabled = true;
		} else {
			setActual(actual - 1);
			document.getElementById("siguiente").disabled = false;
			document.getElementById("tramitar").disabled = true;
		}
		ref.current.crearProducto();
	};

	const nextImage = () => {
		var childPos2 = document.getElementById("move").getBoundingClientRect();
		var parentPos2 = document.getElementById("fondo").getBoundingClientRect();
		if (fotos[actual] !== undefined) {
			var lista = fotos;
			lista[actual] = {
				name: fotos[actual].name,
				top: childPos2.top - parentPos2.top,
				left: childPos2.left - parentPos2.left,
				width: document.getElementById("move").style.width,
				height: document.getElementById("move").style.height
			};
			setFotos(lista);
		}
		if (fotos[actual + 1] === undefined) {
			ref.current.showToast("", 0, 0, "300px", "300px");
		} else {
			ref.current.showToast(
				fotos[actual + 1].name,
				fotos[actual + 1].top,
				fotos[actual + 1].left,
				fotos[actual + 1].width,
				fotos[actual + 1].height
			);
		}
		if (actual < limite - 1) {
			document.getElementById("anterior").disabled = false;
			setActual(actual + 1);
			if (actual === limite - 2) {
				document.getElementById("siguiente").disabled = true;
				document.getElementById("tramitar").disabled = false;
			}
		}
		ref.current.crearProducto();
	};

	const deleteImage = () => {
		const newList = fotos;
		newList[actual] = undefined;
		setFotos(newList);
		document.getElementById("img").setAttribute("src", "");
		document.getElementById("move").style.transform = "translate(" + 0 + "px," + 0 + "px)";
	};

	const classes = useStyles();
	const steps = [
		{
			target: ".my-1",
			content: "Primero selecciona la cantidad piezas que compondrán tu vajilla.",
			disableBeacon: true,
			placement: "auto"
		},

		{
			target: ".second",
			disableBeacon: true,
			content:
				"Selecciona el tipo de vajilla haciendo click en la imagen correspondiente.\n\nUna vez selecciones ambos te llevará a la página de personalización de la/s pieza/s.",
			placement: "auto"
		},
		{
			target: ".second2",
			disableBeacon: true,
			content: "Sin los dos pasos previos no podrás editar las piezas de la vajilla.",
			placement: "auto"
		},
		{
			target: "body",
			disableBeacon: true,
			content: "Aqui es donde podrás personalizar la pieza o piezas escogidas."
		},
		{
			target: ".third",
			disableBeacon: true,
			content: "Primero selecciona un dibujo haciendo click sobre su imagen."
		},
		{
			target: ".four",
			disableBeacon: true,
			content: "Una vez seleccionado un dibujo puedes moverlo por la pieza a tu gusto.",
			placement: "auto"
		},
		{
			target: "#zoom",
			disableBeacon: true,
			content:
				"Puedes aumentar o disminuir el tamaño del dibujo con estos controles. También puedes eliminar el diseño",
			placement: "auto"
		}
	];

	const tileData = [
		{
			img: "img/prueba.png",
			title: "Piña",
			id: "prueba"
		},
		{
			img: "img/prueba2.png",
			title: "Coral",
			id: "prueba2"
		},
		{
			img: "img/prueba3.png",
			title: "Pájaros",
			id: "prueba3"
		},
		{
			img: "img/prueba4.png",
			title: "Nube",
			id: "prueba4"
		},
		{
			img: "img/prueba2.png",
			title: "Coral",
			id: "prueba2"
		},
		{
			img: "img/prueba3.png",
			title: "Pájaros",
			id: "prueba3"
		},
		{
			img: "img/prueba2.png",
			title: "Coral",
			id: "prueba2"
		},
		{
			img: "img/prueba3.png",
			title: "Pájaros",
			id: "prueba3"
		},
		{
			img: "img/prueba2.png",
			title: "Coral",
			id: "prueba2"
		},
		{
			img: "img/prueba3.png",
			title: "Pájaros",
			id: "prueba3"
		},
		{
			img: "img/prueba2.png",
			title: "Coral",
			id: "prueba2"
		},
		{
			img: "img/prueba3.png",
			title: "Pájaros",
			id: "prueba3"
		},
		{
			img: "img/prueba2.png",
			title: "Coral",
			id: "prueba2"
		},
		{
			img: "img/prueba3.png",
			title: "Pájaros",
			id: "prueba3"
		},
		{
			img: "img/prueba2.png",
			title: "Coral",
			id: "prueba2"
		},
		{
			img: "img/prueba3.png",
			title: "Pájaros",
			id: "prueba3"
		},
		{
			img: "img/prueba2.png",
			title: "Coral",
			id: "prueba2"
		},
		{
			img: "img/prueba3.png",
			title: "Pájaros",
			id: "prueba3"
		},
		{
			img: "img/prueba2.png",
			title: "Coral",
			id: "prueba2"
		},
		{
			img: "img/prueba3.png",
			title: "Pájaros",
			id: "prueba3"
		},
		{
			img: "img/prueba2.png",
			title: "Coral",
			id: "prueba2"
		},
		{
			img: "img/prueba3.png",
			title: "Pájaros",
			id: "prueba3"
		}
	];

	return (
		<DivFrame className="first">
			<Joyride
				steps={steps}
				run={runJoy}
				continuous
				showProgress
				showSkipButton
				key={key2}
				callback={handleJoyrideCallback}
				styles={{
					options: {
						arrowColor: "#e9ecef",
						backgroundColor: "#e9ecef",
						whiteSpace: "pre-line",
						primaryColor: "#000",
						textColor: "black",
						spotlightShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
						zIndex: 1000
					}
				}}
			/>
			<Container fluid>
				<Row>
					<Col>
						<Container fluid>
							<Tabs
								defaultActiveKey="1"
								activeKey={key}
								id="uncontrolled-tab-example"
								style={{ marginTop: "75px" }}
							>
								<Tab eventKey="1" tabClassName="d-none" title="Elige" className="second2">
									<Jumbotron fluid style={{ marginTop: "10px" }}>
										<Container>
											<h2>
												Crea tu propia vajilla personalizada{" "}
												<Badge variant="secondary">New</Badge>
											</h2>
											<p>
												Todos los diseños están pintados a mano por lo que el dibujo
												seleccionado será una aproximación.
											</p>

											<OverlayTrigger
												placement="top"
												overlay={<Tooltip>Empezar tutorial</Tooltip>}
											>
												<Button
													variant="outline-dark"
													onClick={() => {
														setKey2(key2 + 1);
														setRunJoy(true);
													}}
												>
													¿Como funciona?
												</Button>
											</OverlayTrigger>
										</Container>
									</Jumbotron>
									<Form>
										<Form.Row className="align-items-center">
											<Col xs="auto" className="my-1">
												<Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
													Preference
												</Form.Label>
												<Form.Control
													as="select"
													className="mr-sm-2"
													id="inlineFormCustomSelect"
													custom
													onChange={showImagenes}
												>
													<option value="0">Escoge una cantidad</option>
													<option value="1">x1 PIEZA </option>
													<option value="2">x2 PIEZAS</option>
													<option value="3">x3 PIEZAS</option>
													<option value="4">x4 PIEZAS</option>
													<option value="5">x5 PIEZAS</option>
													<option value="6">x6 PIEZAS</option>
												</Form.Control>
											</Col>
										</Form.Row>
									</Form>
									<Container hidden={mostrarImagenes} className="second">
										<Row>
											<Col xs={6} md={4}>
												<OverlayTrigger
													trigger="hover"
													placement="bottom"
													overlay={
														<Popover>
															<Popover.Title as="h3">Plato llano</Popover.Title>
															<Popover.Content>
																Medida aproximada de 27cm{" "}
															</Popover.Content>
														</Popover>
													}
												>
													<Image
														src="img/fondoPlatoPeq.png"
														onClick={showTab}
														id="url('img/fondoPlato.png')"
														style={{ cursor: "pointer" }}
													/>
												</OverlayTrigger>
											</Col>
											<Col xs={6} md={4}>
												<OverlayTrigger
													trigger="hover"
													placement="bottom"
													overlay={
														<Popover>
															<Popover.Title as="h3">Plato hondo</Popover.Title>
															<Popover.Content>
																Medida aproximada de 24cm{" "}
															</Popover.Content>
														</Popover>
													}
												>
													<Image
														src="img/fondoPlatoHondoPeq.png"
														onClick={showTab}
														id="url('img/fondoPlatoHondo.png')"
														style={{ cursor: "pointer" }}
													/>
												</OverlayTrigger>
											</Col>
										</Row>
									</Container>
								</Tab>

								<Tab eventKey="2" tabClassName="d-none" hidden={show} title="Diseña">
									<i
										className="fa fa-chevron-left fa-lg"
										hidden={show}
										style={{
											cursor: "pointer",
											marginRight: "90%",
											marginTop: "10px"
										}}
										onClick={() => {
											setKey(1);
											setDibujos(elementos);
										}}
									/>{" "}
									<DivPlatos className="four">
										<OverlayTrigger placement="top" overlay={<Tooltip>Elimina el diseño</Tooltip>}>
											<Button
												id="trash"
												className="pepe"
												variant="outline-dark"
												onClick={deleteImage}
											>
												<i id="iconZoom" className="fa fa-trash fa-lg" />
											</Button>
										</OverlayTrigger>
										<Platos ref={ref} />
										<div>
											{actual + 1}/{limite}
										</div>
										<Button
											id="anterior"
											variant="outline-dark"
											onClick={previousImage}
											disabled={actual === 0 ? "true" : ""}
										>
											Anterior plato
										</Button>
										<Button
											id="siguiente"
											variant="outline-dark"
											onClick={nextImage}
											disabled={actual === limite - 1 ? "true" : ""}
										>
											Siguiente plato
										</Button>
									</DivPlatos>
								</Tab>
							</Tabs>
						</Container>
					</Col>
					<Col id="colnoscroll">
						<Container fluid id="cara">
							<H2Select> SELECCIONAR DIBUJO </H2Select>
							<hr />
							<DivOptions id="context2" style={dibujos}>
								<GridRoot>
									<GridList
										cellHeight={"300"}
										cols={3}
										className={classes.gridList}
										className="third"
									>
										{tileData.map((tile) => (
											<GridListTile key={tile.img}>
												<img
													src={tile.img}
													alt={tile.title}
													id={tile.id}
													class="menu_links"
													onClick={handleClick}
													draggable="false"
												/>
												<GridListTileBar
													title={tile.title}
													style={{
														height: "auto",
														backgroundColor: "none",
														color: "black"
													}}
												/>
											</GridListTile>
										))}
									</GridList>
								</GridRoot>
							</DivOptions>
						</Container>
					</Col>
				</Row>
			</Container>
		</DivFrame>
	);
}

export default App;
