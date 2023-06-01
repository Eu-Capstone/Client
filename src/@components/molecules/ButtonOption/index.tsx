import { ReactEventHandler, ReactNode } from "react";
import styled from "styled-components";
import { Space } from "~/@components/atoms";

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
          <ButtonTop onClick={onClick}>{children}</ButtonTop>
          <Space margin="19px 0px 0px 0px" />
        </>
      )}
      {bottom && (
        <>
          <ButtonBottom onClick={onClick}>{children}</ButtonBottom>
          <Space margin="19px 0px 0px 0px" />
        </>
      )}
    </>
  );
};

const ButtonTop = styled.div`
  width: 358px;
  height: 101px;
  background: url("button-ans-top.svg") no-repeat center;
`;

const ButtonBottom = styled.div`
  width: 358px;
  height: 101px;
  background: url("button-ans-bottom.svg") no-repeat center;
`;
