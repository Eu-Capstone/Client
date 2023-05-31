import { useState } from "react";
import { StatusBar } from "~/@components/molecules";

const Test = () => {
  const [curIdx, setCurIdx] = useState(0);
  const [curType, setCurType] = useState({
    I: 0,
    E: 0,
    F: 0,
    T: 0,
    P: 0,
    J: 0,
  });

  const [status, setStatus] = useState("5%");

  return (
    <>
      <StatusBar stateWidth={status} />
    </>
  );
};
