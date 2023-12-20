const BASE_API_URL = "https://rolling-api.vercel.app";
const BASE_API_URL_TEAM = `${BASE_API_URL}/2-6`;
const ROUTES = {
  MESSAGES: `${BASE_API_URL_TEAM}/messages`, //get put push delete
  RECIPIENTS: `${BASE_API_URL_TEAM}/recipients/`, //get put push delete
  BACKGROUND_IMAGES: `${BASE_API_URL}/background-images/`, // get
  PROFILE_IMAGES: `${BASE_API_URL}/profile_images/`, //get
};

export default ROUTES;
