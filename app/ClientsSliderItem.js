import React from 'react';

class ClientsSliderItem extends React.Component {

	render() {
		return (
			<div className="item">
				<img src={this.props.img} alt="" />
			</div>
		)
	}
}

export default ClientsSliderItem;