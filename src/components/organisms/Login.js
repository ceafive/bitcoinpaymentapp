import React from "react";

import Scroller from "../atoms/containers/Scroller";
import BaseForm from "../molecules/forms/BaseForm";
import SignInForm from "../molecules/forms/SignInForm";
import PhoneSignInForm from "../molecules/forms/VerificationForm";

const Login = ({ initialValues, authMode, showBtn, btnStyles, onPressSubmit = () => {}, ...props }) => {
  return (
    <BaseForm
      initialValues={initialValues}
      authMode={authMode}
      showBtn={showBtn}
      btnStyles={btnStyles}
      onPressSubmit={onPressSubmit}
      {...props}
    >
      <SignInForm authMode={authMode} />
    </BaseForm>
  );
};

export default Login;
