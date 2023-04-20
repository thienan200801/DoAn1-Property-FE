import Axios from "axios";
import { URL_POST_CONTACT } from "./urlAPI";

export const ContactServices = {
  postContact: (contact) => {
    return Axios({
      url: URL_POST_CONTACT,
      method: "POST",
      data: contact,
    });
  },
};
