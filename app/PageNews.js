import React from 'react';
import ReactMixin from 'react-mixin';
import ReactFire from 'reactfire';
import firebase from 'firebase';
import BlockNews from './BlockNews';
import Footer from './Footer';

class PageNews extends React.Component {
	constructor() {
        super();
        this.state = {
            newsList: [],
            page: "1"
        }
    }

    componentDidMount() {
        this.bindAsArray(firebase.database().ref().child("news"), "newsList");
    }

    _pagination(event) {
    	this.setState({
            page: event.target.innerHTML
        });
        window.scrollTo(0,0);
    }

	render() {
		var countPage = Math.ceil(this.state.newsList.length / 3);
    	var pageList = []; 
    	for (var i = 0; i < countPage; i++) {
    		pageList[i] = i+1;
    	};
		return ( 
			<div> 
		      <section id="wrapp-page-news" className="page-news">
		    	<BlockNews news_List = {this.state.newsList.slice( ((this.state.page * 3) - 3), (this.state.page * 3) )} />
		    	<div className="paginationCD">
		            <div className="wrapper">
		            	{   
		                  	pageList.map((item, i) => (<span key={i} className={ (item == this.state.page) ? "active transition" : "transition" } onClick={this._pagination.bind(this)}>{item}</span>))
		              	}
		            </div>
		        </div>
		      </section>
		      <Footer />
            </div>
		)
	}
}

ReactMixin(PageNews.prototype, ReactFire);

export default PageNews;