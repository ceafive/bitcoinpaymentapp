import React from "react";

import { View } from "react-native";
import { Formik } from "formik";
import Button from "../../atoms/buttons/Button";

const BaseForm = ({
  initialValues,
  authMode,
  btnText = `${authMode === "email" ? "Sign In" : "Send Code"}`,
  onPressSubmit,
  children,
  showBtn = true,
  btnStyles,
  ...formikProps
}) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onPressSubmit} {...formikProps}>
      {(props) => {
        const { submitForm, isValid } = props;
        try {
          return (
            <>
              {React.cloneElement(children, props)}
              {showBtn && (
                <Button style={btnStyles} mode="contained" onPress={submitForm} disabled={!isValid}>
                  {btnText}
                </Button>
              )}
            </>
          );
        } catch (error) {
          console.log("error in BaseForm", error);
        }
      }}
    </Formik>
  );
};
export default BaseForm;
