import React from 'react';

class BlockNewsItem extends React.Component {
	constructor() {
        super();
        this.state = {
            show: false
        }
    }

    _toggleNews() {
        this.setState({
            show: !this.state.show
        });
    }

	render() {
		return (
            <div className="news">
				<img src={this.props.news.img} alt="" className="news-img" />
				<h3>{this.props.news.title}</h3>
				<span className="date">{this.props.news.date}</span>
				<img src="img/news-line.png" className="news-line" />
				<p>{ this.state.show ? this.props.news.text : (this.props.news.text.slice(0, this.props.news.text.slice(0, 280).lastIndexOf(' ')) + " ...")  }</p>
				<span className="hyperlink" onClick={this._toggleNews.bind(this)}>{ this.state.show ? "свернуть новость" : "читать полностью" }</span>
            </div>

		)
	}
}

export default BlockNewsItem;