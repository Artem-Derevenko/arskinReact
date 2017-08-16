import React from 'react';
import ReactMixin from 'react-mixin';
import ReactFire from 'reactfire';
import firebase from 'firebase';
import { Link } from 'react-router';
import ProjectSlider from './ProjectSlider';
import Maps from './Maps';
import Footer from './Footer';

class PageContacts extends React.Component {
	constructor() {
	    super();
	    this.state = {
	      projectsList: []
	    }
	}

	componentDidMount() {
		this.bindAsArray(firebase.database().ref().child("projects"), "projectsList");
	}

	render() {
		return ( 
			<div> 
				<section id="wrapp-page-contacts">
			        <div className="contacts-map">
			          <div className="page-contact-info">
			            <h2>контакты</h2>
			            <div className="mail-page-contacts">
			              <a href="mailto:ogm@arskin.com.ua"  className="transition">ogm@arskin.com.ua</a>
			            </div>
			            <div className="location-page-contacts">
			              <span className="location">г. Одесса, ул. Атамана Головатого, 82</span>
			            </div>
			            <div className="tel-page-contacts">
			              <span className="tel">+38 (048) 777 22 88</span>
			            </div>
			          </div>
			          <div className="map">
			            <Maps />
			            <img src="img/triangle.png" alt="" />
			          </div>
			        </div>

			        <div className="wrapper-container">
			          <h2>связаться</h2>
			          <form method="post" className="page-contact-form">
			            <div className="wrapp-name-email">
			              <div className="wrapper-input transition">
			                <input type="text" name="contact_name" placeholder="ИМЯ" required />
			              </div>
			              <div className="wrapper-input transition">
			                <input type="email" name="contact_email"  placeholder="EMAIL" required />
			              </div>
			            </div>
			            <div className="wrapper-message transition">
			              <textarea name="contact_msg" placeholder="СООБЩЕНИЕ" required ></textarea>
			            </div>

			            <div className="transition form-feedback-button">
			              <span className="button-style-1 transition">ОТПРАВИТЬ</span>
			            </div>
			          </form> 
			        </div>

			        <div className="completed-projects">
			            <div className="wrapper-container">
			              <h2>Реализованные проекты</h2>
			              <div id="completed-projects-carousel" className="owl-carousel carusel-projects">
			                <ProjectSlider project={this.state.projectsList} />
			              </div>
			            </div>
			        </div>
			    </section>
				<Footer />
            </div>
		)
	}
}
ReactMixin(PageContacts.prototype, ReactFire);

export default PageContacts;