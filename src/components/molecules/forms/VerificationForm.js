import React from "react";
import InputWithLabel from "../inputs/InputWithLabel";
import Screen from "../../atoms/containers/Screen";

const VerificationForm = (props) => {
  return (
    <>
      <InputWithLabel label="Code" fieldName="code" {...props} />
    </>
  );
};

export default VerificationForm;
