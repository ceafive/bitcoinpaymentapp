import React from "react";

import ThemeContextProvider, { ThemeContext } from "./ThemeContext";

export { ThemeContext };

const AppContext = ({ children }) => {
  return (
    <>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </>
  );
};

export default AppContext;
