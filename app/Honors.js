import React from 'react';
import firebase from 'firebase';
import ReactFire from 'reactfire';
import ReactMixin from 'react-mixin';
import ScrollArea from 'react-scrollbar'; 
import HonorsItem from './HonorsItem';

class Honors extends React.Component {
	render() {

        const honorsList = this.props.honors_List; 

        const content = { width: honorsList.length*(164 + 20) }

		return (
			<section id="honors">
		        <div className="wrapper-container">
		          	<h2>награды и рекомендации</h2>
	                <ScrollArea horizontal={true} speed={0.8} vertical={true} contentStyle={content}>
                      	{	
		                    honorsList.map((item, i) => 
									<HonorsItem key={i} img={item.img} />)
		                }
	                </ScrollArea>
		        </div>
		    </section>
		)
	}
}

ReactMixin(Honors.prototype, ReactFire);
export default Honors;