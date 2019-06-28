import { useEffect, useState } from "react";
import * as serviceWorker from "../serviceWorker";

const useServiceWorker: () => [boolean, VoidFunction] = () => {
  const [
    waitingServiceWorker,
    setWaitingServiceWorker
  ] = useState<ServiceWorker | null>(null);

  useEffect(() => {
    serviceWorker.waiting().then(setWaitingServiceWorker);

    serviceWorker.register({
      onUpdate: registration => {
        setWaitingServiceWorker(registration.waiting!);
      }
    });
  }, []);

  const skipWaiting = () => {
    serviceWorker.skipWaiting(waitingServiceWorker, () => {
      window.location.reload();
    });

    setWaitingServiceWorker(null);
  };

  return [waitingServiceWorker !== null, skipWaiting];
};

export default useServiceWorker;
