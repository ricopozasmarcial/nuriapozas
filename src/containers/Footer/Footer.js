import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
	return (
		<MDBFooter color="blue" className="font-small pt-4 mt-4">
			<hr
				style={{
					width: "50px",
					marginBottom: "70px",
					marginLeft: "50%",
					height: "2px",
					border: "none",
					backgroundColor: "black"
				}}
			/>
			<MDBContainer fluid className="text-center text-md-left" style={{ marginBottom: "70px" }}>
				<MDBRow>
					<MDBCol md="2" style={{ marginLeft: "20%", marginRight: "0px", padding: "none" }}>
						<ul>
							<li className="list-unstyled">
								<a target="_parent" href="https://nuriapozasceramic.com/policies/terms-of-service">
									Términos del servicio
								</a>
							</li>

							<li className="list-unstyled">
								<a target="_parent" href="https://nuriapozasceramic.com/policies/refund-policy">
									Política de reembolso
								</a>
							</li>
							<li className="list-unstyled">
								<a target="_parent" href="https://nuriapozasceramic.com/policies/legal-notice">
									Aviso legal
								</a>
							</li>
							<li className="list-unstyled">
								<a target="_parent" href="https://nuriapozasceramic.com/policies/privacy-policy">
									Política de privacidad
								</a>
							</li>
						</ul>
					</MDBCol>
					<MDBCol md="2" style={{ padding: "none" }}>
						<ul>
							<li className="list-unstyled">
								<a target="_parent" href="https://www.facebook.com/nuriapozasceramica">
									{" "}
									<i class="fa fa-facebook-f"> </i> Facebook
								</a>
							</li>
							<li className="list-unstyled">
								<a target="_parent" href="https://www.instagram.com/nuria_pozas/?hl=es">
									{" "}
									<i class="fa fa-instagram"> </i> Instagram
								</a>
							</li>
						</ul>
					</MDBCol>
					<MDBCol md="2" style={{ padding: "none", justifyItems: "right" }}>
						<MDBContainer fluid id="fff">
							&copy; {new Date().getFullYear()}
							<a target="_parent" href="https://www.nuriapozasceramic.com">
								, Nuria Pozas{" "}
							</a>
						</MDBContainer>
						<img src="img/pago.PNG" draggable="false" />
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		</MDBFooter>
	);
};

export default Footer;
