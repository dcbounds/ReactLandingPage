import React from "react";

export default class Portfolios extends React.Component {
	render() {
		return (
			<div>
				<h1 className="card"> Beach Portfolio</h1>
				<div>
					<p>
						{" "}
						Below you will find some of the worlds finest places
						where Team Mike resides on the weekends. Blah blah
						beaches beaches beaches. We all love beaches.
					</p>
				</div>

				<div className="card-deck">
					<div className="card mike">
						<img
							className="card-img-top"
							src="https://ssl.tzoo-img.com/images/blog/legacyblog/us/wp-content/uploads/2018/02/1_BoracayIsland_WhiteBeach_Philippines_shutterstock_401484094.jpg?width=817&spr=1.5"
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title">
								<a href="">Boracay White Beach, Philippines</a>
							</h5>
							<p className="card-text">
								This is one of the most beautiful Team Mike
								owned beaches in the universe. Blah blah beaches
								beaches beaches. We all love beaches.{" "}
							</p>
							<p className="card-text">
								<small className="text-muted">
									Last updated 3 mins ago
								</small>
							</p>
						</div>
					</div>
					<div className="card mike">
						<img
							className="card-img-top"
							src="https://ssl.tzoo-img.com/images/blog/legacyblog/us/wp-content/uploads/2018/02/3_NaPaliCoast_Kauai_Hawaii_shutterstock_618002255.jpg?width=817&spr=1.5"
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title">
								<a href="">Na Pali Coast, Kauai, Hawaii</a>
							</h5>
							<p className="card-text">
								Blah Blah...This is one of the most beautiful
								Team Mike owned beaches in the universe. Blah
								blah beaches beaches beaches. We all love
								beaches.
							</p>
							<p className="card-text">
								<small className="text-muted">
									Last updated 3 mins ago
								</small>
							</p>
						</div>
					</div>
					<div className="card mike">
						<img
							className="card-img-top"
							src="https://ssl.tzoo-img.com/images/blog/legacyblog/us/wp-content/uploads/2018/02/9_BinginBeach_Bali_shutterstock_628214399.jpg?width=820"
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title">
								<a href="">Bingin Beach, Bali, Indonesia</a>
							</h5>
							<p className="card-text">
								This is one of the most beautiful Team Mike
								owned beaches in the universe. Blah blah beaches
								beaches beaches. We all love beaches.
							</p>
							<p className="card-text">
								<small className="text-muted">
									Last updated 3 mins ago
								</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
