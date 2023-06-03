import Image from "next/image";
import { Flex, Space, Text } from "~/@components/atoms";

export const Footer = () => {
  return (
    <>
      <Flex direction="row" justify="space-between" align="flex-end" height="">
        <Image src="/corner-bottom-left.svg" width={129} height={129} alt="corner decoration" />
        <Flex height="">
          <Text text={`제작: 아이넷 `} />
          <Space margin="20px 0px 0px 0px" />
        </Flex>
        <Image src="/corner-bottom-right.svg" width={129} height={129} alt="corner decoration" />
      </Flex>
    </>
  );
};
