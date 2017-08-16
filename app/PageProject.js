import React from 'react';
import ReactMixin from 'react-mixin';
import ReactFire from 'reactfire';
import firebase from 'firebase';
import Footer from './Footer';
import Page404 from './Page404';
import ProjectAchievementItem from './ProjectAchievementItem';

class PageProject extends React.Component {
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
    const parameter_id = this.props.params.id; 
    const projects_arr = this.state.projectsList;
    let project = [];

    for (let i = 0; i < projects_arr.length; i++) {

      if (projects_arr[i].id === parameter_id ) {

        project = projects_arr[i];

      }

      else {
        project = project;
      }

    } 

    if (project.length !== 0) {

      return (
        <div>
          <section className="page-header-img">
            <img src={project.img_bgr} className="img-project" />
            <div>
              <div className="wrapper-container title-page-progect">
                <h2>{project.title}</h2>
              </div>
            </div>
          </section>
          <div className="page-project">
            <section>
              <div className="wrapper-container">
                <p className="text-info">Lorem ipsum dolor sit amet, quo no aliquip integre, mea ne nostro mentitum. Audiam erroribus te nam, iriure legendos cu sea. Te aeque appareat verterem nec, ex homero laoreet est. Te eam prima corrumpit, vim ei antiopam petentium, eum id enim altera. Nihil ponderum moderatius eum no, no ancillae incorrupte definitiones pri, in laudem audire copiosae ius. <br /><br />

                Sed an vivendum phaedrum voluptatum, vim eu mollis viderer inermis. Mei bonorum imperdiet id, iriure sensibus mea no, ut sit quot rebum paulo. Nam sint percipitur reprehendunt et. Eu viris propriae vix, id ipsum sonet tempor eam, per in nostrud convenire. Ei propriae inimicus deterruisset nec, est id tritani similique. Ei facer tantas appetere has.<br /><br />

                Eu duo ubique adolescens moderatius, iusto laoreet cu vim, ea sed fierent sapientem. Est cu soluta theophrastus, lorem minimum no his, qui quis delenit mandamus in. Eu vel aeterno antiopam. Eripuit alienum ad cum. Iusto periculis mea te, pri legimus scribentur et, admodum forensibus assueverit at duo.</p>
              </div>
            </section>

            <section>
              <div className="wrapper-container"></div>
              {   
                  project.article.map((item, i) => <ProjectAchievementItem key={i} achievement={item} />)
              }
            </section>
          </div>
          <Footer />
        </div>
      )

    }

    else {

      return (
        <Page404 />
      )

    }
	}
}
ReactMixin(PageProject.prototype, ReactFire);

export default PageProject;