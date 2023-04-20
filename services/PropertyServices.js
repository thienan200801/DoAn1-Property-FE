import Axios from "axios";
import {
  URL_GET_PROPERTIES,
  URL_GET_PROPERTY_BY_SLUG,
  URL_GET_PROPERTY_WITH_FILTER,
} from "./urlAPI";

const PropertyServices = {
  getProperties: () => {
    return Axios({
      url: URL_GET_PROPERTIES,
      method: "GET",
    });
  },

  getPropertyBySlug: (slug) => {
    return Axios({
      url: URL_GET_PROPERTY_BY_SLUG(slug),
      method: "GET",
    });
  },

  getPropertiesWithFilter: ({ province }) => {
    if (decodeURI(province) === "Tất cả")
      return Axios({
        url: URL_GET_PROPERTIES,
        method: "GET",
      });
    else
      return Axios({
        url: URL_GET_PROPERTY_WITH_FILTER({
          province,
        }),
        method: "GET",
      });
  },
};

export default PropertyServices;
