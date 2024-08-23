import { Form, Formik, Field } from "formik";
import React from "react";

const RegisterForm = ({ handleSubmit }) => {
  return (
    <div>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>
            Name
            <Field type="text" name="name" />
          </label>

          <label>
            Email
            <Field type="email" name="email" />
          </label>

          <label>
            Password
            <Field type="password" name="password" />
          </label>

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
