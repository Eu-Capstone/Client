import Image from "next/image";
import styled from "styled-components";
import { Flex, Space, Text } from "~/@components/atoms";
import { types } from "~/@utils";

export const ResultText = ({ type }: { type: keyof typeof types }) => {
  return (
    <>
      <Space margin="20px 0px 0px 0px" />
      <MainGradient>
        <Flex justify="center" align="center">
          <Text text={`“${types[type]?.main}”`} weight={700} size={14} spacing={-0.3} />
        </Flex>
      </MainGradient>
      <Space margin="20px 0px 0px 0px" />
      <InnerContainer>
        <Text text={`${types[type]?.fact}`} size={14} height={180} spacing={-0.3} align="start" limit />
        <Space margin="40px 0px 0px 0px" />
        {types[type]?.desc.map((el) => (
          <>
            <Flex key={el.length} direction="row" justify="flex-start" align="flex-start" height="" gap={8}>
              <Image src="bullet.svg" alt="bullet point" width={18} height={20} />
              <Text text={el} size={14} spacing={-0.3} height={180} align="start" limit />
            </Flex>
            <Space margin="5px 0px 0px 0px" />
          </>
        ))}
      </InnerContainer>
    </>
  );
};

const MainGradient = styled.div`
  height: 75px;
  background: linear-gradient(
    180deg,
    rgba(217, 217, 217, 0) 0%,
    rgba(217, 217, 217, 0.07) 15.1%,
    rgba(217, 217, 217, 0.76) 51.04%,
    rgba(217, 217, 217, 0.19) 88.02%,
    rgba(217, 217, 217, 0) 100%
  );
  border-radius: 7px;
`;

const InnerContainer = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  word-break: keep-all;
  word-wrap: break-word;
`;
