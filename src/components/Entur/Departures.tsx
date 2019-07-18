import { gql } from "apollo-boost";
import React, { FC } from "react";
import { useQuery } from "react-apollo-hooks";
import styled from "styled-components";
import Departure from "./Departure";

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  & > li {
    &:not(:first-child) {
      margin-top: 0.25rem;
    }

    &:not(:last-child) {
      margin-bottom: 0.25rem;
    }
  }
`;

const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RefetchButton = styled.div`
  cursor: pointer;
`;

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
  const variables = {
    id: "NSR:StopPlace:58366",
    timeRange: 1 * 60 * 60,
    numberOfDepartures: 20
  };

  const {
    data: {
      stopPlace: { name, estimatedCalls }
    },
    refetch
  } = useQuery<any>(DEPARTURES_QUERY, {
    suspend: true,
    variables
  });

  return (
    <>
      <TitleBar>
        <h2>{name}</h2>
        <RefetchButton onClick={() => refetch(variables)}>🔄</RefetchButton>
      </TitleBar>
      <List>
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
      </List>
    </>
  );
};

export default Departures;
