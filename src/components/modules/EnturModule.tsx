import ApolloClient, { gql } from "apollo-boost";
import React, { FC } from "react";
import { ApolloProvider, useQuery } from "react-apollo-hooks";
import Card from "../Card";

const client = new ApolloClient({
  uri: "https://api.entur.io/journey-planner/v2/graphql"
});

const DEPARTURES_QUERY = gql`
  query departures(
    $id: String!
    $whiteListed: InputWhiteListed
    $numberOfDepartures: Int = 500
    $numberOfDeparturesPerLineAndDestinationDisplay: Int = 10
    $numberOfSubsequentEstimatedCalls: Int = 5
  ) {
    stopPlace(id: $id) {
      ...stopPlaceWithQuaysWithDeparturesFragment
      __typename
    }
  }

  fragment serviceJourneyFragment on ServiceJourney {
    id
    privateCode
    line {
      ...lineFragment
      __typename
    }
    situations {
      ...situationFragment
      __typename
    }
    wheelchairAccessible
    notices {
      id
      text
      publicCode
      __typename
    }
    __typename
  }

  fragment estimatedCallFragment on EstimatedCall {
    quay {
      id
      __typename
    }
    aimedArrivalTime
    expectedArrivalTime
    actualArrivalTime
    aimedDepartureTime
    expectedDepartureTime
    actualDepartureTime
    realtime
    forBoarding
    forAlighting
    cancellation
    date
    destinationDisplay {
      frontText
      __typename
    }
    situations {
      ...situationFragment
      __typename
    }
    notices {
      id
      text
      publicCode
      __typename
    }
    __typename
  }

  fragment estimatedCallWithServiceJourneyFragment on EstimatedCall {
    ...estimatedCallFragment
    serviceJourney {
      ...serviceJourneyFragment
      __typename
    }
    __typename
  }

  fragment lineFragment on Line {
    id
    publicCode
    transportMode
    presentation {
      colour
      textColour
      __typename
    }
    notices {
      id
      text
      publicCode
      __typename
    }
    authority {
      id
      name
      __typename
    }
    situations {
      ...situationFragment
      __typename
    }
    __typename
  }

  fragment quayFragment on Quay {
    id
    name
    latitude
    longitude
    description
    publicCode
    wheelchairAccessible
    stopPlace {
      id
      description
      transportMode
      parent {
        id
        description
        __typename
      }
      __typename
    }
    __typename
  }

  fragment quayWithDeparturesFragment on Quay {
    ...quayFragment
    estimatedCalls(
      timeRange: 14400
      whiteListed: $whiteListed
      numberOfDepartures: $numberOfDepartures
      numberOfDeparturesPerLineAndDestinationDisplay: $numberOfDeparturesPerLineAndDestinationDisplay
      omitNonBoarding: true
    ) {
      ...estimatedCallWithServiceJourneyFragment
      __typename
    }
    subsequentEstimatedCalls: estimatedCalls(
      timeRange: 14400
      whiteListed: $whiteListed
      numberOfDepartures: 500
      numberOfDeparturesPerLineAndDestinationDisplay: $numberOfSubsequentEstimatedCalls
      omitNonBoarding: true
    ) {
      expectedDepartureTime
      realtime
      destinationDisplay {
        frontText
        __typename
      }
      serviceJourney {
        id
        line {
          id
          publicCode
          __typename
        }
        __typename
      }
      __typename
    }
    situations {
      ...situationFragment
      __typename
    }
    __typename
  }

  fragment situationFragment on PtSituationElement {
    id
    situationNumber
    summary {
      ...multilingualStringFragment
      __typename
    }
    description {
      ...multilingualStringFragment
      __typename
    }
    advice {
      ...multilingualStringFragment
      __typename
    }
    lines {
      id
      publicCode
      transportMode
      __typename
    }
    quays {
      id
      name
      stopPlace {
        id
        name
        parent {
          id
          name
          __typename
        }
        __typename
      }
      __typename
    }
    stopPlaces {
      id
      name
      __typename
    }
    validityPeriod {
      startTime
      endTime
      __typename
    }
    infoLinks {
      uri
      label
      __typename
    }
    __typename
  }

  fragment multilingualStringFragment on MultilingualString {
    value
    language
    __typename
  }

  fragment stopPlaceFragment on StopPlace {
    id
    name
    description
    latitude
    longitude
    transportMode
    parent {
      id
      __typename
    }
    __typename
  }

  fragment stopPlaceWithQuaysWithDeparturesFragment on StopPlace {
    ...stopPlaceFragment
    quays {
      ...quayWithDeparturesFragment
      __typename
    }
    __typename
  }
`;

const Departures: FC = () => {
  const { loading, data } = useQuery(DEPARTURES_QUERY, {
    variables: {
      id: "NSR:StopPlace:58366",
      numberOfDeparturesPerLineAndDestinationDisplay: 1,
      numberOfDepartures: 500,
      numberOfSubsequentEstimatedCalls: 6
    }
  });

  if (loading) {
    return null;
  }

  const lines = data.stopPlace.quays
    .flatMap((quay: any) => quay.estimatedCalls)
    .map((call: any) => ({
      destinationDisplay: call.destinationDisplay.frontText,
      publicCode: call.serviceJourney.line.publicCode
    }));

  return (
    <>
      <h2>{data.stopPlace.name}</h2>
      <ul>
        {lines.map((line: any) => (
          <li key={line.publicCode + line.destinationDisplay}>
            {line.publicCode} {line.destinationDisplay}
          </li>
        ))}
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
