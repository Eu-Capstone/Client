import Image from "next/image";
import { Flex, Space, Text } from "~/@components/atoms";
import { types } from "~/@utils";
export const RelationType = ({ type, relation }: { type: keyof typeof types; relation: keyof typeof types.EFJ }) => {
  const relationship: keyof typeof types = types[type]?.[relation] as keyof typeof types;
  const capitalizedString = relation.charAt(0).toUpperCase() + relation.slice(1);

  return (
    <>
      <Flex direction="column" justify="flex-start">
        <Text text={`${capitalizedString} with`} weight={700} size={14} spacing={-0.3} />
        <Space margin="11px 0px 0px 0px" />
        <Image src={`/result-${types[relationship]?.id}.jpg`} alt={`${relation} god image`} width={144} height={162} />
        <Space margin="11px 0px 0px 0px" />
        <Text text={`${types[relationship]?.subtitle}`} size={14} color="#6B6B6B" spacing={-0.3} />
        <Text text={`${types[relationship]?.name}`} size={14} weight={700} spacing={-0.3} />
      </Flex>
    </>
  );
};
