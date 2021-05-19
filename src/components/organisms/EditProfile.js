import React from "react";

import BaseForm from "../molecules/forms/BaseForm";
import EditProfileForm from "../molecules/forms/EditProfileForm";

const EditProfile = ({ initialValues, showBtn, btnStyles, btnDisabled, onPressSubmit = () => {}, onPressGoToProfileDetails, ...props }) => {
  return (
    <BaseForm
      initialValues={initialValues}
      showBtn={showBtn}
      btnStyles={btnStyles}
      btnDisabled={btnDisabled}
      onPressSubmit={onPressSubmit}
      {...props}
    >
      <EditProfileForm onPressGoToProfileDetails={onPressGoToProfileDetails} />
    </BaseForm>
  );
};

export default EditProfile;
