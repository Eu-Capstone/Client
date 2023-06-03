import styled from "styled-components";
import { Text } from "~/@components/atoms";

export const ResultTag = (text: string) => {
  return (
    <>
      <TagContainer>
        <Text text={`#${text}`} size={14} spacing={-0.3} />
      </TagContainer>
    </>
  );
};

const TagContainer = styled.div`
  background: linear-gradient(
    180deg,
    #ffffff -20.69%,
    rgba(170, 170, 170, 0.457719) 74.69%,
    rgba(217, 217, 217, 0) 120.69%
  );
  border: 0.5px solid #ffffff;
  filter: drop-shadow(0px 2px 15px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
  padding: 8px;
`;
