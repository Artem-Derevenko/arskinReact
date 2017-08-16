import React from 'react';
import { connect } from 'react-redux';

class FormFeedback extends React.Component {
	_hideForm() {
		this.props.OnHideForm();
	}

	render() {
		return (
			<div className={ (this.props.formStatus === true ) ? "form-feedback-wrap visible" : "form-feedback-wrap" }>
		      <img src="img/form-close.png" alt="" className="form-close" onClick={this._hideForm.bind(this)} />
		      <form method="post" className="form-feedback">
		        <div className="wrapper-input">
		          <input type="text" name="name" id="name"  value = "" placeholder="Имя*" required />
		        </div>
		        <div className="wrapper-input">
		          <input type="email" name="email" id="email" value = "" placeholder="Email*" required />
		        </div>
		        <div className="wrapper-input">
		          <input type="text" name="name" id="tel"  value = "" placeholder="Телефон" required />
		        </div>
		        <div className="wrapper-message">
		          <textarea name="msg" placeholder="Сообщение" id="text-message" required ></textarea>
		        </div>

		        <div className="button-style-1 transition">
		          <span>ОТПРАВИТЬ</span>
		        </div>
		      </form> 
		    </div>
		)
	}
}

export default connect(
    state => ({
    	formStatus: state.show_form.view_form
    }),
    dispatch => ({
        OnHideForm: () => {
            dispatch({ type: 'HIDE_FORM' });
        }
    })
)(FormFeedback);
