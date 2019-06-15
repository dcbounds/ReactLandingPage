import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar.js";
import Portfolios from "./portfolio.js";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<Portfolios />

				<div className="text-center mt-5">
					<h1>Hello Rigo!</h1>
					<p>
						<img src={rigoImage} />
					</p>
					<a href="#" className="btn btn-success">
						If you see this green button... bootstrap is working
					</a>
					<p>
						Made by{" "}
						<a href="http://www.4geeksacademy.com">
							4Geeks Academy
						</a>
						, with love!
					</p>
				</div>
			</div>
		);
	}
}
