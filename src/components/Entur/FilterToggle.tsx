import React, { FC } from "react";
import styled from "styled-components";
import Filters from "./Filters";

const Container = styled.div`
  display: flex;
  border-radius: 0.5rem;
  background: ${props => props.theme.filterToggle.background};
  overflow: hidden;
`;

const Element = styled.div<{ active: boolean }>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props =>
    props.active ? props.theme.filterToggle.backgroundActive : "transparent"};
  padding: 0.25rem;
`;

const FilterToggle: FC<{
  values: Filters;
  onChange: (values: Filters) => void;
}> = ({ values, onChange }) => {
  return (
    <Container>
      {Object.entries(values)
        .sort(([, { id: a }], [, { id: b }]) => a - b)
        .map(([key, { id, active }]) => {
          const handleClick = () => {
            onChange({
              ...values,
              [key]: {
                id,
                active: !active
              }
            });
          };

          return (
            <Element key={id} active={active} onClick={handleClick}>
              {key}
            </Element>
          );
        })}
    </Container>
  );
};

export default FilterToggle;
