import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
	renderContent() {
		const { auth } = this.props;

		switch (auth) {
			case null:
				return;
			case false:
				return (
					<li>
						<a href="/auth/google/">Login With Google</a>
					</li>
				);
			default:
				return (
					<li>
						<a href="/api/logout">Logout</a>
					</li>
				);
		}
	}
	render() {
		console.log(this.props);
		return (
			<nav>
				<div className="container nav-wrapper">
					<a href="/" className="left brand-logo">
						Emaily
					</a>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						{this.renderContent()}
					</ul>
				</div>
			</nav>
		);
	}
}

export default connect(({ auth }) => ({ auth }))(Header);
