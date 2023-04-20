export const DOMAIN_NAME = process.env.NEXT_PUBLIC_BASE_URL;
export const STATUS_SUCCESS = 200;
export const STATUS_CREATE_SUCCESS = 201;
export const STATUS_NO_CONTENT = 204;

//ADMINISTRATIVE
export const URL_GET_PROVINCES = `${DOMAIN_NAME}/administrative/provinces`;

//CONTACT
export const URL_POST_CONTACT = `${DOMAIN_NAME}/contacts`;

//PROPERTY
export const URL_GET_PROPERTIES = `${DOMAIN_NAME}/properties?postStatus=PUBLISHED`;
export const URL_GET_PROPERTY_BY_SLUG = (slug) =>
  `${DOMAIN_NAME}/properties/slug/${slug}`;
export const URL_GET_PROPERTY_WITH_FILTER = ({ province }) =>
  `${DOMAIN_NAME}/properties?postStatus=PUBLISHED&province=${province}`;

//POSTS
export const URL_GET_POSTS = (postType) =>
  `${DOMAIN_NAME}/posts?postStatus=PUBLISHED&postType=${postType}`;
export const URL_GET_POST_BY_SLUG = (slug) =>
  `${DOMAIN_NAME}/posts/slug/${slug}`;
