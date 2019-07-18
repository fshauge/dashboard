import ApolloClient from "apollo-boost";
import React, { ChangeEvent, FC, useState } from "react";
import { ApolloProvider } from "react-apollo-hooks";
import Card from "../Card";
import Departures from "./Departures";

const client = new ApolloClient({
  uri: "https://api.entur.io/journey-planner/v2/graphql"
});

const Entur: FC = () => {
  const [transport, setTransport] = useState<string>("");

  const handleTransportChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setTransport(event.target.value);
  };

  return (
    <ApolloProvider client={client}>
      <Card>
        <select onChange={handleTransportChange}>
          <option value="">All</option>
          <option value="localBus">Bus</option>
          <option value="localTram">Tram</option>
          <option value="metro">Metro</option>
        </select>
        <Departures transport={transport} />
      </Card>
    </ApolloProvider>
  );
};

export default Entur;
