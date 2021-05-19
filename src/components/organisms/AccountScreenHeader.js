import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, IconButton } from "react-native-paper";

import { style } from "../../../styles";
import { textSizes } from "../../constants/styles";
import ComponentSideBySide from "../atoms/containers/ComponentSideBySide";
import Typography, { types } from "../atoms/typography/Typography";
import Line from "../misc/Line";

const AccountScreenHeader = ({ userDetails, logout = () => {} }) => {
  return (
    <View>
      <Line />
      <ComponentSideBySide wrapperStyles={style("justify-between py-6")}>
        <ComponentSideBySide>
          {!userDetails["avatar"] ? (
            <Avatar.Text size={50} label="I" style={{ marginRight: 10 }} />
          ) : (
            <Avatar.Image
              style={{ resizeMode: "contain", overflow: "hidden", marginRight: 10 }}
              size={50}
              source={{
                uri: userDetails["avatar"],
              }}
            />
          )}
          <ComponentSideBySide type="col" wrapperStyles={style("justify-center")}>
            <Typography textStyles={style("font-lato_thin text-gray-900")}>Welcome</Typography>
            <Typography textStyles={{ ...style("font-lato_bold"), ...textSizes["XLARGE"] }}>
              {userDetails?.firstName || "New User"}
            </Typography>
          </ComponentSideBySide>
        </ComponentSideBySide>

        <IconButton icon="logout" color={"red"} size={24} onPress={logout} />
      </ComponentSideBySide>
      <Line />
    </View>
  );
};

export default AccountScreenHeader;
