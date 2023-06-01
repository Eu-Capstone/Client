import Image from "next/image";
import { useRecoilState } from "recoil";
import { Flex, Space, Text } from "~/@components/atoms";
import { OptionButton, QuestionCount, QuestionText } from "~/@components/molecules";
import { questions } from "~/@utils/data";
import { indexState } from "~/@utils/states/index/index";

export const Question = () => {
  const [index, setIndex] = useRecoilState(indexState);

  var ans1 = questions[index - 1].answers[0].answer;
  var ans2 = questions[index - 1].answers[1].answer;

  return (
    <Flex height="">
      <QuestionCount index={index} />
      <Space margin="19px 0px 0px 0px" />
      <Image src="question-deco.svg" alt="question decoration" width={349} height={36} />
      <Space margin="19px 0px 0px 0px" />
      <QuestionText text={questions[index - 1].question} />
      <Space margin="19px 0px 0px 0px" />
      <Image src={`question-${index}.svg`} alt="question illustration" width={302} height={317} />
      <OptionButton top onClick={() => setIndex(index + 1)}>
        <Text text={ans1} size={14} spacing={-0.3} />
      </OptionButton>
      <OptionButton bottom onClick={() => setIndex(index + 1)}>
        <Text text={ans2} size={14} spacing={-0.3} />
      </OptionButton>
    </Flex>
  );
};
