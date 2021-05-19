import React from "react";
import { useColorScheme } from "react-native-appearance";

import { AppDarkTheme, AppLightTheme } from "../constants/theme";

export const ThemeContext = React.createContext({
  toggleTheme: () => {},
  isThemeDark: false,
});

const ThemeContextProvider = ({ children }) => {
  const scheme = useColorScheme();
  const [isThemeDark, setIsThemeDark] = React.useState(scheme === "dark" ? true : false);
  let theme = isThemeDark ? AppDarkTheme : AppLightTheme;

  React.useEffect(() => {
    setIsThemeDark(scheme === "dark" ? true : false);
  }, [scheme]);

  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark((curr) => !curr);
  }, [isThemeDark]);

  const preferences = React.useMemo(
    () => ({
      theme,
      isThemeDark,
      toggleTheme,
    }),
    [toggleTheme, isThemeDark]
  );

  return <ThemeContext.Provider value={preferences}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
