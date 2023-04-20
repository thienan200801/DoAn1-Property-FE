import { call, takeLatest } from "redux-saga/effects";
import { ContactServices } from "~/services/ContactServices";
import { STATUS_SUCCESS } from "~/services/urlAPI";
import showSweetAlert from "~/utils/show-sweet-alert";
import { POST_CONTACT_SAGA } from "../constants/constantSaga";

function* actPostContact(action) {
  const { contact, handleResetForm } = action;

  try {
    let { status } = yield call(() => ContactServices.postContact(contact));
    if (status === STATUS_SUCCESS) {
      showSweetAlert("Gửi thông tin liên hệ thành công", "success");
      handleResetForm();
    } else
      showSweetAlert(
        "Gửi thông tin liên hệ thất bại! Vui lòng thử lại",
        "error"
      );
  } catch (err) {
    showSweetAlert("Gửi thông tin liên hệ thất bại! Vui lòng thử lại", "error");
  }
}

export function* followActPostContact() {
  yield takeLatest(POST_CONTACT_SAGA, actPostContact);
}
