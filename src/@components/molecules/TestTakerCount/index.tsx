import { Text } from "~/@components/atoms";

export const TestTakerCount = ({ count }: { count: number }) => {
  return (
    <>
      <Text text={`현재 ${count}명 테스트 완료!`} size={16} spacing={-0.3} />
    </>
  );
};
