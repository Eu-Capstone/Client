import Image from "next/image";
import styled from "styled-components";

export const OptionButton = ({ top, bottom }: { top?: boolean; bottom?: boolean }) => {
  return (
    <>
      {top && (
        <>
          <ButtonTop>
            <Image src="/button-ans-top.svg" alt="option button top" width={358} height={101}></Image>
          </ButtonTop>
        </>
      )}
      {bottom && (
        <>
          <ButtonBottom>
            <Image src="/button-ans-bottom.svg" alt="option button top" width={358} height={101} />
          </ButtonBottom>
        </>
      )}
    </>
  );
};

const ButtonTop = styled.div``;

const ButtonBottom = styled.div``;
