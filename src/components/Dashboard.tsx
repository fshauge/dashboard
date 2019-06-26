import React from "react";
import styled from "styled-components";

const Grid = styled.main`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  justify-items: center;
`;

const Dashboard = () => (
  <Grid>
    <h1>Column</h1>
    <h1>Column</h1>
    <h1>Column</h1>
  </Grid>
);

export default Dashboard;
