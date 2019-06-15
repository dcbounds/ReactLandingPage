import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar.js";
import Portfolios from "./portfolio.js";
import Hero from "./hero.js";
import Form from "./form.js";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<Hero />
				<Portfolios />

				<p className="text-center mt-5">
					Made by Darius Bounds, with love!
				</p>
			</div>
		);
	}
}
