import { Form, Formik, Field } from "formik";

const LoginForm = ({ handleSubmit }) => {
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

          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};
export default LoginForm;
