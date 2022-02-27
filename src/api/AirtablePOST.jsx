const APIPOST = "https://api.airtable.com/v0/app6wQWfM6eJngkD4/Buscas";

const postData = async (postText) => {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const seconds = date.getSeconds();

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const requestOptions = {
    method: "POST",
    headers: {
      authorization: "Bearer key2CwkHb0CKumjuM",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      records: [
        {
          fields: {
            Squad: "150222",
            Hashtag: postText,
            Data: `${day}/${month + 1}/${year}`,
            Hora: `${hour}:${min}:${seconds}`,
          },
        },
      ],
    }),
  };
  fetch(APIPOST, requestOptions)
    .then((response) => response.json())
    .then((data) => console.log(data));
};

export { postData };
