import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Grid = styled.main`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: min-content;
  flex-direction: column;
  justify-items: center;
  gap: 2rem;
  padding: 2rem;
`;

const Dashboard = () => (
  <Grid>
    <Card>
      <h2>Card</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
        enim pariatur accusamus veniam exercitationem esse voluptas quisquam
        nisi, rem fugit, numquam, velit dicta! Soluta impedit ex tempora nemo
        maiores amet?
      </p>
    </Card>
    <Card>
      <h2>Card</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
        enim pariatur accusamus veniam exercitationem esse voluptas quisquam
        nisi, rem fugit, numquam, velit dicta! Soluta impedit ex tempora nemo
        maiores amet?
      </p>
    </Card>
    <Card>
      <h2>Card</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
        enim pariatur accusamus veniam exercitationem esse voluptas quisquam
        nisi, rem fugit, numquam, velit dicta! Soluta impedit ex tempora nemo
        maiores amet?
      </p>
    </Card>
  </Grid>
);

export default Dashboard;
