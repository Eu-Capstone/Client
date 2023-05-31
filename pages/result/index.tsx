import { useState } from "react";
import { types } from "~/@utils";

const Result = () => {
  const [type, setType] = useState<any>();
  const result = localStorage.getItem("type");
  if (result) {
    setType(types[result as keyof typeof types]);
  }
  return <>{type && <></>}</>;
};

export default Result;
