import styled from "styled-components";
import { Flex, Space } from "~/@components/atoms";
import { RelationType } from "~/@components/molecules";
import { types } from "~/@utils";

export const ResultRelation = ({ type }: { type: keyof typeof types }) => {
  return (
    <>
      <RelationDiv>
        <Space margin="17px 0px 0px 0px" />
        <Flex height="" direction="row" justify="flex-start" gap={17}>
          <RelationType type={type} relation="good" />
          <RelationType type={type} relation="bad" />
        </Flex>
      </RelationDiv>
    </>
  );
};

const RelationDiv = styled.div`
  height: 290px;
  background: linear-gradient(
    180deg,
    rgba(217, 217, 217, 0) 0%,
    rgba(217, 217, 217, 0.26) 23.96%,
    rgba(217, 217, 217, 0.87) 51.04%,
    rgba(217, 217, 217, 0.45) 77.6%,
    rgba(217, 217, 217, 0) 100%
  );
  border-radius: 7px;
`;
