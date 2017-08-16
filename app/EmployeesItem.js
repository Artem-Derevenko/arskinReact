import React from 'react';

class EmployeesItem extends React.Component {
	render() {
		return (
	      <div className="company-employees">
            <img src={this.props.employees.img} alt="" />
            <p className="employees-name">{this.props.employees.name}</p>
            <div className="employees-line"></div>
            <p className="employees-info">{this.props.employees.text}</p>
          </div>
		)
	}
}

export default EmployeesItem;