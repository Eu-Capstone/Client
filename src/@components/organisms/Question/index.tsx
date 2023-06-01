import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import styled, { keyframes } from "styled-components";
import { Flex, Space, Text } from "~/@components/atoms";
import { OptionButton, QuestionCount, QuestionText } from "~/@components/molecules";
import { questions } from "~/@utils/data";
import { indexState } from "~/@utils/states/index/index";
import { typeState } from "~/@utils/states/type/index";

export const Question = () => {
  const router = useRouter();
  const [index, setIndex] = useRecoilState(indexState);
  const [type, setType] = useRecoilState(typeState);

  const updateStates = () => {
    setIndex(index + 1);
    setType(type + `${questions[index - 1].answers[0].label}`);
  };

  useEffect(() => {
    if (index === 10) {
      const timer = setTimeout(() => {
        router.push("/result");
      }, 3000);

      return () => {
        clearTimeout(timer);
        setIndex(1);
      };
    }
  }, [index]);

  return (
    <>
      {index < 10 ? (
        <>
          <Flex height="">
            <QuestionCount index={index} />
            <Space margin="19px 0px 0px 0px" />
            <Image src="question-deco.svg" alt="question decoration" width={349} height={36} />
            <Space margin="19px 0px 0px 0px" />
            <QuestionText text={questions[index - 1].question} />
            <Space margin="19px 0px 0px 0px" />
            <Image src={`question-${index}.svg`} alt="question illustration" width={302} height={317} />
            <OptionButton top onClick={() => updateStates()}>
              <Text text={questions[index - 1].answers[0].answer} size={14} spacing={-0.3} />
            </OptionButton>
            <OptionButton bottom onClick={() => updateStates()}>
              <Text text={questions[index - 1].answers[1].answer} size={14} spacing={-0.3} />
            </OptionButton>
          </Flex>
        </>
      ) : (
        <>
          <StyledDiv>
            <Background />
            <InnerElement>
              <Flex height="">
                <Space margin="19px 0px 0px 0px" />
                <Image src="question-deco.svg" alt="question decoration" width={349} height={36} />
                <Space margin="19px 0px 0px 0px" />
                <QuestionText text={`문을 여니 앞도 안 보일 정도의\n밝은 빛이 쏟아진다..!`} />
              </Flex>
            </InnerElement>
          </StyledDiv>
        </>
      )}
    </>
  );
};

const fadeOutAnimation = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
`;

const StyledDiv = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const Background = styled.div`
  background: url("/final.svg") no-repeat center;
  animation: ${fadeOutAnimation} 3s forwards;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const InnerElement = styled.div`
  position: relative;
  z-index: 1;
`;
