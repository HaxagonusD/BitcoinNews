import { useEffect, useState } from "react";
import getBusinessData from "../services/getBusinessData";
import Article from "./Article";

function BusinessNews() {
  const [businessData, setBusinessData] = useState(undefined);

  useEffect(() => {
    (async () => {
      const data = await getBusinessData();
      setBusinessData(data);
      console.log(data);
    })();
  }, []);

  const articlesToShow = businessData?.articles?.map(
    (currentArticle, index) => {
      return <Article {...currentArticle} key={index} />;
    }
  );

  return <div>{articlesToShow}</div>;
}
export default BusinessNews;
