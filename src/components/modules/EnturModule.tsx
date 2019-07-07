import ApolloClient, { gql } from "apollo-boost";
import React, { FC } from "react";
import { ApolloProvider, useQuery } from "react-apollo-hooks";
import Card from "../Card";

const client = new ApolloClient({
  uri: "https://api.entur.io/journey-planner/v2/graphql"
});

const DEPARTURES_QUERY = gql`
  query($id: String!) {
    stopPlace(id: $id) {
      id
      name
      estimatedCalls(numberOfDepartures: 500) {
        expectedDepartureTime

        destinationDisplay {
          frontText
        }

        serviceJourney {
          line {
            publicCode
          }

          journeyPattern {
            line {
              id
              publicCode
              name
              transportMode
            }
          }
        }
      }
    }
  }
`;

const Departures: FC = () => {
  const { data } = useQuery(DEPARTURES_QUERY, {
    suspend: true,
    variables: {
      id: "NSR:StopPlace:58366"
    }
  });

  return (
    <>
      <h2>{data.stopPlace.name}</h2>
      <ul>
        {data.stopPlace.estimatedCalls.map((estimatedCall: any) => {
          const destinationDisplay = estimatedCall.destinationDisplay;
          const line = estimatedCall.serviceJourney.journeyPattern.line;

          return (
            <li key={`${line.id}-${destinationDisplay.frontText}`}>
              {line.publicCode} {destinationDisplay.frontText}
            </li>
          );
        })}
      </ul>
    </>
  );
};

const EnturModule: FC = () => (
  <ApolloProvider client={client}>
    <Card>
      <h1>Entur</h1>
      <Departures />
    </Card>
  </ApolloProvider>
);

export default EnturModule;
