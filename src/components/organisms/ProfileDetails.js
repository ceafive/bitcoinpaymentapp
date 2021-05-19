import React from "react";
import { Avatar, IconButton, useTheme } from "react-native-paper";

import { fonts, textSizes } from "../../constants/styles";
import { items } from "../../utils";
import ComponentSideBySide from "../atoms/containers/ComponentSideBySide";
import Scroller from "../atoms/containers/Scroller";
import Typography, { types } from "../atoms/typography/Typography";
import ListWithIcon from "../molecules/lists/ListWithIcon";

const ProfileDetails = ({ user, onPressGoToPaymentMethods, onPressGoToEditProfile }) => {
  const theme = useTheme();

  const links = [
    {
      itemName: "Payment Methods",
      iconLeft: <IconButton icon={"credit-card-multiple-outline"} color={"black"} size={25} />,
      iconRight: <IconButton icon="chevron-right" color="lightgray" size={25} onPress={onPressGoToPaymentMethods} />,
    },
    {
      itemName: "Transactions",
      iconLeft: <IconButton icon={"cash"} color={"black"} size={25} />,
      iconRight: <IconButton icon="chevron-right" color="lightgray" size={25} onPress={() => {}} />,
    },
  ];

  const profileLinks = items.listLinks(links);

  return (
    <Scroller
      style={{
        paddingTop: 5,
      }}
    >
      <ComponentSideBySide
        type="col"
        wrapperStyles={{
          justifyContent: "center",
          alignItems: "center",
          height: 200,
          // backgroundColor: theme.colors.brand.colors.onboarding1,
          backgroundColor: theme.colors.brand.colors.brandBlueTwo,
          borderRadius: 25,
        }}
      >
        <IconButton
          style={{ position: "absolute", top: 0, right: 0, margin: 10 }}
          icon="pencil"
          color={"white"}
          size={30}
          onPress={onPressGoToEditProfile}
        />
        {!user["avatar"] ? (
          <Avatar.Text size={100} label="I" style={{ backgroundColor: "white" }} />
        ) : typeof user["avatar"] === "string" ? (
          <Avatar.Image
            style={{ resizeMode: "contain", overflow: "hidden" }}
            size={100}
            source={{
              uri: user["avatar"],
            }}
          />
        ) : (
          <Avatar.Image style={{ resizeMode: "contain", overflow: "hidden" }} size={100} source={user["avatar"]} />
        )}

        <Typography type={types.Title} textStyles={{ fontFamily: fonts.Lato_Bold, color: "white" }}>
          {user["firstName"] || "New"} {user["lastName"] || "User"}
        </Typography>
        <Typography textStyles={{ color: "lightgray", ...textSizes["XSMALL"] }}>{user["email"] || user["phoneNumber"]}</Typography>
      </ComponentSideBySide>

      {/* Section 2 */}
      <ComponentSideBySide wrapperStyles={{ justifyContent: "center", alignItems: "center", marginTop: 10 }}>
        <ComponentSideBySide type="col" wrapperStyles={{ alignItems: "center", marginHorizontal: 20 }}>
          <Typography textStyles={{ color: "#BEBEC0", ...textSizes["XSMALL"] }}>My Wallet</Typography>
          <Typography textStyles={{ ...textSizes["LARGE"] }}>GHS 3000</Typography>
        </ComponentSideBySide>

        <ComponentSideBySide type="col" wrapperStyles={{ alignItems: "center", marginHorizontal: 20 }}>
          <Typography textStyles={{ color: "#BEBEC0", ...textSizes["XSMALL"] }}>My Bonus</Typography>
          <Typography textStyles={{ ...textSizes["LARGE"] }}>GHS 100</Typography>
        </ComponentSideBySide>
      </ComponentSideBySide>

      <Typography textStyles={{ color: "#BEBEC0", ...textSizes["SMALL"] }}>Your Links</Typography>
      {profileLinks.map((link) => {
        return <ListWithIcon key={link.itemName} {...link} />;
      })}
    </Scroller>
  );
};

export default ProfileDetails;
