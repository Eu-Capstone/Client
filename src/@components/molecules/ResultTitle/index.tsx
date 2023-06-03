import { Flex, Space, Text } from "~/@components/atoms";

export const ResultTitle = ({ name, subtitle }: { name: string; subtitle: string }) => {
  return (
    <>
      <Flex height="" direction="column" justify="flex-start">
        <Space margin="43px 0px 0px 0px" />
        <Text text="나는" size={16} spacing={-0.3} />
        <Text text={name} size={36} weight={700} spacing={-0.3} />
        <Text text={subtitle} size={16} spacing={-0.3} />
        <Space margin="43px 0px 0px 0px" />
      </Flex>
    </>
  );
};
