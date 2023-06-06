import axios from "axios";
import { OuterDiv } from "pages";
import { useEffect, useState } from "react";
import { Footer, Header } from "~/@components/molecules";
import { ResultButton, ResultHeader, ResultRelation, ResultText } from "~/@components/organisms";

const Result = () => {
  const [type, setType] = useState<any>("IFP");

  const postResult = async (type: any) => {
    const data = {
      mbti: type,
    };
    return await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/mbti/result`, data);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("type") !== null) {
        setType(localStorage.getItem("type"));
      }
    }

    if (window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API);
      }
    }

    const type = localStorage.getItem("type");
    if (type) {
      if (type === localStorage.getItem("prev")) return;

      postResult(type)
        .then((res) => {
          localStorage.setItem("prev", type);
        })
        .catch((err) => console.error(err));
    }
  }, []);

  return (
    <OuterDiv>
      <Header />
      <ResultHeader type={type} />
      <ResultText type={type} />
      <ResultRelation type={type} />
      <ResultButton type={type} />
      <Footer />
    </OuterDiv>
  );
};

export default Result;
