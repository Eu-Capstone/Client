import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";

import { Flex, Space, Text } from "~/@components/atoms";
import { types } from "~/@utils";

declare global {
  interface Window {
    Kakao: any;
  }
}

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
  const [type, setType] = useState<keyof typeof types>("IFP");
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("type") !== null) {
        const value: keyof typeof types = localStorage.getItem("type") as keyof typeof types;
        setType(value);
      }
    }

    if (window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API);
      }
    }
  }, []);

  const share = () => {
    if (type) {
      window.Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: `당신은 ${types[type].name}, ${types[type].subtitle}`,
          description: types[type].main,
          imageUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/result-${types[type].id}.svg?image_width=300&image_height=400`,
          link: {
            mobileWebUrl: process.env.NEXT_PUBLIC_BASE_URL,
            webUrl: process.env.NEXT_PUBLIC_BASE_URL,
          },
        },
        buttons: [
          {
            title: "당신의 북유럽 신은?",
            link: {
              mobileWebUrl: process.env.NEXT_PUBLIC_BASE_URL,
              webUrl: process.env.NEXT_PUBLIC_BASE_URL,
            },
          },
        ],
      });
    }
  };
  return (
    <>
      {top && (
        <>
          <ButtonTop onClick={() => share()}>
            <Flex>
              <Space margin="12px 0px 0px 0px" />
              <Text text="결과 공유하기" size={16} spacing={-0.3} cursor="pointer" />
            </Flex>
          </ButtonTop>
        </>
      )}
      {center && (
        <>
          <Link
            href="/"
            style={{
              textDecoration: "none",
            }}
          >
            <ButtonCenter>
              <Flex>
                <Text text="테스트 다시하기" size={16} spacing={-0.3} cursor="pointer" />
                <Space margin="13px 0px 0px 0px" />
              </Flex>
            </ButtonCenter>
          </Link>
        </>
      )}
      {bottom && (
        <>
          <Link
            href="/stats"
            style={{
              textDecoration: "none",
            }}
          >
            <ButtonBottom>
              <Flex>
                <Text text="전체 결과 보기" size={16} spacing={-0.3} cursor="pointer" />
                <Space margin="13px 0px 0px 0px" />
              </Flex>
            </ButtonBottom>
          </Link>
        </>
      )}

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

const ButtonTop = styled.div`
  width: 313px;
  height: 79px;
  cursor: pointer;
  background: url("/button-final-top.svg") no-repeat center;
`;

const ButtonCenter = styled.div`
  width: 313px;
  height: 66px;
  cursor: pointer;
  background: url("/button-final-center.svg") no-repeat center;
`;

const ButtonBottom = styled.div`
  width: 313px;
  height: 79px;
  cursor: pointer;
  background: url("/button-final-bottom.svg") no-repeat center;
`;

const ButtonFull = styled.div`
  width: 358px;
  height: 115px;
  cursor: pointer;
  background: url("/button-start.svg") no-repeat center;
`;
