import React, { FC } from "react";
import styled from "styled-components";

const Container = styled.div<{ show: boolean }>`
  padding-bottom: env(safe-area-inset-bottom);
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  transition: transform 0.35s ease-in-out;
  background: ${props => props.theme.box.background};
  box-shadow: ${props => props.theme.box.shadow};
  transform: ${props => (props.show ? "translateY(0)" : "translateY(100%)")};
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.75rem;
  cursor: pointer;
`;

const Title = styled.h4`
  margin: 0;
  line-height: 1.5rem;
`;

const Description = styled.p`
  margin: 0;
  line-height: 1.5rem;
  color: ${props => props.theme.text.secondary};
`;

const Toast: FC<{ show: boolean; title: string; description: string }> = ({
  show,
  title,
  description
}) => {
  return (
    <Container show={show}>
      <Box>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Box>
    </Container>
  );
};

export default Toast;
