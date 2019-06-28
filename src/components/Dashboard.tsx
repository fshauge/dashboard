import React from "react";
import styled from "styled-components";
import EnturModule from "./modules/EnturModule";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  flex-direction: column;
  justify-items: stretch;
  padding: 1.5rem;
  gap: 1.5rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1366px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Dashboard = () => {
  return (
    <Grid>
      <EnturModule />
    </Grid>
  );
};

export default Dashboard;
