import React from 'react';
import { Link } from 'react-router';

class NavProjectItem extends React.Component {
	_scrollTo() {
	    window.scrollTo(0,0);
	}

  	render() { 
    	return (
		  <li>
	        <Link to={"project/" + this.props.project.id} activeClassName="active" className="transition" onClick={this._scrollTo.bind(this)}>
	        	<span>{this.props.project.title}</span>
	        </Link>
	      </li>
		)
	}
}

export default NavProjectItem;