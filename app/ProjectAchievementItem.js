import React from 'react';

class ProjectAchievementItem extends React.Component {
	render() { 
		return (
			<div className="block-achievement-wrapp">
        <div className="block-achievement">
          <img src={this.props.achievement.article_img} alt="" className="img-achievement" />
          <h3>{this.props.achievement.article_name}</h3>
          <img src="img/news-line.png" className="achievements-line" />
          <p>{this.props.achievement.article_text}</p>
        </div>
      </div>
		)
	}
}

export default ProjectAchievementItem;