const BASE_API_URL = "https://rolling-api.vercel.app";
const BASE_API_URL_TEAM = `${BASE_API_URL}/2-6`;
const ROUTES = {
  MESSAGES: `${BASE_API_URL_TEAM}/messages`, //get put push delete
  RECIPIENTS: `${BASE_API_URL_TEAM}/recipients/`, //get put push delete
  BACKGROUND_IMAGES: `${BASE_API_URL}/background-images/`, // get
  PROFILE_IMAGES: `${BASE_API_URL}/profile_images/`, //get
};

export async function getRecipients(limit, sort, offset = 0) {
  const params = new URLSearchParams({
    offset,
    limit,
    sort,
  }).toString();
  try {
    const response = await fetch(`${ROUTES.RECIPIENTS}?${params}`);
    if (!response.ok) {
      throw new Error("리스폰스 데이터를 받아오는데 실패 하였습니다.");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("에러내용:" + error);
    throw error;
  }
}
