const APIPOST = "https://api.airtable.com/v0/app6wQWfM6eJngkD4/Buscas";

const postData = async (postText) => {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();

  const day = `0${date.getDate()}`.slice(-2);
  const month = `0${date.getMonth()+1}`.slice(-2);
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
            Data: `${day}/${month}/${year}`,
            Hora: `${hour}:${min}`,
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
