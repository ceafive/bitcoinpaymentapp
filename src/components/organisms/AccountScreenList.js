import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ComponentSideBySide from "../atoms/containers/ComponentSideBySide";
import { IconButton, Colors } from "react-native-paper";
import { style } from "../../../styles";
import Typography, { types } from "../atoms/typography/Typography";
import Button from "../atoms/buttons/Button";

const AccountScreenList = ({ onPressGoToProfile }) => {
  const items = [
    {
      itemName: "Profile",
      icon: "account",
      action: () => onPressGoToProfile(),
      hidden: false,
    },
    {
      itemName: "Settings",
      icon: "account-settings",
      action: () => console.log("settings"),
      hidden: false,
    },
  ];

  return (
    <>
      {items.map(({ itemName, icon, action, hidden }, index) => {
        return (
          <React.Fragment key={itemName}>
            {!hidden ? (
              <ComponentSideBySide key={itemName} wrapperStyles={style("items-center justify-between")} onPress={action}>
                {/* <Button onPress={action}> */}
                <ComponentSideBySide wrapperStyles={{ ...style("items-center") }}>
                  <IconButton icon={icon} color={"black"} size={30} />
                  <Typography type={types.Subheading} textStyles={{}}>
                    {itemName}
                  </Typography>
                </ComponentSideBySide>

                <IconButton icon="chevron-right" color="lightgray" size={30} onPress={action} />
                {/* </Button> */}
              </ComponentSideBySide>
            ) : (
              <></>
            )}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default AccountScreenList;

const styles = StyleSheet.create({});
