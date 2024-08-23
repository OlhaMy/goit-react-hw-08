import { RegisterForm } from "components";

const RegisterPage = () => {
  const handleSubmit = (values) => {
    console.log("Form submitted", values);
  };

  return (
    <div>
      <RegisterForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default RegisterPage;
