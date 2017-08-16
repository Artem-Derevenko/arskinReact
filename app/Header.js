import React from 'react';
import HeaderNav from './HeaderNav';
import { Link } from 'react-router';


class Header extends React.Component {
	_clickToggleTablet(event) {
		this.refs.menu.classList.add("visible");
		this.refs.toggle.style.display = "none";
		this.refs.toggle_active.classList.add("visible");
	}

	_clickToggleActiveTablet(event) {
		this.refs.menu.classList.remove("visible");
		this.refs.toggle.style.display = "block";
		this.refs.toggle_active.classList.remove("visible");
	}

	render() {
		return (
			<div>
				<div className="toggle transition" ref="toggle" onClick={this._clickToggleTablet.bind(this)}></div>
		      	<div className="toggle-active transition" ref="toggle_active" onClick={this._clickToggleActiveTablet.bind(this)}></div>
            	<div className="menu transition" ref="menu">
			      <Link to="/" className="logo">
			        <img src="img/logo_big.svg" alt="logo" />
			      </Link> 
			      <HeaderNav />
			    </div>
			</div>
		)
	}
}

export default Header;