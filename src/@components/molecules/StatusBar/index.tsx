import styled from "styled-components";

export const StatusBar = ({ stateWidth }: { stateWidth: string }) => {
  return (
    <StyledDiv>
      <CharacterImg src="question.gif" location={stateWidth} />
      <StyledStateBar>
        <StyledState stateWidth={stateWidth} />
      </StyledStateBar>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  width: 80%;
  margin-bottom: 50px;
`;

const StyledStateBar = styled.div`
  height: 12px;
  border-radius: 10px;
  background-color: white;
`;

const StyledState = styled.div<{ stateWidth: string }>`
  border-radius: 10px;
  width: ${({ stateWidth }) => stateWidth};
  height: 100%;
  background-color: red;
  transition: 0.3s;
`;

const CharacterImg = styled.img<{ location: string }>`
  width: 10%;
  object-fit: contain;
  margin-left: ${({ location }) => `calc(${location} - 5%)`};
`;
