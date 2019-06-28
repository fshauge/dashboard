import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Animation = styled.div`
  border: 0.25rem solid transparent;
  border-top: 0.25rem solid ${props => props.theme.text.primary};
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  /* animation: spin 1s linear infinite; */
  animation: spin 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Spinner = () => (
  <Container>
    <Animation />
  </Container>
);
