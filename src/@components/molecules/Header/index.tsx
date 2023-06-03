import Image from "next/image";
import styled from "styled-components";
import { Flex } from "~/@components/atoms";

export const Header = () => {
  return (
    <HeaderDiv>
      <Flex direction="row" justify="space-between" height="" width="100%">
        <Image src="/corner-top-left.svg" width={104} height={145} alt="corner decoration" />
        <Image src="/corner-top-right.svg" width={104} height={145} alt="corner decoration" />
      </Flex>
    </HeaderDiv>
  );
};

const HeaderDiv = styled.div`
  position: absolute;
  top: 0px;
  margin: 0%;
  width: 100%;
`;
