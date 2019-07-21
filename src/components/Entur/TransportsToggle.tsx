import React, { FC } from "react";
import styled from "styled-components";
import Filters from "./Filters";

const Container = styled.div`
  display: flex;
  border-radius: 0.5rem;
  background: #191919;
  overflow: hidden;
`;

const Element = styled.div<{ active: boolean }>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => (props.active ? "#121212" : "transparent")};
  padding: 0.25rem;
`;

const FiltersToggle: FC<{
  values: Filters;
  onChange: (values: Filters) => void;
}> = ({ values, onChange }) => {
  return (
    <Container>
      {Object.entries(values).map(([key, value]) => {
        const handleClick = () => {
          onChange({
            ...values,
            [key]: !value
          });
        };

        return (
          <Element key={key} active={value} onClick={handleClick}>
            {key}
          </Element>
        );
      })}
    </Container>
  );
};

export default FiltersToggle;
