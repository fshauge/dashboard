import React, { FC } from "react";
import styled, { StyledProps, withTheme } from "styled-components";
import useScroll from "../hooks/useScroll";
import { clampMap } from "../number";

const Highlight = styled.div<{ opacity: number }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: env(safe-area-inset-top);
  background: hsla(0, 0%, 0%, ${props => props.opacity});
`;

const StatusBarHighlight: FC<StyledProps<{}>> = ({
  theme: {
    statusBarHighlight: { start, end }
  }
}) => {
  const scroll = useScroll();
  const opacity = clampMap(scroll, 0, 100, start, end);
  return <Highlight opacity={opacity} />;
};

export default withTheme(StatusBarHighlight);
