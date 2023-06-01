import Image from "next/image";
import styled from "styled-components";
import { Flex, Space } from "~/@components/atoms";
import { ActionButton, Footer, Header, TestTakerCount } from "~/@components/molecules";

export const Main = () => {
  const count = 111111; /* 받아와야 하는 값 */

  return (
    <>
      <Background>
        <Flex direction="column" justify="space-between">
          <Header />
          <ImageContainer>
            <Image src="/logo.svg" alt="main logo" width={277} height={277} />
          </ImageContainer>
          <Space margin="280px 0px 0px 0px" />
          <TestTakerCount count={count} />
          <Space margin="40px 0px 0px 0px" />
          <ActionButton full={true} />
          <Footer />
        </Flex>
      </Background>
    </>
  );
};

const Background = styled.div`
  background: url("/background-yggdrasil.svg") no-repeat 50% 90%/80%;
  width: 100%;
  height: 100%;
  border: 2px solid red;
  position: relative;
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 60px;
`;
