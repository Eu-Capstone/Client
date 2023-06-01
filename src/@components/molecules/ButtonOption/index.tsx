import { ReactEventHandler, ReactNode } from "react";
import styled from "styled-components";

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
        </>
      )}
      {bottom && (
        <>
          <ButtonBottom onClick={onClick}>{children}</ButtonBottom>
        </>
      )}
    </>
  );
};

const ButtonTop = styled.div`
  background: url("button-ans-top.svg") no-repeat center;
`;

const ButtonBottom = styled.div`
  background: url("button-ans-bottom.svg") no-repeat center;
`;
