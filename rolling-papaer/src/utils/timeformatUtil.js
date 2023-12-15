export function createdAtToDate(createAt) {
  let date = new Date(createAt);

  let year = date.getFullYear() ;
  let month = String(date.getMonth() + 1).padStart(2, "0");
  let day = String(date.getDate()).padStart(2, "0");

  let formattedDate = `${year}/${month}/${day}`;

  return formattedDate;
}
