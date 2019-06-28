import React, { FC } from "react";
import styled from "styled-components";

const Body = styled.div`
  padding: 1rem;
  border-radius: 0.75rem;
  background: ${props => props.theme.box.background};
  box-shadow: ${props => props.theme.box.shadow};
`;

const Card: FC = ({ children }) => <Body>{children}</Body>;

export default Card;
