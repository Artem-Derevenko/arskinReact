import React from 'react';
import BlockNewsItem from './BlockNewsItem';
import { connect } from 'react-redux';

class BlockNews extends React.Component {
	_getCoords(elem) { 
	  var box = elem.getBoundingClientRect();

	  return {
	    top: box.top + pageYOffset,
	    left: box.left + pageXOffset
	  };
	}

	_scrollingToAnchor(element) {
		let elem = element.refs.news;
		let positionTop = this._getCoords(elem).top;
		window.scrollTo(0, positionTop);
	}

	render() {
		const news_List = this.props.news_List;
		if (this.props.anchor === "news") { 
			this._scrollingToAnchor(this);
		}
		return (
			<div className="wrapper-container" id="wrapp-news" ref="news">
	            <h2>самое свежее о нас</h2>
	            {	
                    news_List.map((item, i) => 
							<BlockNewsItem key={i} news={item} />)
                }
	        </div>
		)
	}
}

export default connect(
    state => ({
    	anchor: state.anchor.active_anchor
    })
)(BlockNews);

