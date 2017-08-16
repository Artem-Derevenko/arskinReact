import React from 'react';
import { Link } from 'react-router';

class ProjectSliderItem extends React.Component {

	render() {
		return (
			<div>
        <Link to={"project/" + this.props.project.id}><img src={this.props.project.img_mini} alt="" /></Link>
        <div>
          <h4><Link to={"project/" + this.props.project.id}>{this.props.project.title}</Link></h4>
          <p>{this.props.project.description}</p>
        </div>
      </div>
		)
	}
}

export default ProjectSliderItem;