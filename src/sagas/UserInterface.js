import { takeEvery, put } from "redux-saga/effects";
import interfaceActions from "../actions/UserInterface";

function* addToCount() {
  yield put(interfaceActions.creators.addCountComplete());
}

export default function* interfaceSaga() {
  yield takeEvery(interfaceActions.types.ADD_COUNT, addToCount);
}
