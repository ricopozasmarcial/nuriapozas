import React, { useRef } from "react";
import Platos from "../Platos/Platos";
import { OptionsDiv } from "./Options.style";
import { GridList, GridListTile, ListSubheader, GridListTileBar, makeStyles } from "@material-ui/core";

function App() {
	const ref = useRef(null);
	const useStyles = makeStyles((theme) => ({
		root: {
			display: "flex",
			flexWrap: "wrap",
			justifyContent: "space-around",
			backgroundColor: theme.palette.background.paper
		},
		gridList: {
			width: 500,
			height: 450
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
			title: "Flor",
			id: "prueba"
		},
		{
			img: "img/prueba2.png",
			title: "Flor",
			id: "prueba2"
		},
		{
			img: "img/prueba3.png",
			title: "Flor",
			id: "prueba3"
		},
		{
			img: "img/prueba2.png",
			title: "Flor",
			id: "prueba2"
		},
		{
			img: "img/prueba2.png",
			title: "Flor",
			id: "prueba2"
		},
		{
			img: "img/prueba2.png",
			title: "Flor",
			id: "prueba2"
		},
		{
			img: "img/prueba2.png",
			title: "Flor",
			id: "prueba2"
		}
	];

	return (
		<OptionsDiv className="App">
			<div className={classes.root}>
				<GridList cellHeight={180} className={classes.gridList}>
					<GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
						<ListSubheader component="div">Seleccionar dibujo</ListSubheader>
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
							<GridListTileBar title={tile.title} />
						</GridListTile>
					))}
				</GridList>
			</div>
			<Platos ref={ref} />
		</OptionsDiv>
	);
}

export default App;
