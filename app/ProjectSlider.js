import React from 'react';
import firebase from 'firebase';
import ReactFire from 'reactfire';
import ReactMixin from 'react-mixin';
import Slider from 'react-slick';
import ProjectSliderItem from './ProjectSliderItem';

class ProjectSlider extends React.Component {

	render() {
		var settings = {
	      dots: false,
	      infinite: false,
	      speed: 1000,
	      responsive: [ 
	        { breakpoint: 768, settings: { slidesToShow: 1 } },
	        { breakpoint: 1300, settings: { slidesToShow: 2 } }, 
	        { breakpoint: 1000000, settings: { slidesToShow: 3 } }
	      ],
	      autoplay: false,
	      autoplaySpeed: 600,
	      slidesToScroll: 1
	    };

		if (this.props.project.length > 0) { 

			return (
				<Slider {...settings}>
	              {
	                this.props.project.map((item, i) => <div className="completed-projects-slide" key={i}><ProjectSliderItem project={item}></ProjectSliderItem></div> )
	              }
	            </Slider>
	   		 )
		}

        else {
        	return (
        		<p>Список с проектами пуст!</p>
        	)
        }
	}
}

ReactMixin(ProjectSlider.prototype, ReactFire);

export default ProjectSlider;