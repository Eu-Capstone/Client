import Image from "next/image";
import { Flex } from "~/@components/atoms";

export const Footer = () => {
  return (
    <>
      <Flex direction="row" justify="space-between" height="">
        <Image src="/corner-bottom-left.svg" width={129} height={129} alt="corner decoration" />
        <Image src="/corner-bottom-right.svg" width={129} height={129} alt="corner decoration" />
      </Flex>
    </>
  );
};
