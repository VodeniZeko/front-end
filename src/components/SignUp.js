import React from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const SignUp = () => (
  <Formik
    initialValues={{
      name: "",
      email: "",
      password: "",
      renter: "",
      owner: ""
    }}
    onSubmit={(values, { setSubmitting }) => {
      console.log(values);
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}
    validationSchema={Yup.object().shape({
      name: Yup.string().required("Required"),
      email: Yup.string().required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number.")
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
      return (
        <form onSubmit={handleSubmit}>
          <label className="signupLabel" htmlFor="text">
            Name
          </label>
          <Field
            className="signupInput"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name && (
            <div className="input-feedback">{errors.name}</div>
          )}
          <label className="signupLabel" htmlFor="email">
            Email
          </label>
          <Field
            className="signupInput"
            name="email"
            type="text"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && (
            <div className="input-feedback">{errors.email}</div>
          )}
          <label className="signupLabel" htmlFor="email">
            Password
          </label>
          <Field
            className="signupInput"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
          )}
          <div className="optionsContainer">
            <Field as="select">
              <option disabled>I am:</option>
              <option value={values.renter}>Renter</option>
              <option value={values.owner}>Owner</option>
            </Field>
          </div>
          {errors.email && touched.email && (
            <div className="input-feedback">{errors.email}</div>
          )}
          <button
            className="signupButton"
            type="submit"
            disabled={isSubmitting}
          >
            Sign up
          </button>
        </form>
      );
    }}
  </Formik>
);

export default SignUp;
