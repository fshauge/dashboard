import React, { FC, useEffect, useRef, useState } from "react";
import { register } from "../serviceWorker";
import Main from "./Main";

const App: FC = () => {
  const [updated, setUpdated] = useState(false);
  const skipWaitingRef = useRef<VoidFunction>();

  useEffect(() => {
    register({
      onUpdate: registration => {
        const waitingServiceWorker = registration.waiting!;

        skipWaitingRef.current = () => {
          waitingServiceWorker.postMessage({ type: "SKIP_WAITING" });
        };

        waitingServiceWorker.addEventListener("statechange", (event: any) => {
          if (event.target!.state === "activated") {
            window.location.reload();
          }
        });

        setUpdated(true);
      }
    });
  });

  const handleClick = () => {
    skipWaitingRef.current!();
    window.location.reload();
  };

  return <Main showToast={updated} onToastClick={handleClick} />;
};

export default App;
