import React from 'react';
import firebase from 'firebase';
import ReactFire from 'reactfire';
import ReactMixin from 'react-mixin';
import Slider from 'react-slick';
import ClientsSliderItem from './ClientsSliderItem';
import { connect } from 'react-redux';

class ClientsSlider extends React.Component {
	constructor() {
        super();
        this.state = {
            clientsList: [],
        }
    }

    componentDidMount() {
        this.bindAsArray(firebase.database().ref().child("clients"), "clientsList");
    }

	_getCoords(elem) { 
	  var box = elem.getBoundingClientRect();

	  return {
	    top: box.top + pageYOffset,
	    left: box.left + pageXOffset
	  };
	}

	_scrollingToAnchor(element) {
		let elem = element.refs.clients;
		let positionTop = this._getCoords(elem).top;
		window.scrollTo(0, positionTop);
	}

	render() {

		var settings = {
          dots: false,
          infinite: true,
          speed: 1000,
          responsive: [ 
          	{ breakpoint: 400, settings: { slidesToShow: 1 } },
          	{ breakpoint: 580, settings: { slidesToShow: 3 } },
	        { breakpoint: 768, settings: { slidesToShow: 5 } }, 
	        { breakpoint: 1000000, settings: { slidesToShow: 7 } }
          ],
          autoplay: true,
          autoplaySpeed: 600,
          slidesToScroll: 1
        };

        const clientsList = this.state.clientsList; 

        if (this.props.anchor === "clients") { 
			this._scrollingToAnchor(this);
		}

        if (clientsList.length > 0) {
			return (
				<section id="clients" ref="clients">
			        <div className="wrapper-container">
			          <h2>к нам обращаются</h2>
			          <div className="wrapper-clients-slider">
			            <div className="slide-background"></div>
			            <div id="owl-clients">
				            <Slider {...settings}>
				            	{
				            		clientsList.map((item, i) => <div key={i}><ClientsSliderItem img={item.img1}></ClientsSliderItem></div> )
				            	}
			              	</Slider>
			            </div>
			          </div>
			        </div>
			    </section>
			)
		}

		else {
			return (
				<section ref="clients" id="clients">
			        <div className="wrapper-container">
			          <h2>к нам обращаются</h2>
			          
			        </div>
			    </section>
			)
		}
	}
}

ReactMixin(ClientsSlider.prototype, ReactFire);

export default connect(
    state => ({
    	anchor: state.anchor.active_anchor
    })
)(ClientsSlider);
