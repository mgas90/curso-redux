import { combineReducers } from 'redux';
import usuariosReducer from './usuariosReducer';
import publicacionesReducer from './publicacionesReducer';

//combinacion de reducers
export default combineReducers({
	usuariosReducer,
	publicacionesReducer,
});