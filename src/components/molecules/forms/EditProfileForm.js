import React from "react";
import { Platform, Pressable, View } from "react-native";
import { Avatar, IconButton, RadioButton, TextInput as RNPTextInput, useTheme } from "react-native-paper";

import { style } from "../../../../styles";
import { textSizes } from "../../../constants/styles";
import { closeModal, openCamera, pickImage, showModal, uploadImageAsync } from "../../../functions";
import Button from "../../atoms/buttons/Button";
import ComponentSideBySide from "../../atoms/containers/ComponentSideBySide";
import Scroller from "../../atoms/containers/Scroller";
import CachedImage from "../../atoms/images/CachedImage";
import Typography from "../../atoms/typography/Typography";
import BottomSheetModal from "../../misc/BottomSheetModal";
import InputWithLabel from "../inputs/InputWithLabel";
import PhoneInputIntl from "../inputs/PhoneInput";
import DatePicker from "../misc/DatePicker";

const EditProfileForm = ({ onPressGoToProfileDetails, ...props }) => {
  const theme = useTheme();
  const [showDatePicker, setShowDatePicker] = React.useState(false);

  const bottomSheetModal = React.useRef(null);

  return (
    <>
      <Scroller
        avoidKeyboard
        behavior={Platform.OS === "ios" ? "padding" : "height"}
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
            // backgroundColor: "#0B0B0B",
            backgroundColor: theme.colors.primary,
            borderRadius: 25,
          }}
        >
          <Pressable
            onPress={() => {
              showModal(bottomSheetModal);
            }}
          >
            {!props.values["avatar"] ? (
              <Avatar.Text size={100} label="I" style={{ backgroundColor: "white" }} />
            ) : typeof props.values["avatar"] === "string" ? (
              <Avatar.Image
                style={{ resizeMode: "contain", overflow: "hidden" }}
                size={100}
                source={{
                  uri: props.values["avatar"],
                  // uri: "https://images.unsplash.com/photo-1620415061840-07c8e4928959?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
                }}
              />
            ) : (
              <Avatar.Image style={{ resizeMode: "contain", overflow: "hidden" }} size={100} source={props.values["avatar"]} />
            )}
          </Pressable>
          {props.errors["avatar"] && <Typography textStyles={{ color: "red" }}>{props.errors["avatar"]}</Typography>}

          <Typography textStyles={{ color: "white" }}>Tap image to change</Typography>
          <Typography textStyles={{ marginTop: 10, color: "lightgray", ...textSizes["XSMALL"] }}>
            {props.values["email"] || props.values["phoneNumber"]}
          </Typography>
        </ComponentSideBySide>
        <>
          <Typography textStyles={{ marginTop: 10 }}>First Name</Typography>
          <InputWithLabel
            label="First Name"
            fieldName="firstName"
            placeholder="John"
            // left={<RNPTextInput.Icon color="gray" icon={"email-outline"} size={20} />}
            {...props}
          />
        </>

        <>
          <Typography textStyles={{ marginTop: 10 }}>Last Name</Typography>
          <InputWithLabel
            label="Last Name"
            fieldName="lastName"
            placeholder="Doe"
            // left={<RNPTextInput.Icon color="gray" icon={"email-outline"} size={20} />}
            {...props}
          />
        </>

        <>
          <Typography textStyles={{ marginTop: 10 }}>Date of birth</Typography>
          <Button
            mode="contained"
            icon="calendar"
            btnStyles={{ marginTop: 5, paddingVertical: 5, borderRadius: 10 }}
            onPress={() => setShowDatePicker(true)}
          >
            {props.values["dateOfBirth"].toDateString()}
          </Button>
          <DatePicker fieldName="dateOfBirth" showDatePicker={showDatePicker} setShowDatePicker={setShowDatePicker} {...props} />
        </>

        <>
          <Typography textStyles={{ marginTop: 10 }}>Gender</Typography>
          <RadioButton.Group onValueChange={(value) => props.setFieldValue("gender", value)} value={props.values["gender"]}>
            <RadioButton.Item label="Male" value="Male" color={theme.colors.primary} />
            <RadioButton.Item label="Female" value="Female" color={theme.colors.primary} />
          </RadioButton.Group>
        </>

        <Button
          disabled={props.isSubmitting}
          color="red"
          mode="outlined"
          btnStyles={{ marginTop: 5, paddingVertical: 10, borderRadius: 10 }}
          onPress={onPressGoToProfileDetails}
        >
          Cancel
        </Button>
      </Scroller>

      <BottomSheetModal ref={bottomSheetModal} snap={["15%", "20%"]}>
        <ComponentSideBySide
          type="col"
          wrapperStyles={{
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <ComponentSideBySide>
            <IconButton
              icon="camera"
              color={theme.colors.primary}
              size={60}
              onPress={() => openCamera(() => closeModal(bottomSheetModal))}
            />
            <IconButton
              icon="folder"
              color="orange"
              size={60}
              onPress={() =>
                pickImage(
                  () => closeModal(bottomSheetModal),
                  (uri) => {
                    props.setFieldValue("avatar", uri);
                  }
                )
              }
            />
          </ComponentSideBySide>
        </ComponentSideBySide>
      </BottomSheetModal>
    </>
  );
};

export default EditProfileForm;
