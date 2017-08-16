import React from 'react';
import ReactMixin from 'react-mixin';
import ReactFire from 'reactfire';
import firebase from 'firebase';
import Advantages from './Advantages';
import EmployeesItem from './EmployeesItem';
import Footer from './Footer';

class PageCompany extends React.Component {
    constructor() {
        super();
        this.state = {
            advantagesList: [],
            employeesList: [],
            process : 1
        }
    }

    componentDidMount() {
        this.bindAsArray(firebase.database().ref().child("advantages"), "advantagesList");
        this.bindAsArray(firebase.database().ref().child("employees"), "employeesList");
    }

    _clickProcess(event) {
        this.setState({
            process: Number(event.target.innerHTML)
        });
    }

	render() { 
    const employees_List = this.state.employeesList;
		return (
			<div> 
          <section id="history">
              <div className="wrapper-container">
                <img src="img/page-company/img1-history.png" className="img-history" alt="" />
                <img src="img/page-company/img2-history.png" className="img-history" alt="" />
                <img src="img/page-company/img1-history.png" className="img-history" alt="" />
                <h2>История</h2>
                <p>Lorem ipsum dolor sit amet, quo no aliquip integre, mea ne nostro mentitum. Audiam erroribus te nam, iriure legendos cu sea. Te aeque appareat verterem nec, ex homero laoreet est. Te eam prima corrumpit, vim ei antiopam petentium, eum id enim altera. Nihil ponderum moderatius eum no, no ancillae incorrupte definitiones pri, in laudem audire copiosae ius.<br /><br />
                  Sed an vivendum phaedrum voluptatum, vim eu mollis viderer inermis. Mei bonorum imperdiet id, iriure sensibus mea no, ut sit quot rebum paulo. Nam sint percipitur reprehendunt et. Eu viris propriae vix, id ipsum sonet tempor eam, per in nostrud convenire. Ei propriae inimicus deterruisset nec, est id tritani similique. Ei facer tantas appetere has.<br /><br />
                  Eu duo ubique adolescens moderatius, iusto laoreet cu vim, ea sed fierent sapientem. Est cu soluta theophrastus, lorem minimum no his, qui quis delenit mandamus in. Eu vel aeterno antiopam. Eripuit alienum ad cum. Iusto periculis mea te, pri legimus scribentur et, admodum forensibus assueverit at duo.</p>
              </div>
          </section>
          <div id="block-advantages-company-2">
            <Advantages advantages_List = {this.state.advantagesList} />
          </div>
          <section id="achievements">
              <div className="wrapper-container">
                <h2>Достижения</h2>
              </div>
              <div className="block-achievement-wrapp">
                <div className="block-achievement">
                  <img src="img/page-company/achievements-1.png" alt="" className="img-achievement" />
                  <h3>Lorem ipsum dolor sit amet</h3>
                  <img src="img/news-line.png" className="achievements-line" />
                  <p>Lorem ipsum dolor sit amet, elitr veniam et quo, melius verear eu vel. Accumsan scriptorem pro cu, quem option accusata cu has, an vix amet affert. Vidisse fastidii appareat pro at. </p>
                </div>
              </div>
              <div className="block-achievement-wrapp">
                <div className="block-achievement">
                  <img src="img/page-company/achievements-2.png" alt="" className="img-achievement" />
                  <h3>Lorem ipsum dolor sit amet</h3>
                  <img src="img/news-line.png" className="achievements-line" />
                  <p>Lorem ipsum dolor sit amet, elitr veniam et quo, melius verear eu vel. Accumsan scriptorem pro cu, quem option accusata cu has, an vix amet affert. Vidisse fastidii appareat pro at. </p>
                </div>
              </div>
              <div className="block-achievement-wrapp">
                <div className="block-achievement">
                  <img src="img/page-company/achievements-3.png" alt="" className="img-achievement" />
                  <h3>Lorem ipsum dolor sit amet</h3>
                  <img src="img/news-line.png" className="achievements-line" />
                  <p>Lorem ipsum dolor sit amet, elitr veniam et quo, melius verear eu vel. Accumsan scriptorem pro cu, quem option accusata cu has, an vix amet affert. Vidisse fastidii appareat pro at. </p>
                </div>
              </div>
          </section>
          <section className="process" id="process">
              <div className="process-img"></div>
              <div className="process-amount">
                <div className="wrapper-container">
                  <span>Процесс: </span>
                  <ul className="process-nav tabs-process">
                    <li className = {( this.state.process === 1 ) ? 'active' : ''}>
                      <span className="transition" onClick={this._clickProcess.bind(this)}>1</span>
                    </li>
                    <li className = {( this.state.process === 2 ) ? 'active' : ''}>
                      <span className="transition" onClick={this._clickProcess.bind(this)}>2</span>
                    </li>
                    <li className = {( this.state.process === 3 ) ? 'active' : ''}>
                      <span className="transition" onClick={this._clickProcess.bind(this)}>3</span>
                    </li>
                    <li className = {( this.state.process === 4 ) ? 'active' : ''}>
                      <span className="transition" onClick={this._clickProcess.bind(this)}>4</span>
                    </li>
                    <li className = {( this.state.process === 5 ) ? 'active' : ''}>
                      <span className="transition" onClick={this._clickProcess.bind(this)}>5</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="wrapper-container">
                <div className="tabs-process-content">
                  <div className = {( this.state.process === 1 ) ? 'active transition' : 'transition'}>
                    <h2><span>1.</span> Lorem ipsum dolor sit amet 1</h2>
                    <p>Eu viris propriae vix, id ipsum sonet tempor eam, per in nostrud, vim eu mollis viderer inermis. Mei bonorum imperdiet id, iriure sensibus mea no, ut sit quot rebum paulo. Nam sint percipitur reprehendunt et. <br /><br />

                    Eu viris propriae vix, id ipsum sonet tempor eam, per in nostrud 
                    convenire. Ei propriae inimicus deterruisset nec, est id tritani similique. Ei facer tantas appetere has. </p>
                  </div>
                  <div className = {( this.state.process === 2 ) ? 'active transition' : 'transition'}>
                    <h2><span>2.</span> Lorem ipsum dolor sit amet 2</h2>
                    <p>Ei propriae inimicus deterruisset nec. Sed an vivendum phaedrum voluptatum, vim eu mollis viderer inermis. Mei bonorum imperdiet id, iriure sensibus mea no, ut sit quot rebum paulo. Nam sint percipitur reprehendunt et. <br /><br />

                    Eu viris propriae vix, id ipsum sonet tempor eam, per in nostrud 
                    convenire. Ei propriae inimicus deterruisset nec, est id tritani similique. Ei facer tantas appetere has. </p>
                  </div>
                  <div className = {( this.state.process === 3 ) ? 'active transition' : 'transition'}>
                    <h2><span>3.</span> Lorem ipsum dolor sit amet 3</h2>
                    <p>Sed an vivendum phaedrum voluptatum, vim eu mollis viderer inermis. Mei bonorum imperdiet id, iriure sensibus mea no, ut sit quot rebum paulo. Nam sint percipitur reprehendunt et. <br /><br />

                    Eu viris propriae vix, id ipsum sonet tempor eam, per in nostrud 
                    convenire. Ei propriae inimicus deterruisset nec, est id tritani similique. Ei facer tantas appetere has. </p>
                  </div>
                  <div className = {( this.state.process === 4 ) ? 'active transition' : 'transition'}>
                    <h2><span>4.</span> Lorem ipsum dolor sit amet 4</h2>
                    <p>Sed an vivendum phaedrum voluptatum, Ei propriae inimicus deterruisset nec, vim eu mollis viderer inermis. Mei bonorum imperdiet id, iriure sensibus mea no, ut sit quot rebum paulo. Nam sint percipitur reprehendunt et. <br /><br />

                    Eu viris propriae vix, id ipsum sonet tempor eam, per in nostrud 
                    convenire. Ei propriae inimicus deterruisset nec, est id tritani similique. Ei facer tantas appetere has. </p>
                  </div>
                  <div className = {( this.state.process === 5 ) ? 'active transition' : 'transition'}>
                    <h2><span>5.</span> Lorem ipsum dolor sit amet 5</h2>
                    <p>Sed an vivendum phaedrum voluptatum, vim eu mollis viderer inermis. Mei bonorum imperdiet id, iriure sensibus mea no, ut sit quot rebum paulo. Nam sint percipitur reprehendunt et. <br /><br />

                    Eu viris propriae vix, Ei propriae inimicus deterruisset nec, id ipsum sonet tempor eam, per in nostrud 
                    convenire. Ei propriae inimicus deterruisset nec, est id tritani similique. Ei facer tantas appetere has. </p>
                  </div>
                </div>
              </div>
          </section>
          <section id="employees">
            <div className="wrapper-container">
              <h2>Команда</h2>
            </div>
            <div className="wrapper-container">
              { 
                employees_List.map((item, i) => 
                  <EmployeesItem key={i} employees={item} />)
              }
            </div>
          </section>
          <Footer />
      </div>
		)
	}
}
ReactMixin(PageCompany.prototype, ReactFire);

export default PageCompany;