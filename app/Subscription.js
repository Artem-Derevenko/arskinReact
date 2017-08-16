import React from 'react';
import firebase from 'firebase';

class Subscription extends React.Component {
	_isValidEmailAddsess(emailAddress) {
        const pattern = new RegExp(/^(?:[a-z0-9]+(?:[-_.]?[a-z0-9]+)?@[a-z0-9_.-]+(?:\.?[a-z0-9]+)?\.[a-z]{2,5})$/i);
        return pattern.test(emailAddress);
    }

	_submitFormSubscription(event) {

        event.preventDefault();

        const email = this._email.value;

        if ((email.length === 0) || ( this._isValidEmailAddsess(email) === false ) ) {
            alert('Для оформления подписки, заполните корректно поле "E-mail"');
        }

        else {

        	firebase.database().ref().child("subscription").child(Math.round(1000 - 1 + Math.random() * (1000 - 1))).set(email);

        	this._email.value = "";
        	alert("Вы подписаны на новости и обновления!")
        }
    }

	render() {
		return (
			<section id="wrapp-subscription">
		        <div className="wrapper-container">
		          <form className="subscription" onSubmit={this._submitFormSubscription.bind(this)}>
		            <span>ХОТИТЕ БыТЬ В КУРСЕ наших НОВОСТЕЙ?</span>
		            <div className="wrapp-email-subscription">
		              <input type="text" name="email_subscription" id="email-subscription" ref={(input) => this._email = input} placeholder="EMAIL" required />
		            </div>
		            <button className="button-subscription transition">подписаться</button>
		          </form>
		        </div>
		    </section>
		)
	}
}

export default Subscription;