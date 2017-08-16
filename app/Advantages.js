import React from 'react';
import AdvantagesItem from './AdvantagesItem';

class Advantages extends React.Component {
	render() {
		const advantages_List = this.props.advantages_List;
		return (
			<section id="block-advantages">
		        <div className="wrapper-container">
		          <h2>ПРЕИМУЩЕСТВА</h2>
		          <ul className="advantages">
		        	{	
                        advantages_List.map((item, i) => 
 							<AdvantagesItem key={i} advantage={item} />)
	                }
		          </ul>
		          <a href="#" className="button-style-1 transition">оставить запрос</a>
		        </div>
		    </section>
		)
	}
}

export default Advantages;