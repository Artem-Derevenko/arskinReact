import { combineReducers } from 'redux';
import menu from './menu';
import anchor from './anchor';
import show_form from './show_form';

export default combineReducers({
	show_form,
	menu,
	anchor
})