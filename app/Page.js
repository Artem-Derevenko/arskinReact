import React from 'react';
import Header from './Header';
import FormFeedback from './FormFeedback';
import BlockHeaderInfo from './BlockHeaderInfo';
import { Link } from 'react-router';

class Page extends React.Component {
	render() {
		return (
			<div>
				<FormFeedback />
				<Header />
				<div className="wrapper-content-page">
					<BlockHeaderInfo />
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default Page;