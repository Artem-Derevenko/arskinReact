import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class BlockHeaderInfo extends React.Component {
	_showForm() {
		this.props.OnShowForm();
	}

	render() {
		return (
			<div className="header-info-wrapp">
				<Link to="/" className="logo-tablet-wrap">
					<img className="logo-tablet" src="img/logo-tablet.svg" alt="logo" />
				</Link>
				<ul className="contacts-header">
					<li>
						<a href="mailto:ogm@arskin.com.ua"  className="email transition">ogm@arskin.com.ua</a>
					</li>
					<li className="language">
						<a href="" className="transition active">Ru</a>&nbsp;|&nbsp; 
						<a href="" className="transition">En</a>
					</li>
				</ul>
				<Link to="/" className="logo-header">
					<img src="img/logo_big.svg" alt="logo" />
				</Link>
				<span className="head-tel">+38 (048) 777 22 88</span>
				<span className="application transition" onClick={this._showForm.bind(this)}>связаться</span>
			</div>
		)
	}
}

export default connect(
    state => ({}),
    dispatch => ({
        OnShowForm: () => {
            dispatch({ type: 'SHOW_FORM' });
        }
    })
)(BlockHeaderInfo);
