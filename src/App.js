import React from "react";
import "./App.css";
import NavBar from "./containers/NavBar/NavBar";
import Frame from "./containers/Frame/Frame";
import Footer from "./containers/Footer/Footer";
function App() {
	return (
		<div className="App">
			<NavBar />
			<Frame />
			<Footer />
		</div>
	);
}

export default App;
