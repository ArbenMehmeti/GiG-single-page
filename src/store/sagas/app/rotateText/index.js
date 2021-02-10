import produce from "immer";
import createAction from "../../../../utils/action-creator";

const PREFIX = "@app/rotateText/";
export const ROTATE_TEXT = `${PREFIX}ROTATE_TEXT`;

const _state = {
	rotateText: false,
};

const reducer = (state = _state, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case ROTATE_TEXT:
				draft.rotateText = !state.rotateText;

				break;

			default:
				return state;
		}
	});
export default reducer;

export const actions = {
	rotateText: (payload) => createAction(ROTATE_TEXT, { payload }),
};

export const sagas = {};

export const watcher = function* w() { };
