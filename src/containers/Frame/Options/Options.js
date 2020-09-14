import React, { useRef } from "react";
import Platos from "../Platos/Platos";
import { OptionsDiv } from "./Options.style";
import { GridList, GridListTile, ListSubheader, GridListTileBar, makeStyles } from "@material-ui/core";

function App() {
	const ref = useRef(null);
	const useStyles = makeStyles((theme) => ({
		root: {
			backgroundColor: "transparent"
		},
		gridList: {
			width: 500,
			paddingBottom: "500px",
			paddingTop: "90px"
		},

		icon: {
			color: "rgba(255, 255, 255, 0.54)"
		}
	}));
	var id = "";
	document.addEventListener(
		"click",
		function(e) {
			id = e.target.id;
		},
		false
	);

	const handleClick = () => {
		ref.current.showToast(id);
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
			id: "prueba2"
		}
	];

	return (
		<div>
			<div className="context">
				<Platos ref={ref} />
			</div>
			<div className="context">
				<OptionsDiv>
					<div className="context2" style={{ marginLeft: "300px", overflow: "auto", height: "100vh" }}>
						<GridList cellHeight={"300"} className={classes.gridList}>
							<GridListTile
								key="Subheader"
								cols={2}
								style={{
									height: "auto",
									fontFamily: "Montserrat Light",
									fontWeight: 650,
									color: "black",
									fontSize: "13px",
									backgroundColor: "none"
								}}
							>
								<ListSubheader
									component="div"
									style={{
										height: "auto",
										fontFamily: "Montserrat Light",
										fontWeight: 650
									}}
								>
									SELECCIONAR DIBUJO
								</ListSubheader>
							</GridListTile>

							{tileData.map((tile) => (
								<GridListTile key={tile.img}>
									<img
										src={tile.img}
										alt={tile.title}
										id={tile.id}
										class="menu_links"
										onClick={handleClick}
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
				</OptionsDiv>
			</div>
		</div>
	);
}

export default App;
