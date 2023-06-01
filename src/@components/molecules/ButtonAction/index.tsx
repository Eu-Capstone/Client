import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Flex, Space, Text } from "~/@components/atoms";

export const ActionButton = ({
  top,
  center,
  bottom,
  full,
}: {
  top?: boolean;
  center?: boolean;
  bottom?: boolean;
  full?: boolean;
}) => {
  return (
    <>
      {top && (
        <>
          <Image src="/button-final-top.svg" alt="option button top" width={358} height={101}></Image>
        </>
      )}
      {center && <></>}
      {bottom && <></>}
      {full && (
        <>
          <Link
            href="/test"
            style={{
              textDecoration: "none",
            }}
          >
            <ButtonFull>
              <Flex>
                <Space margin="3px 0px 0px 0px" />
                <Text text="테스트 하러가기" size={16} spacing={-0.3} cursor="pointer" />
              </Flex>
            </ButtonFull>
          </Link>
        </>
      )}
    </>
  );
};

const ButtonBottom = styled.div``;

const ButtonFull = styled.div`
  width: 358px;
  height: 115px;
  cursor: pointer;
  background: url("/button-start.svg") no-repeat center;
`;
