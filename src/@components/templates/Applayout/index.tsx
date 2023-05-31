import styled from "styled-components";
import { LayoutProp } from "~/@interfaces";

export const Applayout = ({ children }: LayoutProp) => {
  return <ApplayoutContainer>{children}</ApplayoutContainer>;
};

const ApplayoutContainer = styled.div`
  margin: 0 auto;
  max-width: 390px;
  min-width: 390px;
  height: 100vh;
`;
