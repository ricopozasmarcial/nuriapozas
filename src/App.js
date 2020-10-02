import React from "react";
import "./App.css";
import Alert from "react-bootstrap/Alert";

import NavBar from "./containers/NavBar/NavBar";
import Options from "./containers/Frame/Options/Options";
import Footer from "./containers/Footer/Footer";
function App() {
	return (
		<div className="App">
			<Alert
				style={{
					maxHeight: "45px",
					padding: "none",
					margin: "0",
					fontFamily: "Montserrat, sans-serif",
					backgroundColor: "#f2f2f2",
					border: "none"
				}}
				variant="secondary"
			>
				Gastos de envío gratis a partir de 100€
			</Alert>
			<NavBar />
			<Options />
			<Footer />
		</div>
	);
}

export default App;
