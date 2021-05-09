import React from "react";

import { View } from "react-native";
import { Formik } from "formik";
import Button from "../../atoms/buttons/Button";

const BaseForm = ({
  initialValues,
  authMode,
  btnText = `${authMode === "email" ? "Login" : "Send Code"}`,
  onPressSubmit,
  children,
  showBtn = true,
  btnStyles,
  ...formikProps
}) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onPressSubmit} {...formikProps}>
      {(props) => {
        const { submitForm, isValid, isSubmitting } = props;
        try {
          return (
            <>
              {React.cloneElement(children, props)}
              {showBtn && (
                <Button loading={isSubmitting} style={btnStyles} mode="contained" onPress={submitForm} disabled={!isValid || isSubmitting}>
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
