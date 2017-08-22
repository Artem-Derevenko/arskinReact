import React from 'react';
import HeaderNav from './HeaderNav';
import { Link } from 'react-router';
import { connect } from 'react-redux';


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

	_activeMenu(link) {
	    this.props.OnActiveMenu(link);
	    window.scrollTo(0,0);
	}

	render() {
		return (
			<div>
				<div className="toggle transition" ref="toggle" onClick={this._clickToggleTablet.bind(this)}></div>
		      	<div className="toggle-active transition" ref="toggle_active" onClick={this._clickToggleActiveTablet.bind(this)}></div>
            	<div className="menu transition" ref="menu">
			      <Link to="/" onClick={this._activeMenu.bind(this, "home")} className="logo">
			        <img src="img/logo_big.svg" alt="logo" />
			      </Link> 
			      <HeaderNav />
			    </div>
			</div>
		)
	}
}

export default connect(
    state => ({}),
    dispatch => ({
        OnActiveMenu: (link) => {
            dispatch({ 
              type: 'ACTIVE_MENU',
              pageLink: link });
        }
    })
)(Header);