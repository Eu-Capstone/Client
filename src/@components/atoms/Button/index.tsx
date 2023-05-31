import { HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";
import { Text } from "../Text";

import { FontWeight } from "../Text";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  text?: string;
  textColor?: string;
  textSize?: number;
  border?: string;
  background?: string;
  borderRadius?: string;
  shadow?: string;
  padding?: string;
  cursor?: string;
  width?: string;
  height?: string;
  align?: string;
  weight?: FontWeight;
  pointer?: string;
}

export const Button = ({
  children,
  textSize = 16,
  textColor = "White",
  text,
  border,
  background = "white",
  borderRadius = "16px",
  shadow,
  padding = "1em",
  cursor = "auto",
  width,
  height,
  weight,
  align = "center",
  pointer = "auto",
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton
      cursor={cursor}
      border={border}
      background={background}
      borderRadius={borderRadius}
      shadow={shadow}
      padding={padding}
      width={width}
      height={height}
      align={align}
      pointer={pointer}
      {...rest}
    >
      {text ? <Text text={text} size={textSize} color={textColor} cursor={cursor} weight={weight} /> : <></>}
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{
  textColor?: string;
  textSize?: number;
  border?: string;
  background?: string;
  borderRadius?: string;
  shadow?: string;
  padding?: string;
  width?: string;
  height?: string;
  cursor?: string;
  align?: string;
  pointer?: string;
}>`
  border: ${({ border }) => border};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  color: ${({ textColor }) => textColor};
  font-size: ${({ textSize }) => textSize};
  background: ${({ background }) => background};
  border-radius: ${({ borderRadius }) => borderRadius};
  box-shadow: ${({ shadow }) => shadow};
  padding: ${({ padding }) => padding};
  cursor: ${({ cursor }) => cursor};
  text-align: ${({ align }) => align};
  pointer-events: ${({ pointer }) => pointer};
`;
