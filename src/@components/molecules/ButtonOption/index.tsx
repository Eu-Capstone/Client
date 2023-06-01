import { ReactNode } from "react";
import styled from "styled-components";

export const OptionButton = ({ top, bottom, children }: { top?: boolean; bottom?: boolean; children: ReactNode }) => {
  return (
    <>
      {top && (
        <>
          <ButtonTop>{children}</ButtonTop>
        </>
      )}
      {bottom && (
        <>
          <ButtonBottom>{children}</ButtonBottom>
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
