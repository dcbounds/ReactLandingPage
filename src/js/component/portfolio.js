import React from "react";

export default class Portfolios extends React.Component {
	render() {
		return (
			<div>
				<div className="cardcontain">
					<h1> Beach Portfolio</h1>
					<div>
						<p>
							{" "}
							Below you will find some of the worlds finest places
							where Team Mike resides on the weekends. Blah blah
							beaches beaches beaches. We all love beaches.
						</p>
					</div>
					<div className="card-deck">
						<div className="card">
							<img
								className="card-img-top"
								src="https://picsum.photos/300/180/?blur"
								alt="Card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									This is a wider card with supporting text
									below as a natural lead-in to additional
									content. This content is a little bit
									longer.
								</p>
							</div>
						</div>
						<div className="card">
							<img
								className="card-img-top"
								src="https://picsum.photos/300/180/?blur"
								alt="Card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									This card has supporting text below as a
									natural lead-in to additional content.
								</p>
							</div>
						</div>
						<div className="card">
							<img
								className="card-img-top"
								src="https://picsum.photos/300/180/?blur"
								alt="Card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									This is a wider card with supporting text
									below as a natural lead-in to additional
									content. This card has even longer content
									than the first to show that equal height
									action.
								</p>
							</div>
						</div>

						<div className="card">
							<img
								className="card-img-top"
								src="https://picsum.photos/300/180/?blur"
								alt="Card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									This is a wider card with supporting text
									below as a natural lead-in to additional
									content. This card has even longer content
									than the first to show that equal height
									action.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
