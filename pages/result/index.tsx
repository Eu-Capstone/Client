import { useEffect, useState } from "react";
import { ResultHeader } from "~/@components/organisms";

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
    <>
      <ResultHeader type={type} />
    </>
  );
};

export default Result;
