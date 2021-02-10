import produce from "immer";
import createAction from "../../../../utils/action-creator";

const PREFIX = "@app/monochrome/";
export const MONOCHROME = `${PREFIX}MONOCHROME`;

const _state = {
	monochrome: false,
};

const reducer = (state = _state, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case MONOCHROME:
				draft.monochrome = !state.monochrome;

				break;

			default:
				return state;
		}
	});
export default reducer;

export const actions = {
	monochrome: (payload) => createAction(MONOCHROME, { payload }),
};

export const sagas = {};

export const watcher = function* w() { };
