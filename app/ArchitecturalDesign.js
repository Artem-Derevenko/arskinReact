import React from 'react';
import { Link } from 'react-router';

class ArchitecturalDesign extends React.Component {
	_elementMouseover(event) {
        event.currentTarget.parentNode.querySelector('.architectural-design-img-inactive').classList.add("active");
    }

    _elementMouseleave(event) {
        event.currentTarget.parentNode.querySelector('.architectural-design-img-inactive').classList.remove("active");
    }

	render() {
		return (
			<section id="architectural-design">
		        <img src="img/architectural-design/slide.png" className="architectural-design-slide-0" alt="" />
		        <img src="img/architectural-design/slide-tablet.png" className="architectural-design-slide-tablet" alt="" />
		        <img src="img/architectural-design/slide-mobile.png" className="architectural-design-slide-mobile" alt="" />
		        <div id="architectural-design-1" className="architectural-design-item">
		          <img src="img/architectural-design/slide-1.png" alt="" id="architectural-slide1" />
		          <img src="img/architectural-design/slide-1-tablet.png" alt="" id="architectural-slide-tablet-1" />
		          <img src="img/architectural-design/slides-mobile.png" alt="" id="architectural-slide-mobile-1" />
		          <img src="img/architectural-design/slide-1-hover.png" alt="" id="architectural-design-1-active" className="architectural-design-img-inactive transition" />
		          <Link to="fibrokamen" onMouseEnter={this._elementMouseover.bind(this)} onMouseLeave={this._elementMouseleave.bind(this)}>
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
		          <Link to="/services" onMouseEnter={this._elementMouseover.bind(this)} onMouseLeave={this._elementMouseleave.bind(this)}>
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
		          <Link to="ideas-trends" onMouseEnter={this._elementMouseover.bind(this)} onMouseLeave={this._elementMouseleave.bind(this)}>
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
		          <Link to="realisation" onMouseEnter={this._elementMouseover.bind(this)} onMouseLeave={this._elementMouseleave.bind(this)}>
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

export default ArchitecturalDesign;