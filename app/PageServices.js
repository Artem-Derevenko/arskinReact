import React from 'react';
import ReactMixin from 'react-mixin';
import ReactFire from 'reactfire';
import firebase from 'firebase';
import { Link } from 'react-router';
import ProjectSlider from './ProjectSlider';
import Footer from './Footer';

class PageServices extends React.Component {
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
        <section id="wrapp-services">
          <div id="projection" className="ideas-trends-elements">
            <img src="img/page-ideas-trends/ideas-trends-style.png" alt="" />
            <h3>проектирование</h3>
            <div className="ideas-trends-line"></div>
            <p>Lorem ipsum dolor sit amet, elitr veniam et quo, melius verear eu vel. Accumsan scriptorem pro cu, quem option accusata cu has, an vix amet affert. Vidisse fastidii appareat pro at.<br />
              <Link to="realisation/design" className="hyperlink"><span>посмотреть проекты</span></Link>
            </p>
          </div>
          <div id="production" className="ideas-trends-elements">
            <img src="img/page-ideas-trends/ideas-trends-materials.png" alt="" />
            <h3>производство</h3>
            <div className="ideas-trends-line"></div>
            <p>Lorem ipsum dolor sit amet, elitr veniam et quo, melius verear eu vel. Accumsan scriptorem pro cu, quem option accusata cu has, an vix amet affert. Vidisse fastidii appareat pro at.<br />
              <Link to="realisation/production" className="hyperlink"><span>посмотреть проекты</span></Link>
            </p>
          </div>
          <div id="installation" className="ideas-trends-elements">
            <img src="img/page-ideas-trends/ideas-trends-objects.png" alt="" />
            <h3>монтаж</h3>
            <div className="ideas-trends-line"></div>
            <p>Lorem ipsum dolor sit amet, elitr veniam et quo, melius verear eu vel. Accumsan scriptorem pro cu, quem option accusata cu has, an vix amet affert. Vidisse fastidii appareat pro at.<br />
              <Link to="realisation/installation" className="hyperlink"><span>посмотреть проекты</span></Link>
            </p>
          </div>
          <div id="provision-services" className="ideas-trends-elements">
            <img src="img/page-ideas-trends/ideas-trends-materials.png" alt="" />
            <h3>обслуживание</h3>
            <div className="ideas-trends-line"></div>
            <p>Lorem ipsum dolor sit amet, elitr veniam et quo, melius verear eu vel. Accumsan scriptorem pro cu, quem option accusata cu has, an vix amet affert. Vidisse fastidii appareat pro at.<br />
              <Link to="realisation/service" className="hyperlink"><span>посмотреть проекты</span></Link>
            </p>
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
ReactMixin(PageServices.prototype, ReactFire);

export default PageServices;