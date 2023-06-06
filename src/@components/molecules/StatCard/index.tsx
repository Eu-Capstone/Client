import Image from "next/image";
import React from "react";
import { Flex, Text } from "~/@components/atoms";
import palette from "~/@styles/colors";
import { types } from "~/@utils";

const StatCard = ({ idx, mbti, total }: { idx: any; mbti: any; total: any }) => {
  const type: keyof typeof types = mbti.mbti;
  const content = types[type];
  const count = mbti.count;
  const totalCount = total.userCount;

  const rate = Math.round((count / totalCount) * 100);
  return (
    <Flex direction="row" justify="center" align="center" height="auto" gap={20}>
      <Text text={idx} size={28} />
      <Image src={`/result-${content.id}.png`} width={100} height={150} alt="result" />
      <Flex align="start" justify="start" gap={4}>
        <Text text={content.id} size={18} weight={600} />
        <Text text={content.subtitle} size={18} weight={400} />
        <Text text={`${rate}%`} color={palette.gray} size={16} weight={600} />
      </Flex>
    </Flex>
  );
};

export default StatCard;
