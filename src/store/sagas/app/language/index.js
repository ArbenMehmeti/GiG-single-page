import produce from "immer";
import createAction from "../../../../utils/action-creator";

const PREFIX = "@app/language/";
export const LANGUAGE = `${PREFIX}LANGUAGE`;

const _state = {
	language: 'en',
};

const reducer = (state = _state, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case LANGUAGE:
				draft.language = action.payload;

				break;

			default:
				return state;
		}
	});
export default reducer;

export const actions = {
	toggleLanguage: (payload) => createAction(LANGUAGE, { payload }),
};

export const sagas = {};

export const watcher = function* w() { };
