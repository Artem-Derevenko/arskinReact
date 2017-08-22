import React from 'react';
import ReactMixin from 'react-mixin';
import ReactFire from 'reactfire';
import firebase from 'firebase';
import AdvantagesItem from './AdvantagesItem';
import { connect } from 'react-redux';

class Advantages extends React.Component {
	constructor() {
        super();
        this.state = {
            advantagesList: []
        }
    }

    componentDidMount() {
        this.bindAsArray(firebase.database().ref().child("advantages"), "advantagesList");
    }

	_showForm() {
		this.props.OnShowForm();
	}

	_getCoords(elem) { 
	  var box = elem.getBoundingClientRect();

	  return {
	    top: box.top + pageYOffset,
	    left: box.left + pageXOffset
	  };
	}

	_scrollingToAnchor(element) {
		let elem = element.refs.block_advantages;
		let positionTop = this._getCoords(elem).top;
		window.scrollTo(0, positionTop);
	}

	render() {
		const advantages_List = this.state.advantagesList; 
		if (this.props.anchor === "block_advantages") { 
			this._scrollingToAnchor(this);
		}
		return (
			<section ref="block_advantages" id="block-advantages">
		        <div className="wrapper-container">
		          <h2>ПРЕИМУЩЕСТВА</h2>
		          <ul className="advantages">
		        	{	
                        advantages_List.map((item, i) => 
 							<AdvantagesItem key={i} advantage={item} />)
	                }
		          </ul>
		          <span className="button-style-1 transition" onClick={this._showForm.bind(this)}>оставить запрос</span>
		        </div>
		    </section>
		)
	}
}

ReactMixin(Advantages.prototype, ReactFire);

export default connect(
    state => ({
    	anchor: state.anchor.active_anchor
    }),
    dispatch => ({
        OnShowForm: () => {
            dispatch({ type: 'SHOW_FORM' });
        }
    })
)(Advantages);