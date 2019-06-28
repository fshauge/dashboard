import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  flex-direction: column;
  justify-items: center;
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
};

export default Dashboard;
