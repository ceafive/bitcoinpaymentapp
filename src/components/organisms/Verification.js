import React from "react";
import { StyleSheet, Text, View } from "react-native";

import BaseForm from "../molecules/forms/BaseForm";
import VerificationForm from "../molecules/forms/VerificationForm";

const Verification = ({ initialValues, showBtn, btnText, btnStyles = {}, fieldName = "code", label = "Code", onPressSubmit, ...props }) => {
  return (
    <BaseForm
      initialValues={initialValues}
      btnText={btnText}
      showBtn={showBtn}
      btnStyles={btnStyles}
      onPressSubmit={onPressSubmit}
      {...props}
    >
      <VerificationForm fieldName={fieldName} label={label} />
    </BaseForm>
  );
};

export default Verification;

const styles = StyleSheet.create({});
