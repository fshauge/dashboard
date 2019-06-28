import React, { FC, useEffect, useState } from "react";
import { register } from "../serviceWorker";
import Main from "./Main";

const App: FC = () => {
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    register({
      onUpdate: registration => {
        console.log(registration);
        setUpdated(true);
      }
    });
  });

  return <Main updated={updated} />;
};

export default App;
