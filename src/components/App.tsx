import React, { FC, useEffect, useRef, useState } from "react";
import { register } from "../serviceWorker";
import Main from "./Main";

const App: FC = () => {
  const [updated, setUpdated] = useState(false);
  const serviceWorkerRef = useRef<ServiceWorker>();

  useEffect(() => {
    register({
      onUpdate: registration => {
        setUpdated(true);
        serviceWorkerRef.current = registration.installing!;
      }
    });
  });

  const handleClick = () => {
    setUpdated(false);
    serviceWorkerRef.current!.postMessage({ type: "SKIP_WAITING" });
    window.location.reload();
  };

  return <Main showToast={updated} onToastClick={handleClick} />;
};

export default App;
