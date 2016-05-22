import * as types from '../constants.js';

module.exports = (state ='all', action) => {
	switch (action.type) {
		case types.FILTER_BY:
			return action.filter;
		default:
			return state;
	}
}