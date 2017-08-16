import React from 'react';
import ReactMixin from 'react-mixin';
import ReactFire from 'reactfire';
import firebase from 'firebase';
import NavProjectItem from './NavProjectItem';
import { Link } from 'react-router';

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

	_clickAnchor(event) {
        const anchor = event.target.parentElement;
        const component = document.querySelector(".nav-menu");
        const anchorList = component.querySelectorAll(".anchor.active");
        for (var i = 0; i < anchorList.length; i++) {
        	anchorList[i].classList.remove('active');
		}
        event.target.parentNode.classList.add('active');
    }

    _scrollTop() {
    	const component = document.querySelector(".nav-menu");
        const anchorList = component.querySelectorAll(".anchor.active");
        for (var i = 0; i < anchorList.length; i++) {
        	anchorList[i].classList.remove('active');
		}
    	window.scrollTo(0,0);
    }


	render() {
		const projects_arr = this.state.projectsList;

		return (
	      <nav className="nav-left-block">
	        <ul className="nav-menu">
	          <li>
	            <Link to="/" activeClassName="active" className="transition" onClick={this._scrollTop.bind(this)}><span>Главная</span></Link>
	            <ul className="nav-menu-anchor">
	              <li><a href="#block-advantages" className="transition anchor" onClick={this._clickAnchor.bind(this)}><span>Преимущества</span></a></li>
	              <li><a href="#architectural-design" className="transition anchor" onClick={this._clickAnchor.bind(this)}><span>Архитектурные решения</span></a></li>
	              <li><a href="#help" className="transition anchor" onClick={this._clickAnchor.bind(this)}><span>Мы поможем</span></a></li>
	              <li><a href="#wrapp-news" className="transition anchor" onClick={this._clickAnchor.bind(this)}><span>Самое свежее</span></a></li>
	              <li><a href="#clients" className="transition anchor" onClick={this._clickAnchor.bind(this)}><span>К нам обращаются</span></a></li>
	              <li><a href="#honors" className="transition anchor" onClick={this._clickAnchor.bind(this)}><span>Награды и рекомендации</span></a></li>
	            </ul>
	          </li>
	          <li>
	            <Link to="/company" activeClassName="active" className="transition" onClick={this._scrollTop.bind(this)}><span>о компании</span></Link>
	            <ul className="nav-menu-anchor">
	              <li><a href="#history" className="transition anchor" onClick={this._clickAnchor.bind(this)}><span>История</span></a></li>
	              <li><a href="#block-advantages-company-2" className="transition anchor" onClick={this._clickAnchor.bind(this)}><span>Преимущества</span></a></li>
	              <li><a href="#achievements" className="transition anchor" onClick={this._clickAnchor.bind(this)}><span>Достижения</span></a></li>
	              <li><a href="#process" className="transition anchor" onClick={this._clickAnchor.bind(this)}><span>Процесс</span></a></li>
	              <li><a href="#employees" className="transition anchor" onClick={this._clickAnchor.bind(this)}><span>Команда</span></a></li>
	            </ul>
	          </li>
	          <li>
	            <Link to="/services" activeClassName="active" className="transition" onClick={this._scrollTop.bind(this)}><span>услуги</span></Link>
	            <ul className="nav-menu-anchor">
	              <li><a href="#projection" className="transition anchor" onClick={this._clickAnchor.bind(this)}><span>Проектирование</span></a></li>
	              <li><a href="#production" className="transition anchor" onClick={this._clickAnchor.bind(this)}><span>Производство</span></a></li>
	              <li><a href="#installation" className="transition anchor" onClick={this._clickAnchor.bind(this)}><span>Монтаж</span></a></li>
	              <li><a href="#provision-services" className="transition anchor" onClick={this._clickAnchor.bind(this)}><span>Обслуживание</span></a></li>
	            </ul>
	          </li>
	          <li>
	            <Link to="/realisation" activeClassName="active" className="transition" onClick={this._scrollTop.bind(this)}><span>проекты</span></Link>
	            <ul className="nav-menu-subcategory">
	              {   
	                  projects_arr.map((item, i) => <NavProjectItem key={i} project={item} />)
	              }
	            </ul>
	          </li>
	          <li>
	            <Link to="/fibrokamen" activeClassName="active" className="transition" onClick={this._scrollTop.bind(this)}><span>фиброкамень</span></Link>
	          </li>
	          <li>
	            <Link to="/ideas-trends" activeClassName="active" className="transition" onClick={this._scrollTop.bind(this)}><span>идеи&тренды</span></Link>
	            <ul className="nav-menu-anchor">
	              <li><a href="#styles" className="transition"><span>Стили</span></a></li>
	              <li><a href="#materials" className="transition"><span>Виды материалов</span></a></li>
	              <li><a href="#objects" className="transition"><span>Объекты</span></a></li>
	            </ul>
	          </li>
	          <li>
	            <Link to="/contacts" activeClassName="active" className="transition" onClick={this._scrollTop.bind(this)}><span>контакты</span></Link>
	          </li>
	          <li>
	            <Link to="/news" activeClassName="active" className="transition" onClick={this._scrollTop.bind(this)}><span>новости</span></Link>
	          </li>
	        </ul>
	      </nav>
		)
	}
}
ReactMixin(HeaderNav.prototype, ReactFire);

export default HeaderNav;