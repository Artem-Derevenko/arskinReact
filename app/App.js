import React from 'react';
import firebase from 'firebase';
import ReactDOM from 'react-dom';
import { Route, Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Page from './Page';
import PageIndex from './PageIndex';
import PageCompany from './PageCompany';
import PageServices from './PageServices';
import PageProject from './PageProject';
import PageRealisation from './PageRealisation';
import PageFibrokamen from './PageFibrokamen';
import PageIdeasTrends from './PageIdeasTrends';
import PageNews from './PageNews';
import PageContacts from './PageContacts';
import Page404 from './Page404';
import reducer from '../reducers';




const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const config = {
    apiKey: "AIzaSyCAAmEO7cwvx4i1vC1kgds3Eej_2qmLfUY",
    authDomain: "arskin-cfa19.firebaseapp.com",
    databaseURL: "https://arskin-cfa19.firebaseio.com",
    projectId: "arskin-cfa19",
    storageBucket: "arskin-cfa19.appspot.com",
    messagingSenderId: "58917846957"
  };

firebase.initializeApp(config);

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route component={Page}>
                <Route path="/" component={PageIndex} />
                <Route path="company" component={PageCompany} />
                <Route path="services" component={PageServices} />
                <Route path="realisation(/:parameter)" component={PageRealisation} />
                <Route path="project(/:id)" component={PageProject} />
                <Route path="fibrokamen" component={PageFibrokamen} />
                <Route path="ideas-trends" component={PageIdeasTrends} />
                <Route path="news" component={PageNews} />
                <Route path="contacts" component={PageContacts} />
                <Route path="*" component={Page404} />
    		</Route> 
		</Router>
	</Provider>,
	document.getElementById('app')	 
);
