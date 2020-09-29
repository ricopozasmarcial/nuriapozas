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
	const [ mostrarImagenes, setMostrarImagenes ] = useState(elementos);
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
			width: "50%",
			height: "auto",
			paddingBottom: "30%",
			paddingTop: "5px",
			overflowX: "hidden"
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
		document.getElementById("move2").style.transform = "translate(" + 0 + "px," + 0 + "px)";
		document.getElementById("move").style.transform = "translate(" + 0 + "px," + 0 + "px)";
		var i = { name: e.target.id, top: 0, left: 0, width: "300px", height: "300px", angle: "rotate(000 deg)" };
		var listina = fotos;
		listina[actual] = i;
		setFotos(listina);
		ref.current.showToast(e.target.id, i.top, i.left, i.width, i.height, i.angle, limite);

		console.log(limite);
		if (limite === "1" || actual === limite) {
			document.getElementById("tramitar").disabled = false;
		}
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
			setMostrarImagenes(null);
		} else {
			setMostrarImagenes(elementos);
		}
	};

	const handleJoyrideCallback = (event) => {
		if (event.lifecycle === "tooltip" && event.index === 0) {
			setMostrarImagenes(null);
		}
		if (event.type === "step:after" && event.index === 4) {
			ref.current.showToast("prueba4", 0, 0, "500px", "500px");
		}
		if (event.action === "next" && event.index === 3) {
			setShow(false);
			setKey(2);
			elementos = null;
			setDibujos(elementos);
			ref.current.setFondoA("url('img/fondoPlato.png')");
		}
		if (event.status === "finished") {
			setShow(true);
			setMostrarImagenes(elementos);
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
			ref.current.crearProducto(fotos[actual].name, actual);
			var childPos = document.getElementById("move2").getBoundingClientRect();
			var parentPos = document.getElementById("fondo").getBoundingClientRect();
			var lista2 = fotos;
			lista2[actual] = {
				name: fotos[actual].name,
				top: childPos.top - parentPos.top,
				left: childPos.left - parentPos.left,
				angle: document.getElementById("move").style.transform,
				width: document.getElementById("move").style.width,
				height: document.getElementById("move").style.height
			};
			setFotos(lista2);
		}
		if (fotos[actual - 1] === undefined) ref.current.showToast("", 0, 0, "300px", "300px", "rotate(000 deg)");
		else {
			ref.current.showToast(
				fotos[actual - 1].name,
				fotos[actual - 1].top,
				fotos[actual - 1].left,
				fotos[actual - 1].width,
				fotos[actual - 1].height,
				fotos[actual - 1].angle
			);
		}
		if (actual === 0) {
			document.getElementById("anterior").disabled = true;
		} else {
			setActual(actual - 1);
			document.getElementById("siguiente").disabled = false;
			document.getElementById("tramitar").disabled = false;
		}
	};

	const nextImage = () => {
		var childPos2 = document.getElementById("move2").getBoundingClientRect();
		var parentPos2 = document.getElementById("fondo").getBoundingClientRect();
		if (fotos[actual] !== undefined) {
			ref.current.crearProducto(fotos[actual].name, actual);
			var lista = fotos;
			lista[actual] = {
				name: fotos[actual].name,
				top: childPos2.top - parentPos2.top,
				left: childPos2.left - parentPos2.left,
				angle: document.getElementById("move").style.transform,
				width: document.getElementById("move").style.width,
				height: document.getElementById("move").style.height
			};
			setFotos(lista);
		}
		if (fotos[actual + 1] === undefined) {
			ref.current.showToast("", 0, 0, "300px", "300px", "rotate(000 deg)");
		} else {
			ref.current.showToast(
				fotos[actual + 1].name,
				fotos[actual + 1].top,
				fotos[actual + 1].left,
				fotos[actual + 1].width,
				fotos[actual + 1].height,
				fotos[actual + 1].angle
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
	};

	const deleteImage = () => {
		const newList = fotos;
		newList[actual] = undefined;
		setFotos(newList);
		document.getElementById("img").setAttribute("src", "");
		document.getElementById("move2").style.transform = "translate(" + 0 + "px," + 0 + "px)";
		document.getElementById("move").style.transform = "translate(" + 0 + "px," + 0 + "px)";
		document.getElementById("tramitar").disabled = true;
		ref.current.crearProducto(null, actual);
	};

	const classes = useStyles();
	const steps = [
		{
			target: ".my-1",
			content: "Primero selecciona la cantidad piezas que compondrán tu vajilla.",
			disableBeacon: true
		},

		{
			target: ".second",
			disableBeacon: true,
			content:
				"Selecciona el tipo de vajilla haciendo click en la imagen correspondiente.\n\nUna vez selecciones ambos te llevará a la página de personalización de la/s pieza/s."
		},
		{
			target: ".second2",
			disableBeacon: true,
			content: "Sin los dos pasos previos no podrás editar las piezas de la vajilla."
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
			content: "Una vez seleccionado un dibujo puedes moverlo por la pieza a tu gusto."
		},
		{
			target: "#zoom",
			disableBeacon: true,
			content:
				"Puedes girar, aumentar y disminuir el tamaño del dibujo con estos controles. También puedes eliminar el diseño"
		}
	];

	const tileData = [
		{
			img: "img/prueba4.png",
			title: "Medusa azul",
			id: "prueba4",
			colection: "Minimalista"
		},
		{
			img: "img/prueba9.png",
			title: "Medusa negra",
			id: "prueba9",
			colection: "Minimalista"
		},
		{
			img: "img/prueba13.png",
			title: "Medusa amarilla",
			id: "prueba13",
			colection: "Minimalista"
		},
		{
			img: "img/prueba17.png",
			title: "Medusa rosada",
			id: "prueba17",
			colection: "Minimalista"
		},
		{
			img: "img/prueba3.png",
			title: "Faro",
			id: "prueba3",
			colection: "Salitre"
		},
		{
			img: "img/prueba16.png",
			title: "Orca",
			id: "prueba16",
			colection: "Salitre"
		},
		{
			img: "img/prueba19.png",
			title: "Pingüino",
			id: "prueba19",
			colection: "Salitre"
		},
		{
			img: "img/prueba20.png",
			title: "Cangrejo",
			id: "prueba20",
			colection: "Salitre"
		},
		{
			img: "img/prueba7.png",
			title: "Ciervo",
			id: "prueba7",
			colection: "Cérvidos"
		},
		{
			img: "img/prueba8.png",
			title: "Cebolla",
			id: "prueba8",
			colection: "Bocados"
		},
		{
			img: "img/prueba12.png",
			title: "Guindilla",
			id: "prueba12",
			colection: "Bocados"
		},
		{
			img: "img/prueba14.png",
			title: "Setas",
			id: "prueba14",
			colection: "Bocados"
		},
		{
			img: "img/prueba5.png",
			title: "Llena",
			id: "prueba5",
			colection: "Noche"
		},
		{
			img: "img/prueba10.png",
			title: "Creciente",
			id: "prueba10",
			colection: "Noche"
		},
		{
			img: "img/prueba2.png",
			title: "Flor",
			id: "prueba2",
			colection: "Botánica"
		},
		{
			img: "img/prueba6.png",
			title: "Flor",
			id: "prueba6",
			colection: "Botánica"
		},
		{
			img: "img/prueba11.png",
			title: "Flor",
			id: "prueba11",
			colection: "Botánica"
		},
		{
			img: "img/prueba15.png",
			title: "Flor",
			id: "prueba15",
			colection: "Botánica"
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
												<Badge variant="secondary">¡Nuevos diseños!</Badge>
											</h2>
											<p>
												*El producto está hecho a mano, por tanto recibirás una aproximación al
												diseño mostrado.
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

										<div style={{ marginTop: "20px" }}>
											<Form>
												<Form.Row className="align-items-center">
													<Col xs="auto" className="my-1">
														<h6>Tamaño vajilla</h6>
														<Form.Control
															as="select"
															className="mr-sm-2"
															id="inlineFormCustomSelect"
															onChange={showImagenes}
															style={{
																marginLeft: "20px",
																border: "2px solid darkGrey",
																backgroundColor: "#e9ecef"
															}}
														>
															<option value="0">___</option>
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

											<Container style={mostrarImagenes} className="second">
												<Row>
													<Col xs={12} md={4}>
														<OverlayTrigger
															trigger="hover"
															placement="bottom"
															overlay={
																<Popover>
																	<Popover.Title as="h3">
																		Plato llano grande
																	</Popover.Title>
																	<Popover.Content>
																		Medida aproximada de 27cm{" "}
																	</Popover.Content>
																</Popover>
															}
														>
															<div>
																<h6>
																	<Badge
																		variant="dark"
																		style={{
																			top: "45%",
																			left: "38%",
																			position: "absolute",
																			cursor: "pointer"
																		}}

																		onClick={showTab}
																		id="1"
																	>
																		Plato 27cm
																	</Badge>
																</h6>
																<Image
																	src="img/fondoPlato27Peq.png"
																	onClick={showTab}
																	id="1"
																	style={{ cursor: "pointer" }}
																	rounded
																/>
															</div>
														</OverlayTrigger>
													</Col>
													<Col xs={12} md={4}>
														<OverlayTrigger
															trigger="hover"
															placement="bottom"
															overlay={
																<Popover>
																	<Popover.Title as="h3">
																		Plato llano mediano
																	</Popover.Title>
																	<Popover.Content>
																		Medida aproximada de 22cm{" "}
																	</Popover.Content>
																</Popover>
															}
														>
															<div>
																<h6>
																	<Badge
																		variant="dark"
																		style={{
																			top: "45%",
																			left: "38%",
																			position: "absolute",
																			cursor: "pointer"
																		}}
																		onClick={showTab}
																	id="2"
																	>
																		Plato 22cm
																	</Badge>
																</h6>
																<Image
																	src="img/fondoPlato22Peq.png"
																	onClick={showTab}
																																			
																id="2"

																	style={{ cursor: "pointer", marginTop: "10px" }}
																	rounded
																/>
															</div>
														</OverlayTrigger>
													</Col>
													<Col xs={12} md={4}>
														<OverlayTrigger
															trigger="hover"
															placement="bottom"
															overlay={
																<Popover>
																	<Popover.Title as="h3">Cuenco</Popover.Title>
																	<Popover.Content>
																		Medida aproximada de 15cm{" "}
																	</Popover.Content>
																</Popover>
															}
														>
															<div>
																<h6>
																	<Badge
																		variant="dark"
																		style={{
																			top: "45%",
																			left: "38%",
																			position: "absolute",
																			cursor: "pointer"
																		}}
																		onClick={showTab}
																		id="3"
																		
																	>
																		Cuenco 15cm
																	</Badge>
																</h6>
																<Image
																	src="img/cuencoPeq.png"
																	onClick={showTab}
																	id="3"
																	style={{ cursor: "pointer", marginTop: "20px" }}
																	rounded
																/>
															</div>
														</OverlayTrigger>
													</Col>
												</Row>
											</Container>
										</div>
									</Jumbotron>
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
									<DivPlatos className="four">
										<Platos ref={ref} />
										<div
											style={{
												margin: "10px",
												color: "black",
												fontFamily: "Montserrat"
											}}
										>
											{actual + 1} / {limite}
										</div>
										<Button
											id="anterior"
											variant="dark"
											style={{ margin: "10px" }}
											onClick={previousImage}
											disabled={actual === 0 ? "true" : ""}
										>
											<i className="fa fa-chevron-left fa-lg" />{" "}
										</Button>
										<Button
											id="siguiente"
											variant="dark"
											style={{ margin: "10px" }}
											onClick={nextImage}
											disabled={actual === limite - 1 ? "true" : ""}
										>
											<i className="fa fa-chevron-right fa-lg" />{" "}
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
													subtitle={tile.colection}
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
