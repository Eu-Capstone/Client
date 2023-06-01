import { useState } from "react";
import { Space } from "~/@components/atoms";
import { StatusBar } from "~/@components/molecules";
import { Question } from "~/@components/organisms";

const Test = () => {
  const [index, setIndex] = useState(1);
  const [type, setType] = useState({
    I: 0,
    E: 0,
    F: 0,
    T: 0,
    P: 0,
    J: 0,
  });

  return (
    <>
      <Space margin="21px 0px 0px 0px" />
      <StatusBar index={index} />
      <Space margin="25px 0px 0px 0px" />
      <Question index={index} />
    </>
  );
};

export default Test;
