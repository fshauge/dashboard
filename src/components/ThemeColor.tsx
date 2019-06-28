import React, { FC, useContext } from "react";
import Helmet from "react-helmet";
import { ThemeContext } from "styled-components";

const ThemeColor: FC = () => {
  const { background } = useContext(ThemeContext);

  return (
    <Helmet>
      <meta name="theme-color" content={background} />
    </Helmet>
  );
};

export default ThemeColor;
