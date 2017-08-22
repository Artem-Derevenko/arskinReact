import React from 'react';
import { Link } from 'react-router';

class PageRealisationItem extends React.Component {
  _scrollTo() {
    window.scrollTo(0,0);
  }

	render() { 
		return (
			<div className="project">
        <img src={this.props.project.img_mini} alt="" className="realisation-img" />
        <div className="realisation-text">
          <Link to={"project/" + this.props.project.id} onClick={this._scrollTo.bind(this)}>
            <h3>{this.props.project.title}</h3>
            <div className="project-line"></div>
            <p>{this.props.project.description}</p>
          </Link>
        </div>
      </div>
		)
	}
}

export default PageRealisationItem;