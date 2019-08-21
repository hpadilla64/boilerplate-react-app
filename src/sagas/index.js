import { all } from "redux-saga/effects";

import interfaceSaga from "./UserInterface";

export default function* rootSagas() {
  yield all([interfaceSaga()]);
}
