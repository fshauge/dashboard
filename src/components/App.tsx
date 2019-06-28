import React, { FC, useEffect, useState } from "react";
import { register } from "../serviceWorker";
import Main from "./Main";

const App: FC = () => {
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    register({
      onUpdate: () => {
        setUpdated(true);
      }
    });
  });

  const handleClick = () => {
    setUpdated(false);
    navigator.serviceWorker.controller!.postMessage({ type: "SKIP_WAITING" });
    window.location.reload();
  };

  return <Main showToast={updated} onToastClick={handleClick} />;
};

export default App;
