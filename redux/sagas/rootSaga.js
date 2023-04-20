import { all } from "redux-saga/effects";
import * as ContactSaga from "./ContactSaga";

export default function* rootSaga() {
  yield all([
    //Contact
    ContactSaga.followActPostContact(),
  ]);
}
