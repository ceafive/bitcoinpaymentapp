import React from "react";
import { View } from "react-native";
import InputWithLabel from "../inputs/InputWithLabel";
import { IconButton, TextInput as RNPTextInput, useTheme } from "react-native-paper";
import PhoneInputIntl from "../inputs/PhoneInput";
import Scroller from "../../atoms/containers/Scroller";
import Typography from "../../atoms/typography/Typography";
import Button from "../../atoms/buttons/Button";
import DatePicker from "../misc/DatePicker";

import { RadioButton } from "react-native-paper";
import ComponentSideBySide from "../../atoms/containers/ComponentSideBySide";
import { style } from "../../../../styles";

const EditProfileForm = ({ authMode, ...props }) => {
  const theme = useTheme();
  const [showDatePicker, setShowDatePicker] = React.useState(false);
  return (
    <Scroller avoidKeyboard behavior={Platform.OS === "ios" ? "padding" : "height"} style={{}}>
      <Typography textStyles={{ marginTop: 10 }}>First Name</Typography>
      <InputWithLabel
        label="First Name"
        fieldName="firstName"
        placeholder="John"
        // left={<RNPTextInput.Icon color="gray" icon={"email-outline"} size={20} />}
        {...props}
      />
      <Typography textStyles={{ marginTop: 10 }}>Last Name</Typography>
      <InputWithLabel
        label="Last Name"
        fieldName="lastName"
        placeholder="Doe"
        // left={<RNPTextInput.Icon color="gray" icon={"email-outline"} size={20} />}
        {...props}
      />
      <Typography textStyles={{ marginTop: 10 }}>Date of birth</Typography>
      <Button mode="contained" btnStyles={{ marginTop: 5, paddingVertical: 5, borderRadius: 10 }} onPress={() => setShowDatePicker(true)}>
        {props.values["dateOfBirth"].toDateString()}
      </Button>
      <DatePicker fieldName="dateOfBirth" showDatePicker={showDatePicker} setShowDatePicker={setShowDatePicker} {...props} />

      <Typography textStyles={{ marginTop: 10 }}>Gender</Typography>
      <RadioButton.Group onValueChange={(value) => props.setFieldValue("gender", value)} value={props.values["gender"]}>
        <RadioButton.Item label="Male" value="Male" color={theme.colors.primary} />
        <RadioButton.Item label="Female" value="Female" color={theme.colors.primary} />
      </RadioButton.Group>
      {/* <ComponentSideBySide>
        <ComponentSideBySide wrapperStyles={{ ...style("items-center") }}>
          <RadioButton
            value="Male"
            color={theme.colors.primary}
            status={props.values["gender"] === "Male" ? "checked" : "unchecked"}
            onPress={() => props.setFieldValue("gender", "Male")}
          />
          <Typography>Male</Typography>
        </ComponentSideBySide>
        <ComponentSideBySide wrapperStyles={{ ...style("items-center") }}>
          <RadioButton
            value="Female"
            color={theme.colors.primary}
            status={props.values["gender"] === "Female" ? "checked" : "unchecked"}
            onPress={() => props.setFieldValue("gender", "Female")}
          />
          <Typography>Female</Typography>
        </ComponentSideBySide>
      </ComponentSideBySide> */}
    </Scroller>
  );
};

export default EditProfileForm;
