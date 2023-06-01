import { Text } from "~/@components/atoms";

export const QuestionText = ({ text }: { text: string }) => {
  return (
    <>
      <Text text={text} size={16} spacing={-0.3} />
    </>
  );
};
