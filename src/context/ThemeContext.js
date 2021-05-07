import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { AppLightTheme, AppDarkTheme } from "../constants/theme";
import { useColorScheme } from "react-native-appearance";

export const PreferencesContext = React.createContext({
  toggleTheme: () => {},
  isThemeDark: false,
});

const PreferencesProvider = ({ children }) => {
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

  return <PreferencesContext.Provider value={preferences}>{children}</PreferencesContext.Provider>;
};

export default PreferencesProvider;
