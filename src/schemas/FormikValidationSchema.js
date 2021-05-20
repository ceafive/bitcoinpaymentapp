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

export const ResetPasswordSchema = yup.object({
  email: yup.string().email("Invalid email address").required("Email is required"),
});

export const EditProfileSchema = yup.object({
  firstName: yup
    .string()
    .min(2, ({ min }) => `Must be ${min} characters or more`)
    .required("First name is required"),
  lastName: yup
    .string()
    .min(2, ({ min }) => `Must be ${min} characters or more`)
    .required("Last name is required"),
  dateOfBirth: yup.date().required("Date of birth is required"),
  gender: yup.string().required("Gender is required"),
  avatar: yup.mixed().required("Image is required"),
});

export const AddCardPaymentSchema = yup.object({
  fullName: yup
    .string()
    .min(2, ({ min }) => `Must be ${min} characters or more`)
    .required("Full name is required"),
  cardNumber: yup
    .string()
    .min(14, ({ min }) => `Must be ${min} characters`)
    .max(14, ({ max }) => `Must be ${max} characters`)
    .required("Card number is required"),
  expiryDate: yup.mixed().required("Expiry date is required"),
  cvv: yup
    .string()
    .max(3, ({ max }) => `Must be ${max} characters`)
    .required("CVV is required"),
  type: yup.object().required("Card type is required"),
});

export const AddMoMoPaymentSchema = yup.object({
  fullName: yup
    .string()
    .min(2, ({ min }) => `Must be ${min} characters or more`)
    .required("Full name is required"),
  momoNumber: yup
    .string()
    .min(10, ({ min }) => `Must be ${min} characters`)
    .max(10, ({ max }) => `Must be ${max} characters`)
    .required("Mobile money number is required"),
  networkCode: yup.object().required("Network code is required"),
});
