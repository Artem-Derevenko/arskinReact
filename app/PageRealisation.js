import React from 'react';
import ReactMixin from 'react-mixin';
import ReactFire from 'reactfire';
import firebase from 'firebase';
import Footer from './Footer';
import PageRealisationItem from './PageRealisationItem';

class PageRealisation extends React.Component {
  constructor() {
      super();
      this.state = {
        projectsList: []
      }
  }

  componentDidMount() {
    this.bindAsArray(firebase.database().ref().child("projects"), "projectsList");
  }

	render() { 
    const parameter_filter = this.props.params.parameter; 
    const projects_arr = this.state.projectsList;
    let new_arr = [];

    for (let i = 0; i < projects_arr.length; i++) {

      var filter_arr = projects_arr[i].filter; 
      var k = 0;

      for (let j = 0; j < filter_arr.length; j++) {
        if ( filter_arr[j] === parameter_filter ) { k++ } 
      }

      if ( k > 0 ) {
        new_arr.push(projects_arr[i])
      }
    } 

    if ( parameter_filter === undefined ) {
      new_arr = projects_arr;
    }

		return (
			<div>
        <section id="wrapp-page-realisation" >
          <div className="wrapper-container">
            <div className="blocks-wrapper">
              {   
                  new_arr.map((item, i) => <PageRealisationItem key={i} project={item} />)
              }
            </div>
          </div>
        </section> 
        <Footer />
      </div>
		)
	}
}
ReactMixin(PageRealisation.prototype, ReactFire);

export default PageRealisation;