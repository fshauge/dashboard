import ApolloClient from "apollo-boost";
import React, { FC, useState } from "react";
import { ApolloProvider } from "react-apollo-hooks";
import Card from "../Card";
import Departures from "./Departures";
import Filters from "./Filters";
import FilterToggle from "./FilterToggle";

const client = new ApolloClient({
  uri: "https://api.entur.io/journey-planner/v2/graphql"
});

const Entur: FC = () => {
  const [filters, setFilters] = useState<Filters>({
    "🚌": { id: 0, active: true },
    "🚋": { id: 1, active: true },
    "🚇": { id: 2, active: true }
  });

  return (
    <ApolloProvider client={client}>
      <Card>
        <FilterToggle values={filters} onChange={setFilters} />
        <Departures filters={filters} />
      </Card>
    </ApolloProvider>
  );
};

export default Entur;
