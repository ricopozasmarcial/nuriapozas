import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavDiv } from "./NavBar.style";

const logo = {
	color: "black",
	fontSize: "25px",
	letterSpacing: "3px",
	fontFamily: "Montserrat Light",
	fontWeight: 600,
	marginTop: "5px",
	marginRight: "220px"
};

const barra = {
	background: "transparent",
	margin: "10px"
};

const elementos = {
	color: "black",
	fontSize: "15px",
	fontFamily: "Montserrat Light",
	letterSpacing: "3px",
	fontWeight: 600,
	marginTop: "13px"
};

class NavBar extends React.Component {
	render() {
		return (
			<NavDiv>
				<Navbar>
					<div class="mx-auto">
						<Nav style={barra}>
							<Nav.Link href="https://nuria-pozas.myshopify.com/" style={logo}>
								NURIA POZAS
							</Nav.Link>
							<Nav.Link href="https://nuria-pozas.myshopify.com/" style={elementos}>
								HOME
							</Nav.Link>
							<Nav.Link href="https://nuria-pozas.myshopify.com/" style={elementos}>
								TIENDA
							</Nav.Link>
							<Nav.Link href="https://nuria-pozas.myshopify.com/" style={elementos}>
								VAJILLA A MEDIDA
							</Nav.Link>
							<Nav.Link href="https://nuria-pozas.myshopify.com/" style={elementos}>
								CURSOS
							</Nav.Link>
							<Nav.Link href="https://nuria-pozas.myshopify.com/" style={elementos}>
								<div>
									<i className="fa fa-shopping-cart" />
								</div>
							</Nav.Link>
						</Nav>
					</div>
				</Navbar>
			</NavDiv>
		);
	}
}

export default NavBar;
