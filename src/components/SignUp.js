import React from "react";
import { Formik, Field } from "formik";
import { FormContainer } from "../styles/styles.js";
import * as Yup from "yup";
import Axios from "axios";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const { push } = useHistory();
  const handleSubmit = (values, { setStatus, resetForm }) => {
    Axios.post(`https://usetechstuff.herokuapp.com/api/register`, values)

      .then(res => {
        setStatus(res.data);
        resetForm();
        console.log(res, `success`);
        push("/login");
      })
      .catch(
        err =>
          console.log(err) &
          alert("Username already exist please choose a different name")
      )
      .finally();
  };
  return (
    <FormContainer>
      <Formik
        initialValues={{
          username: "",
          password: "",
          department: ""
        }}
        onSubmit={handleSubmit}
        validationSchema={Yup.object().shape({
          username: Yup.string().required("Required"),
          password: Yup.string()
            .required("No password provided.")
            .min(6, "Password is too short - should be 6 chars minimum.")
            .matches(/(?=.*[0-9])/, "Password must contain a number.")
        })}>
        {props => {
          const {
            values,
            touched,
            errors,
            // isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit
          } = props;
          return (
            <form onSubmit={handleSubmit}>
              <label className='signupLabel' htmlFor='text'>
                username
              </label>
              <Field
                className='signupInput'
                name='username'
                type='text'
                placeholder='Enter your username'
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.username && touched.username && (
                <span
                  style={{ position: "absolute", top: "70px", left: "70px" }}
                  className='input-feedback'>
                  {errors.username}
                </span>
              )}
              {/* <label className='signupLabel' htmlFor='email'>
              Email
            </label>
            <Field
              className='signupInput'
              name='email'
              type='text'
              placeholder='Enter your email'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && (
              <div className='input-feedback'>{errors.email}</div>
            )} */}
              <label className='signupLabel' htmlFor='email'>
                Password
              </label>
              {console.log(values, "value")}
              <Field
                className='signupInput'
                name='password'
                type='password'
                placeholder='Enter your password'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password && (
                <span
                  style={{
                    position: "absolute",
                    top: "155px",
                    right: "-147px",
                    maxWidth: "1000px",
                    width: "500px"
                  }}
                  className='input-feedback'>
                  {errors.password}
                </span>
              )}

              <Field
                required
                as='select'
                name='department'
                placeholder='select'>
                <option value='' disabled defaultValue>
                  Select a Role
                </option>
                <option value='renter'>Equipment Renter</option>
                <option value='owner'>Equipment Owner</option>
              </Field>

              {/* <label className='checkbox-container'>I am:</label>
            Owner
            <Field
              value='owner'
              type='checkbox'
              name='department'
              // checked={values.department}
            />
            <label name='checkbox-container'>I am:</label>
            Renter
            <Field
              value='renter'
              type='checkbox'
              name='department'
              checked={EventTarget.checked}
            /> */}
              <button className='signupButton' type='submit'>
                Sign up
              </button>
            </form>
          );
        }}
      </Formik>
    </FormContainer>
  );
};

export default SignUp;
