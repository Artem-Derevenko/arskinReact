import React from 'react';

class AdvantagesItem extends React.Component {
	render() {
		return (
            <li>
              <img src={this.props.advantage.img} alt="" />
              <h4>{this.props.advantage.title}</h4>
              <p>{this.props.advantage.text}</p>
            </li>
		)
	}
}

export default AdvantagesItem;