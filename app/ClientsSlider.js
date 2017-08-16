import React from 'react';
import firebase from 'firebase';
import ReactFire from 'reactfire';
import ReactMixin from 'react-mixin';
import Slider from 'react-slick';
import ClientsSliderItem from './ClientsSliderItem';

class ClientsSlider extends React.Component {

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

        const clientsList = this.props.clients_List; 

        if (clientsList.length > 0) {
			return (
				<section id="clients">
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
				<section id="clients">
			        <div className="wrapper-container">
			          <h2>к нам обращаются</h2>
			          
			        </div>
			    </section>
			)
		}
	}
}

ReactMixin(ClientsSlider.prototype, ReactFire);
export default ClientsSlider;