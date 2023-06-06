import { Text } from "~/@components/atoms";

export const TestTakerCount = ({ count }: { count: number }) => {
  return (
    <>
      <Text text={`지금까지 ${count}명이 신이 되었습니다`} size={16} spacing={-0.3} />
    </>
  );
};
