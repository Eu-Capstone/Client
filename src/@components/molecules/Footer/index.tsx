import Image from "next/image";
import { Flex, Space, Text } from "~/@components/atoms";

export const Footer = () => {
  return (
    <>
      <Flex direction="row" justify="space-between" align="flex-end" height="">
        <Image src="/corner-bottom-left.svg" width={129} height={129} alt="corner decoration" />
        <Flex height="auto">
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", transform: "translateX(-50%) translateY(-50%)", bottom: "5px" }}>
              <Text text={`Copyright(c) 2003 by 아이넷(I-net) `} />
            </div>
          </div>
          <Space margin="20px 0px 0px 0px" />
        </Flex>
        <Image src="/corner-bottom-right.svg" width={129} height={129} alt="corner decoration" />
      </Flex>
    </>
  );
};
