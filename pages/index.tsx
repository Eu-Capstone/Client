import styled from "styled-components";
import { Main } from "~/@components/organisms";

const Home = () => {
  return (
    <OuterDiv>
      <Main />
    </OuterDiv>
  );
};

export default Home;

export const OuterDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
