import { useEffect, useState } from "react";
import * as serviceWorker from "../serviceWorker";

const useServiceWorker: () => [boolean, VoidFunction] = () => {
  const [waiting, setWaiting] = useState<ServiceWorker | null>(null);

  useEffect(() => {
    serviceWorker.waiting().then(setWaiting);

    serviceWorker.register({
      onUpdate: registration => {
        setWaiting(registration.waiting!);
      }
    });
  }, []);

  const skipWaiting = () => {
    serviceWorker.skipWaiting(waiting, () => {
      window.location.reload();
    });

    setWaiting(null);
  };

  return [waiting !== null, skipWaiting];
};

export default useServiceWorker;
