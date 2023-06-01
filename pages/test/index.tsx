import { useRecoilState } from "recoil";
import { Space } from "~/@components/atoms";
import { StatusBar } from "~/@components/molecules";
import { Question } from "~/@components/organisms";
import { indexState } from "~/@utils/states/index/index";

const Test = () => {
  const [index, setIndex] = useRecoilState(indexState);
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
