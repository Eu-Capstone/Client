import { OuterDiv } from "pages";
import { useEffect, useState } from "react";
import { Footer, Header } from "~/@components/molecules";
import { ResultButton, ResultHeader, ResultRelation, ResultText } from "~/@components/organisms";

const Result = () => {
  const [type, setType] = useState<any>();
  if (typeof window !== "undefined") {
    const result: any = localStorage.getItem("type");

    useEffect(() => {
      if (result) {
        setType(result);
      }
    }, []);
  }

  return (
    <OuterDiv>
      <Header />
      <ResultHeader type={type} />
      <ResultText type={type} />
      <ResultRelation type={type} />
      <ResultButton />
      <Footer />
    </OuterDiv>
  );
};

export default Result;
