import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string()
    .min(2, "too short")
    .max(8, "too long")
    .required("please enter your name"),

  password: Yup.string()
    .min(8, "password should be 8 digit")
    .max(16, "too long")
    .required("please enter password"),
});

export const registerSchema = Yup.object({
  name: Yup.string()
    .min(3, "name is too short")
    .max(10, "name is too long")
    .required("please enter name"),

  email: Yup.string().email().required("please enter email"),

  password: Yup.string()
    .min(8, "password should be 8 digit")
    .max(16, "too long")
    .required("please enter password"),

  cpassword: Yup.string()
    .required("enter confirm password")
    .oneOf([Yup.ref("password"), null], "password must be match"),
});
