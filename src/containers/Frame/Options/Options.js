import React, { useRef } from "react";
import Platos from "../Platos/Platos";
import { GridList, GridListTile, GridListTileBar, makeStyles } from "@material-ui/core";
import { Container, Row, Col } from 'react-bootstrap';
function App() {
	const ref = useRef(null);
	const useStyles = makeStyles((theme) => ({
		root: {
			position: "relative",
			width: "100%",
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'space-around',
			overflow: 'hidden',
			backgroundColor: "transparent"
		},
		gridList: {
			position: "relative",
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'space-around',
			overflow: 'hidden',
			backgroundColor: "transparent",
			width: "auto",
			height: "auto",
			paddingBottom: "500px",
			paddingTop: "5px",

		},
		icon: {
			color: "rgba(255, 255, 255, 0.54)"
		}
	}));
	var id;
	document.addEventListener(
		"click",
		function (e) {
			id = e.target.id;
		},
		false
	);

	const handleClick = (e) => {
		ref.current.showToast(e.target.id);
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
		<div style={{ position: "relative", overflow: "auto", height: "100vh" }}>
			<Container fluid>
				<Row >
					<Col md="70%">
						<h2
							style={{
								position: "relative",
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
						<Container fluid>
							<Platos ref={ref} />
						</Container>
					</Col>
					<Col md="50%">
						<Container fluid>
							<div class="context2" style={{ position: "absolute", overflow: "auto", height: "100vh" }}>
								<h2
									style={{
										position: "relative",
										textAlign: "center",
										height: "auto",
										fontFamily: "Montserrat Light",
										fontWeight: 650,
										color: "black",
										marginTop: "40px",
										fontSize: "15px",
										backgroundColor: "white",
									}}
								>
									{" "}
							SELECCIONAR DIBUJO{" "}
								</h2>
								<hr />
								<div className={classes.root}>
									<GridList
										cellHeight={"200"}
										cols={3}
										className={classes.gridList}

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
														fontFamily: "Montserrat Light",
														backgroundColor: "none",
														color: "black"
													}}
												/>
											</GridListTile>
										))}
									</GridList>
								</div>
							</div>
						</Container>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
