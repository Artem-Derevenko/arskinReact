import React from 'react';
import ReactMixin from 'react-mixin';
import ReactFire from 'reactfire';
import firebase from 'firebase';
import NavProjectItem from './NavProjectItem';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class HeaderNav extends React.Component {
	constructor() {
	    super();
	    this.state = {
	      projectsList: []
	    }
	}

	componentDidMount() {
		this.bindAsArray(firebase.database().ref().child("projects"), "projectsList");
	}

	_clickAnchor(anchor) {
        this.props.OnClickAnchor(anchor);
    }

    _activeMenu(link) {
    	this.props.OnActiveMenu(link);
    	window.scrollTo(0,0);
    }

	render() {
		const projects_arr = this.state.projectsList;

		return (
	      <nav className="nav-left-block">
	        <ul className="nav-menu">
	          <li>
	            <Link to="/" className={ (this.props.page === "home") ? "transition active" : "transition" } onClick={this._activeMenu.bind(this, "home")}><span>Главная</span></Link>
	            <ul className="nav-menu-anchor">
	              <li><span className={ (this.props.anchor === "block_advantages") ? "transition anchor active" : "transition anchor" } onClick={this._clickAnchor.bind(this, "block_advantages")}>Преимущества</span></li>
	              <li><span className={ (this.props.anchor === "architectural_design") ? "transition anchor active" : "transition anchor" } onClick={this._clickAnchor.bind(this, "architectural_design")}>Архитектурные решения</span></li>
	              <li><span className={ (this.props.anchor === "help") ? "transition anchor active" : "transition anchor" } onClick={this._clickAnchor.bind(this, "help")}>Мы поможем</span></li>
	              <li><span className={ (this.props.anchor === "news") ? "transition anchor active" : "transition anchor" } onClick={this._clickAnchor.bind(this, "news")}>Самое свежее</span></li>
	              <li><span className={ (this.props.anchor === "clients") ? "transition anchor active" : "transition anchor" } onClick={this._clickAnchor.bind(this, "clients")}>К нам обращаются</span></li>
	              <li><span className={ (this.props.anchor === "honors") ? "transition anchor active" : "transition anchor" } onClick={this._clickAnchor.bind(this, "honors")}>Награды и рекомендации</span></li>
	            </ul>
	          </li>
	          <li>
	            <Link to="/company" className={ (this.props.page === "company") ? "transition active" : "transition" } onClick={this._activeMenu.bind(this, "company")}><span>о компании</span></Link>
	            <ul className="nav-menu-anchor">
	              <li><span className={ (this.props.anchor === "history") ? "transition anchor active" : "transition anchor" } onClick={this._clickAnchor.bind(this, "history")}>История</span></li>
	              <li><span className={ (this.props.anchor === "block_advantages_company") ? "transition anchor active" : "transition anchor" } onClick={this._clickAnchor.bind(this, "block_advantages_company")}>Преимущества</span></li>
	              <li><span className={ (this.props.anchor === "achievements") ? "transition anchor active" : "transition anchor" } onClick={this._clickAnchor.bind(this, "achievements")}>Достижения</span></li>
	              <li><span className={ (this.props.anchor === "process") ? "transition anchor active" : "transition anchor" } onClick={this._clickAnchor.bind(this, "process")}>Процесс</span></li>
	              <li><span className={ (this.props.anchor === "employees") ? "transition anchor active" : "transition anchor" } onClick={this._clickAnchor.bind(this, "employees")}>Команда</span></li>
	            </ul>
	          </li>
	          <li>
	            <Link to="/services" className={ (this.props.page === "services") ? "transition active" : "transition" } onClick={this._activeMenu.bind(this, "services")}><span>услуги</span></Link>
	            <ul className="nav-menu-anchor">
	              <li><span className={ (this.props.anchor === "projection") ? "transition anchor active" : "transition anchor" } onClick={this._clickAnchor.bind(this, "projection")}>Проектирование</span></li>
	              <li><span className={ (this.props.anchor === "production") ? "transition anchor active" : "transition anchor" } onClick={this._clickAnchor.bind(this, "production")}>Производство</span></li>
	              <li><span className={ (this.props.anchor === "installation") ? "transition anchor active" : "transition anchor" } onClick={this._clickAnchor.bind(this, "installation")}>Монтаж</span></li>
	              <li><span className={ (this.props.anchor === "provision_services") ? "transition anchor active" : "transition anchor" } onClick={this._clickAnchor.bind(this, "provision_services")}>Обслуживание</span></li>
	            </ul>
	          </li>
	          <li>
	            <Link to="/realisation" className={ (this.props.page === "realisation") ? "transition active" : "transition" } onClick={this._activeMenu.bind(this, "realisation")}><span>проекты</span></Link>
	            <ul className="nav-menu-subcategory">
	              {   
	                  projects_arr.map((item, i) => <NavProjectItem key={i} project={item} />)
	              }
	            </ul>
	          </li>
	          <li>
	            <Link to="/fibrokamen" className={ (this.props.page === "fibrokamen") ? "transition active" : "transition" } onClick={this._activeMenu.bind(this, "fibrokamen")}><span>фиброкамень</span></Link>
	          </li>
	          <li>
	            <Link to="/ideas-trends" className={ (this.props.page === "ideas-trends") ? "transition active" : "transition" } onClick={this._activeMenu.bind(this, "ideas-trends")}><span>идеи&тренды</span></Link>
	            <ul className="nav-menu-anchor">
	              <li><span className={ (this.props.anchor === "styles") ? "transition anchor active" : "transition anchor" } onClick={this._clickAnchor.bind(this, "styles")}>Стили</span></li>
	              <li><span className={ (this.props.anchor === "materials") ? "transition anchor active" : "transition anchor" } onClick={this._clickAnchor.bind(this, "materials")}>Виды материалов</span></li>
	              <li><span className={ (this.props.anchor === "objects") ? "transition anchor active" : "transition anchor" } onClick={this._clickAnchor.bind(this, "objects")}>Объекты</span></li>
	            </ul>
	          </li>
	          <li>
	            <Link to="/news" className={ (this.props.page === "news") ? "transition active" : "transition" } onClick={this._activeMenu.bind(this, "news")}><span>новости</span></Link>
	          </li>	          
	          <li>
	            <Link to="/contacts" className={ (this.props.page === "contacts") ? "transition active" : "transition" } onClick={this._activeMenu.bind(this, "contacts")}><span>контакты</span></Link>
	          </li>
	        </ul>
	      </nav>
		)
	}
}
ReactMixin(HeaderNav.prototype, ReactFire);

export default connect(
    state => ({
    	page: state.menu.page,
    	anchor: state.anchor.active_anchor
    }),
    dispatch => ({
        OnActiveMenu: (link) => {
            dispatch({ 
            	type: 'ACTIVE_MENU',
            	pageLink: link });

            dispatch({ 
            	type: 'CLICK_ANCHOR',
            	anchor: "" });
        },
        OnClickAnchor: (anchor) => {
            dispatch({ 
            	type: 'CLICK_ANCHOR',
            	anchor: anchor });
        }
    })
)(HeaderNav);
