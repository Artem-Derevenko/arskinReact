import React from 'react';
import firebase from 'firebase';
import ReactFire from 'reactfire';
import ReactMixin from 'react-mixin';
import ScrollArea from 'react-scrollbar'; 
import HonorsItem from './HonorsItem';
import { connect } from 'react-redux';

class Honors extends React.Component {
	constructor() {
        super();
        this.state = {
            honorsList: []
        }
    }

    componentDidMount() {
        this.bindAsArray(firebase.database().ref().child("honors"), "honorsList");
    }

	_getCoords(elem) { 
	  var box = elem.getBoundingClientRect();

	  return {
	    top: box.top + pageYOffset,
	    left: box.left + pageXOffset
	  };
	}

	_scrollingToAnchor(element) {
		let elem = element.refs.honors;
		let positionTop = this._getCoords(elem).top;
		window.scrollTo(0, positionTop);
	}

	render() {

        const honorsList = this.state.honorsList; 

        const content = { width: honorsList.length*(164 + 20) }

        if (this.props.anchor === "honors") { 
			this._scrollingToAnchor(this);
		}

		return (
			<section ref="honors" id="honors">
		        <div className="wrapper-container">
		          	<h2>награды и рекомендации</h2>
	                <ScrollArea horizontal={true} speed={0.8} vertical={true} contentStyle={content}>
                      	{	
		                    honorsList.map((item, i) => 
									<HonorsItem key={i} img={item.img} />)
		                }
	                </ScrollArea>
		        </div>
		    </section>
		)
	}
}

ReactMixin(Honors.prototype, ReactFire);
export default connect(
    state => ({
    	anchor: state.anchor.active_anchor
    })
)(Honors);