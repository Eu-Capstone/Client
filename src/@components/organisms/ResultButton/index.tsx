import { Flex, Space } from "~/@components/atoms";
import { ActionButton } from "~/@components/molecules";

export const ResultButton = () => {
  return (
    <>
      <Flex direction="column" height="" justify="flex-start">
        <ActionButton top />
        <Space margin="12px 0px 0px 0px" />
        <ActionButton center />
        <ActionButton bottom />
      </Flex>
    </>
  );
};
