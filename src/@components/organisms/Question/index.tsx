import Image from "next/image";
import { Flex, Space, Text } from "~/@components/atoms";
import { OptionButton, QuestionCount } from "~/@components/molecules";
import { questions } from "~/@utils/data";

export const Question = ({ index }: { index: number }) => {
  var ans1 = questions[index].answers[0].answer;
  var ans2 = questions[index].answers[1].answer;
  ans1.replace(/\n/g, "<br/>");
  ans2.replace(/\n/g, "<br/>");

  return (
    <Flex>
      <QuestionCount index={index} />
      <Space margin="19px 0px 0px 0px" />
      <Image src="question-deco.svg" alt="question decoration" width={349} height={36} />
      <Space margin="19px 0px 0px 0px" />
      <Image src={`question-${index}.svg`} alt="question illustration" width={302} height={317} />
      <OptionButton top>
        <Text text={ans1} />
      </OptionButton>
      <OptionButton bottom>
        <Text text={ans2} />
      </OptionButton>
    </Flex>
  );
};
