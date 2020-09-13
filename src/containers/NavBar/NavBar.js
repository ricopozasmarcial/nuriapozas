import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavDiv } from "./NavBar.style";

const logo = {
	color: "black",
	fontSize: "23px",
	letterSpacing: "3px",
	fontFamily: "Montserrat Light",
	fontWeight: 650,
	marginTop: "5px",
	marginRight: "220px"
};

const barra = {
	background: "transparent",
	marginTop: "10px"
};

const elementos = {
	color: "black",
	fontSize: "13px",
	fontFamily: "Montserrat Light",
	letterSpacing: "3px",
	fontWeight: 650,
	marginTop: "13px",
	marginRight: "10px"
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
							<Nav.Link href="https://nuria-pozas.myshopify.com/collections/all" style={elementos}>
								TIENDA
							</Nav.Link>
							<Nav.Link href="https://nuria-pozas.myshopify.com/pages/creatuvajilla" style={elementos}>
								VAJILLA A MEDIDA
							</Nav.Link>
							<Nav.Link href="https://nuria-pozas.myshopify.com/" style={elementos}>
								CURSOS
							</Nav.Link>
							<Nav.Link href="https://nuria-pozas.myshopify.com/cart" style={elementos}>
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
