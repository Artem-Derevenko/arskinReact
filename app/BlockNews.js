import React from 'react';
import BlockNewsItem from './BlockNewsItem';

class BlockNews extends React.Component {
	render() {
		const news_List = this.props.news_List;
		return (
			<div className="wrapper-container" id="wrapp-news">
	            <h2>самое свежее о нас</h2>
	            {	
                    news_List.map((item, i) => 
							<BlockNewsItem key={i} news={item} />)
                }
	        </div>
		)
	}
}

export default BlockNews;