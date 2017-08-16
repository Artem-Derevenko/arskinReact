import React from 'react';
import { Link } from 'react-router';

class Footer extends React.Component {
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
		                  <Link to="/" className="transition">главная</Link>
		                </li>
		                <li>
		                  <Link to="company" className="transition">о компании</Link>
		                </li>
		                <li>
		                  <Link to="services" className="transition">услуги</Link>
		                </li>
		                <li>
		                  <Link to="fibrokamen" className="transition">фиброкамень</Link>
		                </li>
		                <li>
		                  <Link to="realisation" className="transition">проекты</Link>
		                </li>
		                <li>
		                  <Link to="ideas-trends" className="transition">идеи&тренды</Link>
		                </li>
		                <li>
		                  <Link to="contacts" className="transition">контакты</Link>
		                </li>
		                <li>
		                  <Link to="news" className="transition">новости</Link>
		                </li>
		              </ul>
		            </nav>
		        </div>
		    </section>
		)
	}
}

export default Footer;