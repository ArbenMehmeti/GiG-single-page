import { all } from "redux-saga/effects";

import { watcher as language } from "./app/language";
import { watcher as randomColor } from "./app/randomColor";
import { watcher as monochrome } from "./app/monochrome";

export default function* root() {
	yield all([
		language(),
		randomColor(),
		monochrome(),
	]);
}
