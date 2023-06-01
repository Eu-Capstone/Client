import styled from "styled-components";
import { Flex, Space } from "~/@components/atoms";

export const StatusBar = ({ index }: { index: number }) => {
  return (
    <>
      <StyledStateBar>
        <Flex width="" justify="flex-start" align="center" direction="row">
          <Space margin="1px 2px 0px 0px" />
          <StyledState index={index} />
        </Flex>
      </StyledStateBar>
    </>
  );
};

const StyledStateBar = styled.div`
  width: 80%;
  height: 16px;
  border: 2px solid rgba(174, 174, 174, 0.8);
  border-radius: 10px;
  background-color: white;
`;

const StyledState = styled.div<{ index: number }>`
  border-radius: 10px;
  width: ${({ index }) => index / 9}%;
  height: 9px;
  background-color: black;
  transition: 0.3s;
`;
