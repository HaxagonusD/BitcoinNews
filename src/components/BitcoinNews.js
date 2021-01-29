import { useEffect, useState } from "react";
import getBitcoinData from "../services/getBitcoinData";
import Article from "./Article";

function BitcoinNews() {
  const [bitcoinData, setBitcoinData] = useState(undefined);

  useEffect(() => {
    (async () => {
      const data = await getBitcoinData();
      setBitcoinData(data);
      console.log(data);
    })();
  }, []);

  const articlesToShow = bitcoinData?.articles?.map((currentArticle, index) => {
    return <Article {...currentArticle} key={index} />;
  });

  return <div>{articlesToShow}</div>;
}
export default BitcoinNews;
