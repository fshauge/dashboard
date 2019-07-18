import ApolloClient from "apollo-boost";
import React, { FC } from "react";
import { ApolloProvider } from "react-apollo-hooks";
import Card from "../Card";
import Departures from "./Departures";

const client = new ApolloClient({
  uri: "https://api.entur.io/journey-planner/v2/graphql"
});

const Entur: FC = () => (
  <ApolloProvider client={client}>
    <Card>
      <Departures transport="metro" />
    </Card>
  </ApolloProvider>
);

export default Entur;
