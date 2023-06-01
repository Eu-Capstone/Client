import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { Flex, Space } from "~/@components/atoms";
import { StatusBar } from "~/@components/molecules";
import { Question } from "~/@components/organisms";
import { indexState } from "~/@utils/states/index/index";
import { typeState } from "~/@utils/states/type/index";

const Test = () => {
  const [index, setIndex] = useRecoilState(indexState);
  const [type, setType] = useRecoilState(typeState);

  useEffect(() => {
    setIndex(1);
    setType("");
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
