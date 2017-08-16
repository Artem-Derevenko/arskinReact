import React from 'react';
import Footer from './Footer';

class PageFibrokamen extends React.Component {
	render() {
		return (
			<div>
	          <section className="page-header-img">
	            <img src="img/fibrokamen.png" className="img-project" />
	            <div>
	              <div className="wrapper-container title-page-progect">
	                <h2>ФИБРОКАМЕНЬ</h2>
	              </div>
	            </div>
	          </section>
	          <div className="page-project">
	            <section>
	              <div className="wrapper-container">
	                <p className="text-info">Фиброкамень ARSKIN – это инновационный для Украины материал, который благодаря уникальным свойствам, обладает огромным потенциалом для изменения эстетики жилой и коммерческой недвижимости.
Требования архитекторов к отделочным материалам меняются в соответствии с мировыми трендами. Легкость, экологичность, устойчивость к погодным катаклизмам и механическим воздействиям, а также возможность принимать абсолютно любую форму, цвет и фактуру делают фиброкамень идеальным инструментом для облицовки зданий.
Фиброкамень завоевал любовь многих мировых архитекторов. Благодаря ему Заха Хадид, Сантьяго Калатрава и многие другие современные творцы смогли воплотить в жизнь самые смелые архитектурные идеи. Теперь фиброкамень Arskin станет надежным помощником в реализации творческих замыслов украинских архитекторов.</p>
	              </div>
	            </section>

	            <section>
	              <div className="wrapper-container"></div>
	              <div className="block-achievement-wrapp">
			        <div className="block-achievement">
			          <img src="img/page-company/achievements-1.png" alt="" className="img-achievement" />
			          <h3>50 ЛЕТ БЕЗРЕМОНТНОЙ ЭКСПЛУАТАЦИИ</h3>
			          <img src="img/news-line.png" className="achievements-line" />
			          <p>Фиброкамень экологически безопасен, долговечен и обладает высокой износостойкостью. Он требует минимальных затрат на эксплуатационный уход.</p>
			        </div>
			      </div>
			      <div className="block-achievement-wrapp">
			        <div className="block-achievement">
			          <img src="img/page-company/achievements-2.png" alt="" className="img-achievement" />
			          <h3>КЛАСС ОГНЕСТОЙКОСТИ НГ</h3>
			          <img src="img/news-line.png" className="achievements-line" />
			          <p>Имея класс НГ (не горючий), ARSKIN  может использоваться при облицовке любых зданий, без ограничений.</p>
			        </div>
			      </div>
			      <div className="block-achievement-wrapp">
			        <div className="block-achievement">
			          <img src="img/page-company/achievements-1.png" alt="" className="img-achievement" />
			          <h3>ВСЕСЕЗОННЫЙ МОНТАЖ</h3>
			          <img src="img/news-line.png" className="achievements-line" />
			          <p>Всесезонный монтаж без выравнивания и подготовки стен. Панели из фиброкамня не нуждаются в предварительной подготовке здания перед монтажом. </p>
			        </div>
			      </div>
			      <div className="block-achievement-wrapp">
			        <div className="block-achievement">
			          <img src="img/page-company/achievements-2.png" alt="" className="img-achievement" />
			          <h3>УСТОЙЧИВОСТЬ К ПЕРЕПАДАМ ТЕМПЕРАТУРЫ</h3>
			          <img src="img/news-line.png" className="achievements-line" />
			          <p>Фиброкамень в 3 раза лучше кирпича переносит перепады температуры и может использоваться в любых климатических условиях.</p>
			        </div>
			      </div>
	            </section>
	          </div>
	          <Footer />
	        </div>
		)
	}
}

export default PageFibrokamen;