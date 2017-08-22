import React from 'react';
import { connect } from 'react-redux';

class ResolveIssues extends React.Component {
	_getCoords(elem) { 
	  var box = elem.getBoundingClientRect();

	  return {
	    top: box.top + pageYOffset,
	    left: box.left + pageXOffset
	  };
	}

	_scrollingToAnchor(element) {
		let elem = element.refs.help;
		let positionTop = this._getCoords(elem).top;
		window.scrollTo(0, positionTop);
	}

	render() {
		if (this.props.anchor === "help") { 
			this._scrollingToAnchor(this);
		}
		return (
			<div className="wrapper-container">
	          <div id="help" ref="help">
	            <h2>мы поможем решить вам следующие вопросы</h2>
	            <ul className="questions">
	              <li>
	                <span>01</span>
	                <p>Lorem ipsum dolor sit amet, ludus docendi ei mei, an omnesque appareat mei. Duis inani tacimates no nec, fugit elaboraret quaerendum quo.</p>
	              </li>
	              <li>
	                <span>02</span>
	                <p>Lorem ipsum dolor sit amet, ludus docendi ei mei, an omnesque appareat mei. Duis inani tacimates no nec, fugit elaboraret quaerendum quo.</p>
	              </li>
	              <li>
	                <span>03</span>
	                <p>Lorem ipsum dolor sit amet, ludus docendi ei mei, an omnesque appareat mei. Duis inani tacimates no nec, fugit elaboraret quaerendum quo.</p>
	              </li>
	              <li>
	                <span>04</span>
	                <p>Lorem ipsum dolor sit amet, ludus docendi ei mei, an omnesque appareat mei. Duis inani tacimates no nec, fugit elaboraret quaerendum quo.</p>
	              </li>
	            </ul>
	          </div>
	        </div>
		)
	}
}

export default connect(
    state => ({
    	anchor: state.anchor.active_anchor
    })
)(ResolveIssues);
