import { ReactEventHandler, ReactNode } from "react";
import styled from "styled-components";
import { Flex, Space } from "~/@components/atoms";

export const OptionButton = ({
  top,
  bottom,
  children,
  onClick,
}: {
  top?: boolean;
  bottom?: boolean;
  children: ReactNode;
  onClick: ReactEventHandler;
}) => {
  return (
    <>
      {top && (
        <>
          <ButtonTop onClick={onClick}>
            <Flex direction="column" justify="flex-end" align="center" height="87%">
              {children}
            </Flex>
          </ButtonTop>
          <Space margin="19px 0px 0px 0px" />
        </>
      )}
      {bottom && (
        <>
          <ButtonBottom onClick={onClick}>
            <Flex direction="column" justify="flex-start" align="center">
              <Space margin="12px 0px 0px 0px" />
              {children}
            </Flex>
          </ButtonBottom>
          <Space margin="19px 0px 0px 0px" />
        </>
      )}
    </>
  );
};

const ButtonTop = styled.div`
  width: 320px;
  height: 90px;
  background: url("button-ans-top.svg") no-repeat center/101%;
`;

const ButtonBottom = styled.div`
  width: 320px;
  height: 90px;
  background: url("button-ans-bottom.svg") no-repeat center/101%;
`;
