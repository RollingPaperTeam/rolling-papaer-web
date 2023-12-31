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

export async function getRecipient(recipientId) {
  const apiPath = `${ROUTES.RECIPIENTS}${recipientId}/`;
  console.log(apiPath);
  try {
    const response = await fetch(apiPath);
    if (!response.ok) {
      throw new Error(
        "리스폰스 데이터를 받아오는데 실패 하였습니다.",
        response.statusText
      );
    }
    const result = await response.json();
    return result;
  } catch (e) {
    console.log(e);
    throw e;
  }
}
export async function getRecipientMessages(recipientId, offset = 0, limit){
  const query = new URLSearchParams({
    offset,
    limit,
  }).toString();

  const apiPath = `${ROUTES.RECIPIENTS}${recipientId}/messages/?${query}`;
  try {
    const response = await fetch(apiPath);
    if (!response.ok) {
      throw new Error(
        "리스폰스 데이터를 받아오는데 실패 하였습니다.",
        response.statusText
      );
    }
    const result = await response.json();
    return result;
  } catch (e) {
    console.log(e);
    throw e;
  }
}

export async function deleteRecipientMessage( id){
  const apiPath = `${ROUTES.MESSAGES}/${id}/`;
  try {
    const response = await fetch(apiPath,{
      method:"DELETE",
    });
    if (!response.ok) {
      throw new Error(
        "리스폰스 데이터를 삭제하는 데 실패 하였습니다.",
        response.statusText
      );
    }
  } catch (e) {
    console.log(e);
    throw e;
  }
}

export async function getRecipientReactions(recipientId){

  const apiPath = `${ROUTES.RECIPIENTS}${recipientId}/reactions/`;
  try {
    const response = await fetch(apiPath);
    if (!response.ok) {
      throw new Error(
        "리스폰스 데이터를 받아오는데 실패 하였습니다.",
        response.statusText
      );
    }
    const result = await response.json();
    return result;
  } catch (e) {
    console.log(e);
    throw e;
  }
}

export async function addRecipientReaction(recipientId, emoji){
  const body = {
    emoji,
    type: "increase",
  }
  const apiPath = `${ROUTES.RECIPIENTS}${recipientId}/reactions/`;
  try {
    const response = await fetch(apiPath,{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(
        "데이터 전송에 실패 하였습니다.",
        response.statusText
      );
    }
    const result = await response.json();
    return result;
  } catch (e) {
    console.log(e);
    throw e;
  }
}