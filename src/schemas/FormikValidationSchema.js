import * as yup from "yup";

export const EmailLoginSchema = yup.object({
  email: yup.lazy((key) => {
    if (typeof key !== undefined) {
      return yup.string().email("Invalid email address").required("Email is required");
    }

    return yup.mixed().notRequired();
  }),
  password: yup
    .string()
    .min(6, ({ min }) => `Must be ${min} characters or more`)
    .max(15, ({ max }) => `Must be ${max} characters or less`)
    .required("Password is required"),
});

export const PhoneLoginForm = yup.object({});

export const VerifyScreenSchema = yup.object({
  code: yup
    .string()
    .min(6, ({ min }) => `Must be ${min} characters or more`)
    .max(6, ({ max }) => `Must be ${max} characters or less`)
    .required("Code is required"),
});
