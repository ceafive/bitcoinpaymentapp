import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { IconButton, Switch } from "react-native-paper";
import { AuthCheck, StorageImage, useAuth, useFirestore, useFirestoreDocData, useUser } from "reactfire";

import { style } from "../../styles";
import Button from "../components/atoms/buttons/Button";
import ComponentSideBySide from "../components/atoms/containers/ComponentSideBySide";
import Scroller from "../components/atoms/containers/Scroller";
import Typography, { types } from "../components/atoms/typography/Typography";
import AccountScreenHeader from "../components/organisms/AccountScreenHeader";
import AccountScreenList from "../components/organisms/AccountScreenList";
import { ThemeContext } from "../context";
import { useFetchUserDetails } from "../hooks";
import { items } from "../utils";

const AccountScreen = ({ navigation, route }) => {
  const auth = useAuth();
  const { data: user } = useUser();
  const { userDetails, error, status } = useFetchUserDetails(user?.uid);
  const { isThemeDark, toggleTheme } = React.useContext(ThemeContext);
  const [isSwitchOn, setIsSwitchOn] = React.useState(isThemeDark ? true : false);

  React.useEffect(() => {
    setIsSwitchOn(isThemeDark);
  }, [isThemeDark]);

  const onToggleSwitch = () => {
    toggleTheme();
  };

  const logout = () => {
    try {
      auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };

  const onPressGoToProfile = () => {
    navigation.navigate("Profile");
  };

  const links = [
    {
      itemName: "Profile",
      iconLeft: <IconButton icon={"account"} color={"black"} size={25} />,
      iconRight: <IconButton icon="chevron-right" color="lightgray" size={25} onPress={onPressGoToProfile} />,
    },
    {
      itemName: "Settings",
      iconLeft: <IconButton icon={"account-settings"} color={"black"} size={25} />,
      iconRight: <IconButton icon="chevron-right" color="lightgray" size={25} onPress={() => console.log("settings")} />,
    },
    {
      itemName: "Dark Mode",
      iconLeft: <IconButton icon={"account-settings"} color={"black"} size={25} />,
      iconRight: <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />,
    },
  ];

  const accountItems = items.listLinks(links);

  return (
    <Scroller wrapperStyles={style("px-4")}>
      <AccountScreenHeader userDetails={userDetails} logout={logout} />
      <AccountScreenList items={accountItems} />
    </Scroller>
  );
};

export default AccountScreen;
