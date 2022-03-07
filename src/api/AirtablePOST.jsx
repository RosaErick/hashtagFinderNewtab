const APIPOST = "https://api.airtable.com/v0/app6wQWfM6eJngkD4/Buscas";

const postData = async (postText) => {
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
            Data: Date.now(),
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
