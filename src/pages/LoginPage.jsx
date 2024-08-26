import { LoginForm } from "components";

const LoginPage = () => {
  const handleSubmit = (values) => {
    console.log("Form submitted with values:", values);
  };

  return (
    <div>
      <LoginForm handleSubmit={handleSubmit} />
    </div>
  );
};
export default LoginPage;
