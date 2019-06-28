import React, { FC, useEffect, useState } from "react";
import * as serviceWorker from "../serviceWorker";
import Main from "./Main";

const App: FC = () => {
  const [waiting, setWaiting] = useState<ServiceWorker | null>(null);
  const updated = waiting !== null;

  useEffect(() => {
    serviceWorker.waiting().then(setWaiting);

    serviceWorker.register({
      onUpdate: registration => {
        setWaiting(registration.waiting!);
      }
    });
  }, []);

  const handleClick = () => {
    serviceWorker.skipWaiting(waiting, () => {
      window.location.reload();
    });

    setWaiting(null);
  };

  return <Main showToast={updated} onToastClick={handleClick} />;
};

export default App;
