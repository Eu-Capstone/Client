import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { Flex, Space } from "~/@components/atoms";
import { ActionButton, Footer, Header, TestTakerCount } from "~/@components/molecules";

export const Main = () => {
  const [count, setCount] = useState(0);

  axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/api/mbti/count`)
    .then((response: any) => {
      if (response.status === 200) {
        setCount(response.data.userCount);
      }
    })
    .catch((error: any) => {
      console.log(error.request.response);
    });

  return (
    <>
      <Background>
        <Flex direction="column" justify="space-between">
          <Header />
          <Space margin="100px 0px 0px 0px" />
          <ImageContainer>
            <Image src="/logo.png" alt="main logo" width={277} height={277} />
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
  height: 100vh;
  position: relative;
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 60px;
`;
