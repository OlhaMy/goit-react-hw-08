import { Form, Formik, Field, ErrorMessage } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/authOps";
import * as yup from "yup";
import s from "./RegisterForm.module.css";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),

  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),

  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least 1 uppercase letter")
    .matches(/[a-z]/, "Password must contain at least 1 lowercase letter")
    .matches(/[0-9]/, "Password must contain at least 1 number")
    .matches(/[\W_]/, "Password must contain at least 1 special character"),
});

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        console.log("Registration successful");
      })
      .catch((error) => {
        console.error("Registration failed", error);
      });
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={s.form}>
            <h3 className={s.title}>
              <span>Welcome to Phonebook! </span>
              <span>Please, register your Account </span>
            </h3>
            <label className={s.label}>
              Name
              <Field className={s.input} type="text" name="name" />
            </label>
            <ErrorMessage
              name="name"
              component="span"
              style={{ color: "red" }}
            />

            <label className={s.label}>
              Email
              <Field className={s.input} type="email" name="email" />
            </label>
            <ErrorMessage
              name="email"
              component="span"
              style={{ color: "red" }}
            />

            <label className={s.label}>
              Password
              <Field
                className={s.input}
                type="password"
                name="password"
                style={{ marginBottom: 35 }}
              />
            </label>
            <ErrorMessage
              name="password"
              component="span"
              style={{ color: "red" }}
            />

            <button className={s.button} type="submit" disabled={isSubmitting}>
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
