import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class ArchitecturalDesign extends React.Component {
	_elementMouseover(event) {
        event.currentTarget.parentNode.querySelector('.architectural-design-img-inactive').classList.add("active");
    }

    _elementMouseleave(event) {
        event.currentTarget.parentNode.querySelector('.architectural-design-img-inactive').classList.remove("active");
    }

    _getCoords(elem) { 
	  var box = elem.getBoundingClientRect();

	  return {
	    top: box.top + pageYOffset,
	    left: box.left + pageXOffset
	  };
	}

	_scrollingToAnchor(element) {
		let elem = element.refs.architectural_design;
		let positionTop = this._getCoords(elem).top;
		window.scrollTo(0, positionTop);
	}

	_activeMenu(link) {
	    this.props.OnActiveMenu(link);
	    window.scrollTo(0,0);
	}

	render() {
		if (this.props.anchor === "architectural_design") { 
			this._scrollingToAnchor(this);
		}
		return (
			<section ref="architectural_design" id="architectural-design">
		        <img src="img/architectural-design/slide.png" className="architectural-design-slide-0" alt="" />
		        <img src="img/architectural-design/slide-tablet.png" className="architectural-design-slide-tablet" alt="" />
		        <img src="img/architectural-design/slide-mobile.png" className="architectural-design-slide-mobile" alt="" />
		        <div id="architectural-design-1" className="architectural-design-item">
		          <img src="img/architectural-design/slide-1.png" alt="" id="architectural-slide1" />
		          <img src="img/architectural-design/slide-1-tablet.png" alt="" id="architectural-slide-tablet-1" />
		          <img src="img/architectural-design/slides-mobile.png" alt="" id="architectural-slide-mobile-1" />
		          <img src="img/architectural-design/slide-1-hover.png" alt="" id="architectural-design-1-active" className="architectural-design-img-inactive transition" />
		          <Link to="fibrokamen" onClick={this._activeMenu.bind(this, "fibrokamen")} onMouseEnter={this._elementMouseover.bind(this)} onMouseLeave={this._elementMouseleave.bind(this)}>
		            <h3 className="transition">фиброкамень</h3>
		            <p>Lorem ipsum dolor sit amet, ludus 
		                docendi ei mei, an omnesque. 
		            </p>
		          </Link>
		        </div>
		        <div id="architectural-design-2" className="architectural-design-item">
		          <img src="img/architectural-design/slide-2.png" alt="" id="architectural-slide2" />
		          <img src="img/architectural-design/slide-1-tablet.png" alt="" id="architectural-slide-tablet-2" />
		          <img src="img/architectural-design/slides-mobile.png" alt="" id="architectural-slide-mobile-2" />
		          <img src="img/architectural-design/slide-2-hover.png" alt="" id="architectural-design-2-active" className="architectural-design-img-inactive transition" />
		          <Link to="services" onClick={this._activeMenu.bind(this, "services")} onMouseEnter={this._elementMouseover.bind(this)} onMouseLeave={this._elementMouseleave.bind(this)}>
		            <h3 className="transition">Наши услуги</h3>
		            <p>Lorem ipsum dolor sit amet, ludus 
		                docendi ei mei, an omnesque. 
		            </p>
		          </Link>
		        </div>
		        <div id="architectural-design-3" className="architectural-design-item">
		          <img src="img/architectural-design/slide-3.png" alt="" id="architectural-slide3" />
		          <img src="img/architectural-design/slide-3-tablet.png" alt="" id="architectural-slide-tablet-3" />
		          <img src="img/architectural-design/slides-mobile.png" alt="" id="architectural-slide-mobile-3" />
		          <img src="img/architectural-design/slide-3-hover.png" alt="" id="architectural-design-3-active" className="architectural-design-img-inactive transition" />
		          <Link to="ideas-trends" onClick={this._activeMenu.bind(this, "ideas-trends")} onMouseEnter={this._elementMouseover.bind(this)} onMouseLeave={this._elementMouseleave.bind(this)}>
		            <h3 className="transition">ИДЕИ & ТРЕНДЫ</h3>
		            <p>Lorem ipsum dolor sit amet, ludus 
		                docendi ei mei, an omnesque. 
		            </p>
		          </Link>
		        </div>
		        <div id="architectural-design-4" className="architectural-design-item">
		          <img src="img/architectural-design/slide-4.png" alt="" id="architectural-slide4" />
		          <img src="img/architectural-design/slide-4-tablet.png" alt="" id="architectural-slide-tablet-4" />
		          <img src="img/architectural-design/slides-mobile.png" alt="" id="architectural-slide-mobile-4" />
		          <img src="img/architectural-design/slide-4-hover.png" alt="" id="architectural-design-4-active" className="architectural-design-img-inactive transition" />
		          <Link to="realisation" onClick={this._activeMenu.bind(this, "realisation")} onMouseEnter={this._elementMouseover.bind(this)} onMouseLeave={this._elementMouseleave.bind(this)}>
		            <h3 className="transition">РЕАЛИЗОВАННЫЕ<br /> ПРОЕКТЫ</h3>
		            <p>Lorem ipsum dolor sit amet, ludus 
		                docendi ei mei, an omnesque. 
		            </p>
		          </Link>
		        </div>
		    </section>
		)
	}
}

export default connect(
    state => ({
    	anchor: state.anchor.active_anchor
    }),
    dispatch => ({
    	OnActiveMenu: (link) => {
            dispatch({ 
              	type: 'ACTIVE_MENU',
              	pageLink: link 
            });
        }
    })
)(ArchitecturalDesign);
