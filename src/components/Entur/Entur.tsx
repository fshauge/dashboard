import ApolloClient from "apollo-boost";
import React, { FC, useState } from "react";
import { ApolloProvider } from "react-apollo-hooks";
import Card from "../Card";
import Departures from "./Departures";
import Filters from "./Filters";
import FiltersToggle from "./TransportsToggle";

const client = new ApolloClient({
  uri: "https://api.entur.io/journey-planner/v2/graphql"
});

const Entur: FC = () => {
  const [filters, setFilters] = useState<Filters>({
    "🚌": true,
    "🚋": true,
    "🚇": true
  });

  return (
    <ApolloProvider client={client}>
      <Card>
        <FiltersToggle values={filters} onChange={setFilters} />
        <Departures filters={filters} />
      </Card>
    </ApolloProvider>
  );
};

export default Entur;
