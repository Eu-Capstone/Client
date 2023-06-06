import Image from "next/image";
import { Flex } from "~/@components/atoms";
import { ResultTitle } from "~/@components/molecules";
import { types } from "~/@utils/data";
export const ResultHeader = ({ type }: { type: keyof typeof types }) => {
  const god = types[type].id;

  return (
    <>
      <Flex height="">
        <ResultTitle name={`${types[type]?.name}`} subtitle={types[type]?.subtitle} />
        {/* <Image src={`${types[type]?.id}.svg`} alt="god image" width={314} height={355} /> */}
        <Image src={`/result-${god}.jpg`} alt="god image" width={300} height={337.5} />
      </Flex>
    </>
  );
};
