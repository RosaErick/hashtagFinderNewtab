const getTweetImgs = async (searchValue, moreRequest) => {
  //  `https://cors.bridged.cc/https://api.twitter.com/1.1/search/tweets.json?q=${searchValue}&lang=pt&result_type=recent`;

  // `https://cors.eu.org/https://api.twitter.com/2/tweets/search/recent?query=${searchValue}%20has:hashtags%20-is:retweet%20-is:quote%20has:images&max_results=10&expansions=author_id,attachments.media_keys&user.fields=id,name,username,profile_image_url,url&media.fields=type,url,width,height&tweet.fields=source`;

  const url = `https://cors.eu.org/https://api.twitter.com/2/tweets/search/recent?query=${searchValue}%20has:hashtags%20-is:retweet%20-is:quote%20has:images&max_results=${moreRequest}&expansions=author_id,attachments.media_keys&user.fields=id,name,username,profile_image_url,url&media.fields=type,url,width,height&tweet.fields=source`;

  const token =
    "AAAAAAAAAAAAAAAAAAAAAFlKHgEAAAAApBW4nRyRkiogluzAbXlS4KuHlMU%3DFcR7r8N19LRnMHLVmYlFsod6Be6zUvZD2rxATotl6mLPAh2UEX";

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  const response = await fetch(url, requestOptions);
  const body = await response.json();

  console.log(body);
  return body;
};

export { getTweetImgs };
