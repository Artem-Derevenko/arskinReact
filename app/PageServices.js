import React from 'react';
import ReactMixin from 'react-mixin';
import ReactFire from 'reactfire';
import firebase from 'firebase';
import { Link } from 'react-router';
import ProjectSlider from './ProjectSlider';
import Footer from './Footer';
import { connect } from 'react-redux';

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

  _activeMenu(link) {
    this.props.OnActiveMenu(link);
    window.scrollTo(0,0);
  }

  _getCoords(elem) { 
    var box = elem.getBoundingClientRect();

    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
  }
  
  _scrollingToAnchor1(element) { 
    let elem = element.refs.projection; 
    let positionTop = this._getCoords(elem).top;
    window.scrollTo(0, positionTop);
  }

  _scrollingToAnchor2(element) { 
    let elem = element.refs.production; 
    let positionTop = this._getCoords(elem).top;
    window.scrollTo(0, positionTop);
  }

  _scrollingToAnchor3(element) { 
    let elem = element.refs.installation; 
    let positionTop = this._getCoords(elem).top;
    window.scrollTo(0, positionTop);
  }

  _scrollingToAnchor4(element) { 
    let elem = element.refs.provision_services; 
    let positionTop = this._getCoords(elem).top;
    window.scrollTo(0, positionTop);
  }

	render() {
    if (this.props.anchor === "projection") { 
      this._scrollingToAnchor1(this);
    }

    if (this.props.anchor === "production") { 
      this._scrollingToAnchor2(this);
    }

    if (this.props.anchor === "installation") { 
      this._scrollingToAnchor3(this);
    }

    if (this.props.anchor === "provision_services") { 
      this._scrollingToAnchor4(this);
    } 

		return (
			<div> 
        <section id="wrapp-services">
          <div ref="projection" id="projection" className="ideas-trends-elements">
            <img src="img/page-ideas-trends/ideas-trends-style.png" alt="" />
            <h3>проектирование</h3>
            <div className="ideas-trends-line"></div>
            <p>Lorem ipsum dolor sit amet, elitr veniam et quo, melius verear eu vel. Accumsan scriptorem pro cu, quem option accusata cu has, an vix amet affert. Vidisse fastidii appareat pro at.<br />
              <Link to="realisation/design" className="hyperlink" onClick={this._activeMenu.bind(this, "realisation")}><span>посмотреть проекты</span></Link>
            </p>
          </div>
          <div ref="production" id="production" className="ideas-trends-elements">
            <img src="img/page-ideas-trends/ideas-trends-materials.png" alt="" />
            <h3>производство</h3>
            <div className="ideas-trends-line"></div>
            <p>Lorem ipsum dolor sit amet, elitr veniam et quo, melius verear eu vel. Accumsan scriptorem pro cu, quem option accusata cu has, an vix amet affert. Vidisse fastidii appareat pro at.<br />
              <Link to="realisation/production" className="hyperlink" onClick={this._activeMenu.bind(this, "realisation")}><span>посмотреть проекты</span></Link>
            </p>
          </div>
          <div ref="installation" id="installation" className="ideas-trends-elements">
            <img src="img/page-ideas-trends/ideas-trends-objects.png" alt="" />
            <h3>монтаж</h3>
            <div className="ideas-trends-line"></div>
            <p>Lorem ipsum dolor sit amet, elitr veniam et quo, melius verear eu vel. Accumsan scriptorem pro cu, quem option accusata cu has, an vix amet affert. Vidisse fastidii appareat pro at.<br />
              <Link to="realisation/installation" className="hyperlink" onClick={this._activeMenu.bind(this, "realisation")}><span>посмотреть проекты</span></Link>
            </p>
          </div>
          <div ref="provision_services" id="provision-services" className="ideas-trends-elements">
            <img src="img/page-ideas-trends/ideas-trends-materials.png" alt="" />
            <h3>обслуживание</h3>
            <div className="ideas-trends-line"></div>
            <p>Lorem ipsum dolor sit amet, elitr veniam et quo, melius verear eu vel. Accumsan scriptorem pro cu, quem option accusata cu has, an vix amet affert. Vidisse fastidii appareat pro at.<br />
              <Link to="realisation/service" className="hyperlink" onClick={this._activeMenu.bind(this, "realisation")}><span>посмотреть проекты</span></Link>
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

export default connect(
    state => ({
      anchor: state.anchor.active_anchor
    }),
    dispatch => ({
        OnActiveMenu: (link) => {
            dispatch({ 
              type: 'ACTIVE_MENU',
              pageLink: link });
        }
    })
)(PageServices);

