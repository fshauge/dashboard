import React, { FC } from "react";
import styled from "styled-components";

const Body = styled.div`
  padding: 1rem;
  border-radius: 0.5rem;
  background: #f2f2f2;
  box-shadow: 0 0 1rem hsla(0, 0%, 0%, 5%);
`;

const Card: FC = ({ children }) => <Body>{children}</Body>;

export default Card;
