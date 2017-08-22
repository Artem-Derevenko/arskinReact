import React from 'react';
import ReactMixin from 'react-mixin';
import ReactFire from 'reactfire';
import firebase from 'firebase';
import Advantages from './Advantages';
import ArchitecturalDesign from './ArchitecturalDesign';
import ResolveIssues from './ResolveIssues';
import BlockNews from './BlockNews';
import Subscription from './Subscription';
import ClientsSlider from './ClientsSlider';
import Honors from './Honors';
import Footer from './Footer';

class PageIndex extends React.Component {
	constructor() {
        super();
        this.state = {
            newsList: [],
            honorsList: []
        }
    }

    componentDidMount() {
        this.bindAsArray(firebase.database().ref().child("news"), "newsList");
        this.bindAsArray(firebase.database().ref().child("honors"), "honorsList");
    }

	render() {
		return (
			<div> 
              <section id="header">
		        <div className="main-cont">
		          <div className="img-cont1 img-cont">
		          </div> 
		          <div className="img-cont2 img-cont">
		            <img src="img/slide1.png" />
		          </div>
		          <div className="img-cont2-2 img-cont">
		            <img src="img/slide1-2.png" />
		          </div>
		          <div className="img-cont3 img-cont">
		            <img src="img/slide1-1.png" />
		          </div>
		          <div className="img-cont4 img-cont">
		            <img src="img/slide2.png" />
		          </div>
		          <div className="img-cont7 img-cont">
		            <img src="img/slide2-4.png" />
		          </div>
		          <div className="img-cont8 img-cont">
		            <img src="img/slide4.png" />
		          </div>
		          <div className="img-cont9 img-cont">
		          </div>
		          <div className="baner-header">
		            <p>Архитектура &mdash; это отражение мечтаний, ценностей 
		                и видения людей каждой эпохи... Какая архитектура 
		                отражает культуру нашего  времени? Что мы оставим 
		                После себя? Вот в чем вопрос. <br />
		              <span>О. Мельничук</span>
		            </p>
		            <a href="" className="button-style-1 transition">скачать презентацию</a>
		          </div>
		        </div>
		      </section>
		      <Advantages />
		      <ArchitecturalDesign />
		      <section id="section4">
		    	  <ResolveIssues />
		    	  <BlockNews news_List = {this.state.newsList.slice(0, 2)} />
		      </section>
		      <Subscription />
		      <ClientsSlider />
		      <Honors honors_List = {this.state.honorsList} />
		      <Footer />
            </div>
		)
	}
}

ReactMixin(PageIndex.prototype, ReactFire);

export default PageIndex;