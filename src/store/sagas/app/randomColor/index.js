import produce from "immer";
import createAction from "../../../../utils/action-creator";

const PREFIX = "@app/randomColor/";
export const RANDOM_COLOR = `${PREFIX}RANDOM_COLOR`;

const _state = {
	randomColor: false,
};

const reducer = (state = _state, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case RANDOM_COLOR:
				draft.randomColor = !state.randomColor;

				break;

			default:
				return state;
		}
	});
export default reducer;

export const actions = {
	randomColor: (payload) => createAction(RANDOM_COLOR, { payload }),
};

export const sagas = {};

export const watcher = function* w() { };
