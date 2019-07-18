import moment from "moment";
import { FC } from "react";
import transports from "./transports";

const Departure: FC<{ estimatedCall: any }> = ({
  estimatedCall: {
    serviceJourney: {
      transportSubmode,
      journeyPattern: {
        line: { publicCode }
      }
    },
    destinationDisplay: { frontText },
    expectedDepartureTime
  }
}) => {
  const relative = moment(expectedDepartureTime)
    .startOf("s")
    .fromNow();

  const emoji = (transports as any)[transportSubmode];
  return `${emoji} ${publicCode} ${frontText} - ${relative}` as any;
};

export default Departure;
