import { Form, Formik, Field } from "formik";
import s from "./LoginForm.module.css";

const LoginForm = ({ handleSubmit }) => {
  return (
    <div>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <label className={s.lable}>
            Email
            <Field className={s.input} type="email" name="email" />
          </label>

          <label className={s.lable}>
            Password
            <Field className={s.input} type="password" name="password" />
          </label>

          <button className={s.button} type="submit">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default LoginForm;
