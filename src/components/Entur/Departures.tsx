import { gql } from "apollo-boost";
import React, { FC } from "react";
import { useQuery } from "react-apollo-hooks";
import Departure from "./Departure";

export const DEPARTURES_QUERY = gql`
  query($id: String!, $timeRange: Int!, $numberOfDepartures: Int!) {
    stopPlace(id: $id) {
      id
      name

      estimatedCalls(
        timeRange: $timeRange
        numberOfDepartures: $numberOfDepartures
      ) {
        expectedDepartureTime

        destinationDisplay {
          frontText
        }

        serviceJourney {
          transportSubmode

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

const Departures: FC<{ transport: string }> = ({ transport }) => {
  const {
    data: {
      stopPlace: { name, estimatedCalls }
    }
  } = useQuery<any>(DEPARTURES_QUERY, {
    suspend: true,
    variables: {
      id: "NSR:StopPlace:58366",
      timeRange: 1 * 60 * 60,
      numberOfDepartures: 20
    }
  });

  return (
    <>
      <h2>{name}</h2>
      <ul>
        {estimatedCalls
          .filter(
            ({ serviceJourney: { transportSubmode } }: any) =>
              // Implication P => Q is equal to !P \/ Q
              !transport || transportSubmode === transport
          )
          .map((estimatedCall: any, index: number) => (
            <li key={index}>
              <Departure estimatedCall={estimatedCall} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default Departures;
