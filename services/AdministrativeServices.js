import Axios from "axios";
import { URL_GET_PROVINCES } from "./urlAPI";

const AdministrativeServices = {
  getProvinces: () => {
    return Axios({
      url: URL_GET_PROVINCES,
      method: "GET",
    });
  },
};

export default AdministrativeServices;
