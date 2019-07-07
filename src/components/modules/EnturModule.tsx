import ApolloClient, { gql } from "apollo-boost";
import moment from "moment";
import React, { FC } from "react";
import { ApolloProvider, useQuery } from "react-apollo-hooks";
import Card from "../Card";

const client = new ApolloClient({
  uri: "https://api.entur.io/journey-planner/v2/graphql"
});

const DEPARTURES_QUERY = gql`
  query($id: String!, $timeRange: Int) {
    stopPlace(id: $id) {
      id
      name

      estimatedCalls(timeRange: $timeRange, numberOfDepartures: 500) {
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
      id: "NSR:StopPlace:58366",
      timeRange: 1 * 60 * 60
    }
  });

  return (
    <>
      <h2>{data.stopPlace.name}</h2>
      <ul>
        {data.stopPlace.estimatedCalls.map(
          (estimatedCall: any, index: number) => {
            const destinationDisplay = estimatedCall.destinationDisplay;
            const line = estimatedCall.serviceJourney.journeyPattern.line;
            const relative = moment(estimatedCall.expectedDepartureTime)
              .startOf("s")
              .fromNow();

            return (
              <li key={index}>
                {line.publicCode} {destinationDisplay.frontText} - {relative}
              </li>
            );
          }
        )}
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
