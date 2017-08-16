import React from 'react';
import ReactMixin from 'react-mixin';
import ReactFire from 'reactfire';
import firebase from 'firebase';
import { Link } from 'react-router';
import ProjectSlider from './ProjectSlider';
import Footer from './Footer';

class PageIdeasTrends extends React.Component {
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
          <div id="styles" className="ideas-trends-elements">
            <img src="img/page-ideas-trends/ideas-trends-style.png" alt="" />
            <h3>Стили</h3>
            <div className="ideas-trends-line"></div>
            <p>Lorem ipsum dolor sit amet, elitr veniam et quo, melius verear eu vel. Accumsan scriptorem pro cu, quem option accusata cu has, an vix amet affert. Vidisse fastidii appareat pro at.<br />
            </p>
          </div><div id="materials" className="ideas-trends-elements">
            <img src="img/page-ideas-trends/ideas-trends-materials.png" alt="" />
            <h3>Виды материалов</h3>
            <div className="ideas-trends-line"></div>
            <p>Lorem ipsum dolor sit amet, elitr veniam et quo, melius verear eu vel. Accumsan scriptorem pro cu, quem option accusata cu has, an vix amet affert. Vidisse fastidii appareat pro at.<br />
            </p>
          </div><div id="objects" className="ideas-trends-elements">
            <img src="img/page-ideas-trends/ideas-trends-objects.png" alt="" />
            <h3>Объекты</h3>
            <div className="ideas-trends-line"></div>
            <p>Lorem ipsum dolor sit amet, elitr veniam et quo, melius verear eu vel. Accumsan scriptorem pro cu, quem option accusata cu has, an vix amet affert. Vidisse fastidii appareat pro at.<br />
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
ReactMixin(PageIdeasTrends.prototype, ReactFire);

export default PageIdeasTrends;