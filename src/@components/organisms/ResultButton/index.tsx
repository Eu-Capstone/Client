import { Flex, Space } from "~/@components/atoms";
import { ActionButton } from "~/@components/molecules";
import { types } from "~/@utils";

export const ResultButton = ({ type }: { type: keyof typeof types }) => {
  return (
    <>
      <Flex direction="column" height="" justify="flex-start">
        <ActionButton type={type} top />
        <Space margin="12px 0px 0px 0px" />
        <ActionButton center />
        <ActionButton bottom />
      </Flex>
    </>
  );
};
