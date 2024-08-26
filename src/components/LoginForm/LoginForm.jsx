import { useDispatch } from "react-redux";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { logIn } from "../../redux/auth/authOps";
import s from "./LoginForm.module.css";

const schema = yup.object().shape({
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

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        console.log("login success");
      })
      .catch(() => {
        console.log("login error");
      });
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <h3 className={s.title}>
            <span>Welcome back! </span>
            <span>Please, enter your login </span>
          </h3>
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

          <button className={s.button} type="submit">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
