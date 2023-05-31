import Image from "next/image";
import { Flex } from "~/@components/atoms";

export const Header = () => {
  return (
    <>
      <Flex direction="row" justify="space-between" height="">
        <Image src="/corner-top-left.svg" width={104} height={145} alt="corner decoration" />
        <Image src="/corner-top-right.svg" width={104} height={145} alt="corner decoration" />
      </Flex>
    </>
  );
};
