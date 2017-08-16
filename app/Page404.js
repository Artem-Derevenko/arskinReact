import React from 'react';
import Footer from './Footer';

class Page404 extends React.Component {
	render() { 
		return (
			<div>
				<div className="wrap-content-404">
			        <div className="content-404">
			          <span className="error-404">404</span>
			          <p className="error-404-title">страница не найдена</p>
			          <p className="error-404-text">Страница, на которую вы пытаетесь попасть, не найдена. <br />
			  Возможно вы пытаетесь загрузить несуществующую или <br />
			  удалённую страницу.<br /><br />

			  Попробуйте воспользоваться меню.</p>
			        </div>
			    </div>
			    <Footer />
			</div>
		)
	}
}

export default Page404;