import React, { FC, useEffect, useRef, useState } from "react";
import { register } from "../serviceWorker";
import Main from "./Main";

const App: FC = () => {
  const [updated, setUpdated] = useState(false);
  const skipWaitingRef = useRef<VoidFunction>();

  useEffect(() => {
    register({
      onUpdate: registration => {
        setUpdated(true);
        skipWaitingRef.current = () => {
          registration.installing!.postMessage({ type: "SKIP_WAITING" });
        };
      }
    });
  });

  const handleClick = () => {
    setUpdated(false);
    skipWaitingRef.current!();
    location.reload();
  };

  return <Main showToast={updated} onToastClick={handleClick} />;
};

export default App;
