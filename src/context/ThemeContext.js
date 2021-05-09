import React from "react";
import { AppLightTheme, AppDarkTheme } from "../constants/theme";
import { useColorScheme } from "react-native-appearance";

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
      toggleTheme,
    }),
    [toggleTheme, isThemeDark]
  );

  return <ThemeContext.Provider value={preferences}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
