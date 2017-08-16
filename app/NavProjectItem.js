import React from 'react';
import { Link } from 'react-router';

class NavProjectItem extends React.Component {
  	render() { 
    
		return (
		  <li>
        <Link to={"project/" + this.props.project.id} activeClassName="active" className="transition"><span>{this.props.project.title}</span></Link>
      </li>
		)
	}
}

export default NavProjectItem;