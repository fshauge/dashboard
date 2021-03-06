import React, { FC, useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import useScroll from "../hooks/useScroll";
import { clampMap } from "../number";

const Highlight = styled.div<{ opacity: number }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: env(safe-area-inset-top);
  background: black;
  opacity: ${props => props.opacity};
`;

const StatusBarHighlight: FC = () => {
  const {
    statusBarHighlight: { start, end }
  } = useContext(ThemeContext);

  const scroll = useScroll();
  const opacity = clampMap(scroll, 0, 100, start, end);
  return <Highlight opacity={opacity} />;
};

export default StatusBarHighlight;
