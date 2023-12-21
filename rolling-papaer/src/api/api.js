import ROUTES from "./Routes";

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

export default getRecipients;
