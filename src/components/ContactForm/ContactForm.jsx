import { useId } from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .matches(/^[0-9]{3}-[0-9]{2}-[0-9]{2}$/, "Must be a valid phone number!")
    .required("Required"),
});

const ContactForm = ({ onData }) => {
  const nameId = useId();
  const numberId = useId();

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={FeedbackSchema}
      onSubmit={(values, { resetForm }) => {
        onData({ id: Date.now(), ...values });
        resetForm();
      }}
    >
      {({ handleSubmit }) => (
        <Form className={s.form} onSubmit={handleSubmit}>
          <label htmlFor={nameId}>Name</label>
          <Field
            className={s.input}
            type="text"
            name="name"
            placeholder="First and Last Name"
            id={nameId}
          />
          <ErrorMessage className={s.error} name="name" component="span" />

          <label htmlFor={numberId}>Number</label>
          <Field
            className={s.input}
            type="tel"
            placeholder="123-22-78"
            name="number"
            id={numberId}
          />
          <ErrorMessage className={s.error} name="number" component="span" />

          <button className={s.button} type="submit">
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
