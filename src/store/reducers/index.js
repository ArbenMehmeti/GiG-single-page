import { combineReducers } from "redux";
import language from '../sagas/app/language';
import randomColor from '../sagas/app/randomColor';
import rotateText from '../sagas/app/rotateText';
import monochrome from '../sagas/app/monochrome';

export default function createReducer(injectedReducers, history) {
	return combineReducers({
		app: combineReducers({
			language,
			randomColor,
			rotateText,
			monochrome
		}),
		...injectedReducers,
	});
}
