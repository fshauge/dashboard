import React, { FC } from "react";
import Helmet from "react-helmet";
import { StyledProps, withTheme } from "styled-components";

const ThemeColor: FC<StyledProps<{}>> = ({ theme }) => (
  <Helmet>
    <meta name="theme-color" content={theme.background} />
  </Helmet>
);

export default withTheme(ThemeColor);
