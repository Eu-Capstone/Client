import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { Flex, Space } from "~/@components/atoms";
import { StatusBar } from "~/@components/molecules";
import { Question } from "~/@components/organisms";
import { indexState } from "~/@utils/states/index/index";

const Test = () => {
  const [index, setIndex] = useRecoilState(indexState);

  useEffect(() => {
    setIndex(1);
  }, []);

  return (
    <>
      <Flex height="" justify="center">
        {index < 10 && (
          <>
            <Space margin="21px 0px 0px 0px" />
            <StatusBar />
            <Space margin="25px 0px 0px 0px" />
          </>
        )}
        <Question />
      </Flex>
    </>
  );
};

export default Test;
