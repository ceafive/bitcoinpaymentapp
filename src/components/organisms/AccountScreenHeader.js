import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { style } from "../../../styles";
import ComponentSideBySide from "../atoms/containers/ComponentSideBySide";
import { Avatar, IconButton } from "react-native-paper";
import Typography, { types } from "../atoms/typography/Typography";
import Line from "../misc/Line";
import { textSizes } from "../../constants/styles";

const AccountScreenHeader = ({ name, logout = () => {} }) => {
  return (
    <View>
      <Line />
      <ComponentSideBySide wrapperStyles={style("justify-between py-8")}>
        <ComponentSideBySide>
          <Avatar.Image
            style={{ marginRight: 10 }}
            size={50}
            source={{
              uri:
                "https://images.unsplash.com/photo-1620415061840-07c8e4928959?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
            }}
          />
          <ComponentSideBySide type="col" wrapperStyles={style("justify-center")}>
            <Typography textStyles={style("font-lato_thin text-gray-900")}>Welcome</Typography>
            <Typography textStyles={{ ...style("font-lato_bold"), ...textSizes["XLARGE"] }}>{name}</Typography>
          </ComponentSideBySide>
        </ComponentSideBySide>

        <IconButton icon="logout" color={"red"} size={24} onPress={logout} />
      </ComponentSideBySide>
      <Line />
    </View>
  );
};

export default AccountScreenHeader;
