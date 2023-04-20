import Axios from "axios";
import { URL_GET_POSTS, URL_GET_POST_BY_SLUG } from "./urlAPI";

const PostServices = {
  getPosts: (postType) => {
    return Axios({
      url: URL_GET_POSTS(postType),
      method: "GET",
    });
  },

  getPostBySlug: (slug) => {
    return Axios({
      url: URL_GET_POST_BY_SLUG(slug),
      method: "GET",
    });
  },
};

export default PostServices;
