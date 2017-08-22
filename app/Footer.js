import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Footer extends React.Component {
	_activeMenu(link) {
    	this.props.OnActiveMenu(link);
    	window.scrollTo(0,0);
    }

	render() {
		return (
			<section id="contacts" className="wrapper-footer">
		        <div className="footer-background"></div>
		        <div className="contacts-background"></div>
		        <div className="wrapper-container">
		          <div className="contact">
		            <h2>контакты</h2>
		            <ul className="contacts-footer">
		              <li>
		                <a href="mailto:ogm@arskin.com.ua"  className="email transition">ogm@arskin.com.ua</a>
		              </li>
		              <li>
		                <span className="location">г. Одесса, ул. Атамана Головатого, 82</span>
		              </li>
		              <li>
		                <span className="tel">+38 (048) 777 22 88</span>
		              </li>
		            </ul>
		          </div>
		        </div>
		        <div className="footer">
		          <nav className="wrapper-container">
		              <ul className="nav-menu-footer">
		                <li>
		                  <Link to="/" className="transition" onClick={this._activeMenu.bind(this, "home")}>главная</Link>
		                </li>
		                <li>
		                  <Link to="company" className="transition" onClick={this._activeMenu.bind(this, "company")}>о компании</Link>
		                </li>
		                <li>
		                  <Link to="services" className="transition" onClick={this._activeMenu.bind(this, "services")}>услуги</Link>
		                </li>
		                <li>
		                  <Link to="fibrokamen" className="transition" onClick={this._activeMenu.bind(this, "fibrokamen")}>фиброкамень</Link>
		                </li>
		                <li>
		                  <Link to="realisation" className="transition" onClick={this._activeMenu.bind(this, "realisation")}>проекты</Link>
		                </li>
		                <li>
		                  <Link to="ideas-trends" className="transition" onClick={this._activeMenu.bind(this, "ideas-trends")}>идеи&тренды</Link>
		                </li>
		                <li>
		                  <Link to="news" className="transition" onClick={this._activeMenu.bind(this, "news")}>новости</Link>
		                </li>		                
		                <li>
		                  <Link to="contacts" className="transition" onClick={this._activeMenu.bind(this, "contacts")}>контакты</Link>
		                </li>
		              </ul>
		            </nav>
		        </div>
		    </section>
		)
	}
}

export default connect(
    state => ({
    	page: state.menu.page
    }),
    dispatch => ({
        OnActiveMenu: (link) => {
            dispatch({ 
            	type: 'ACTIVE_MENU',
            	pageLink: link });
        }
    })
)(Footer);
