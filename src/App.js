import React from "react";
import "./App.css";
import NavBar from "./containers/NavBar/NavBar";
import Options from "./containers/Frame/Options/Options";
import Footer from "./containers/Footer/Footer";
function App() {
	return (
		<div className="App">
			<Options />
			<Footer />
		</div>
	);
}

export default App;
