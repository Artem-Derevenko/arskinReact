import React from 'react';

class HonorsItem extends React.Component {

	render() {
		return (
			<a href={this.props.img} className="fancybox" rel="group">
	            <img src={this.props.img} />
	        </a>
		)
	}
}

export default HonorsItem;