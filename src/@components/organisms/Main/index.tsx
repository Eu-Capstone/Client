import Image from "next/image";
import styled from "styled-components";
import { Flex } from "~/@components/atoms";
import { Footer, Header } from "~/@components/molecules";

export const Main = () => {
  return (
    <>
      <Background>
        <Flex direction="column" justify="space-between">
          <Header />
          <ImageContainer>
            <Image src="/logo.svg" alt="main logo" width={277} height={277} />
          </ImageContainer>
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
