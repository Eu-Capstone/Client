import styled from "styled-components";

interface SpaceProps {
  margin?: string;
  height?: string;
}

export const Space = ({ margin, height }: SpaceProps) => {
  return <SpaceBase margin={margin} height={height} />;
};

const SpaceBase = styled.div<{ margin?: string; height?: string }>`
  margin: ${({ margin }) => margin};
  height: ${({ height }) => height};
`;
