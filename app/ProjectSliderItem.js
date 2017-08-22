import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class ProjectSliderItem extends React.Component {
  _activeMenu(link) {
    this.props.OnActiveMenu(link);
    window.scrollTo(0,0);
  }

	render() {
		return (
			<div>
        <Link to={"project/" + this.props.project.id} onClick={this._activeMenu.bind(this, "realisation")}><img src={this.props.project.img_mini} alt="" /></Link>
        <div>
          <h4><Link to={"project/" + this.props.project.id} onClick={this._activeMenu.bind(this, "realisation")}>{this.props.project.title}</Link></h4>
          <p>{this.props.project.description}</p>
        </div>
      </div>
		)
	}
}

export default connect(
    state => ({}),
    dispatch => ({
        OnActiveMenu: (link) => {
            dispatch({ 
              type: 'ACTIVE_MENU',
              pageLink: link });
        }
    })
)(ProjectSliderItem);
