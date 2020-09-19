import React, { useRef, useState } from "react";
import Platos from "../Platos/Platos";
import { Button, Form, Jumbotron, Accordion, Image, Card, Badge, Tabs, Tab } from "react-bootstrap";

import { GridList, GridListTile, GridListTileBar, makeStyles } from "@material-ui/core";
import { Container, Row, Col } from "react-bootstrap";
import { DivFrame, DivPlatos, DivOptions, H2Plato, H2Select, GridRoot } from "./Options.style";

function App() {
	const ref = useRef(null);
	const [ show, setShow ] = useState(true);
	const [ key, setKey ] = useState(1);

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
		ref.current.showToast(e.target.id);
	};

	const showTab = (e) => {
		setShow(false);
		setKey(2);
	};
	var elementos = {
		pointerEvents: "none",
		opacity: "0.4"
	};
	const handleSelect = (eventKey) => {
		if (eventKey === "2") {
			document.getElementById("context2").style = null;
		}
		if (eventKey === "1") {
			document.getElementById("context2").style.opacity = "0.4";
			document.getElementById("context2").style.pointerEvents = "none";
		}
	};
	const classes = useStyles();

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
		<DivFrame>
			<Container fluid>
				<Row>
					<Col>
						<Container fluid>
							<Tabs
								defaultActiveKey="1"
								activeKey={key}
								onSelect={handleSelect}
								id="uncontrolled-tab-example"
								style={{ marginTop: "35px" }}
							>
								<Tab eventKey="1" tabClassName="d-none" title="Elige">
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
											<Accordion defaultActiveKey="1" style={{ backgroundColor: "transparent" }}>
												<Card style={{ backgroundColor: "transparent", border: "none" }}>
													<Card.Header
														style={{ backgroundColor: "transparent", border: "none" }}
													>
														<Accordion.Toggle
															as={Button}
															variant="outline-dark"
															eventKey="0"
														>
															¿Cómo funciona?
														</Accordion.Toggle>
													</Card.Header>
													<Accordion.Collapse eventKey="0">
														<Card.Body style={{ whiteSpace: "pre-wrap" }}>
															{"1.Primero selecciona el tipo y la cantidad de platos que compondrán tu vajilla.\n2.Elige un dibujo de la" +
																"parte derecha. Puedes moverlo por el plato, hacerlo más grande o más pequeño" +
																"\n3. alsdhasdñikajsdñaskdjasñdklajsdaksdhadñiasdaskd"}
														</Card.Body>
													</Accordion.Collapse>
												</Card>
											</Accordion>
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
												>
													<option value="0">Choose...</option>
													<option value="1">x1 </option>
													<option value="2">Two</option>
													<option value="3">Three</option>
												</Form.Control>
											</Col>
										</Form.Row>
									</Form>
									<Container>
										<Row>
											<Col xs={6} md={4}>
												<Image src="img/fondoPlatoPeq.png" onClick={showTab} />
											</Col>
											<Col xs={6} md={4}>
												<Image src="img/fondoPlatoHondoPeq.png" onClick={showTab} />
											</Col>
										</Row>
									</Container>
								</Tab>
								<Tab eventKey="2" tabClassName="d-none" hidden={show} title="Diseña">
									<DivPlatos>
										<Platos ref={ref} />
										<Button
											id="tramitar"
											variant="outline-dark"
											onClick={() => {
												setKey(1);
											}}
										>
											ATRAS{" "}
										</Button>
									</DivPlatos>
								</Tab>
							</Tabs>
						</Container>
					</Col>
					<Col>
						<Container fluid id="cara">
							<H2Select> SELECCIONAR DIBUJO </H2Select>
							<hr />
							<DivOptions id="context2" style={elementos}>
								<GridRoot>
									<GridList cellHeight={"300"} cols={3} className={classes.gridList}>
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
