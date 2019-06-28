import React, { FC, useEffect, useState } from "react";
import * as serviceWorker from "../serviceWorker";
import Main from "./Main";

const App: FC = () => {
  const [waiting, setWaiting] = useState<ServiceWorker | null>(null);
  const updated = waiting !== null;

  useEffect(() => {
    serviceWorker.waiting().then(setWaiting);
  }, []);

  useEffect(() => {
    serviceWorker.register({
      onUpdate: registration => {
        const waiting = registration.waiting!;

        waiting.addEventListener("statechange", (event: any) => {
          if (event.target!.state === "activated") {
            window.location.reload();
          }
        });

        setWaiting(waiting);
      }
    });
  }, [waiting]);

  const handleClick = () => {
    setWaiting(null);
  };

  return <Main showToast={updated} onToastClick={handleClick} />;
};

export default App;
