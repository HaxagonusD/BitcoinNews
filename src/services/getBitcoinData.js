import axios from "axios";

export default async function getBitcoinData() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const url = process.env.REACT_APP_API_BITCOIN_URL;
  console.log(url);
  return await axios.get(`${url}${apiKey}`).then(({ data }) => data);
}
