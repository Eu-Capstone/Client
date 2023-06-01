import { Text } from "~/@components/atoms";

export const QuestionCount = ({ index }: { index: number }) => {
  return (
    <span>
      <Text text={index} size={16} spacing={-0.3} />
      <Text text=" / 9" size={16} spacing={-0.3} />
    </span>
  );
};
