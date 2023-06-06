import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Flex, Space, Text } from "~/@components/atoms";
import StatCard from "~/@components/molecules/StatCard";

const Stats = () => {
  const [mbtiData, setMBTIData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const getResult = async () => {
    return await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/mbti/result`);
  };

  useEffect(() => {
    getResult()
      .then((res) => {
        const { mbtis, userCount } = res.data;
        setMBTIData(mbtis);
        setTotalCount(userCount);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Flex justify="start">
      <Image src={"/stats_downFrame.svg"} width={392} height={100} alt="top" />
      <Text color="black" size={24} text={"유형 순위"} />
      <StatContainer>
        <div style={{ position: "relative", width: "80%", height: "100%" }}>
          {mbtiData ? mbtiData.map((el, idx) => <StatCard idx={idx + 1} mbti={el} key={idx} total={totalCount} />) : ""}
        </div>
      </StatContainer>
      <Image src={"/stats_upFrame.svg"} width={392} height={100} alt="bottom" />
      <Space margin="30px 0px 0px 0px" />
      <Link
        href="/result"
        style={{
          textDecoration: "none",
          width: "100%",
        }}
      >
        <ButtonCenter>
          <Flex>
            <Text text="결과 화면으로 돌아가기" size={16} spacing={-0.3} cursor="pointer" />
            <Space margin="13px 0px 0px 0px" />
          </Flex>
        </ButtonCenter>
      </Link>
    </Flex>
  );
};

export default Stats;

const ButtonCenter = styled.div`
  width: 100%;
  height: 66px;
  cursor: pointer;
  background: url("/button-final-center.svg") no-repeat center;
`;

const StatContainer = styled.div`
  width: 80%;
  height: 400px;
  margin-left: 50px;
  overflow-y: scroll;
  overflow-x: hidden;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
