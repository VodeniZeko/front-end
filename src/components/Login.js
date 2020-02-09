import React from "react";
import { Formik } from "formik";

import { FormContainer } from "../styles/styles.js";
import * as Yup from "yup";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Fetchusers } from "../actions/Apicalls.js";

const Login = props => {
  const { push } = useHistory();
  const dispatch = useDispatch();
  const handleSubmit = (values, { setStatus, resetForm }) => {
    Axios.post(`https://usetechstuff.herokuapp.com/api/login`, values)

      .then(res => {
        setStatus(res.data);
        resetForm();
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("CURRENTUSER", JSON.stringify(res.data.user));

        dispatch({ type: "LOGGED_STATUS", payload: true });
        dispatch({ type: "CURRENT_USER", payload: res.data.user });

        dispatch(Fetchusers());
        push(`/profile`);
      })
      .catch(err => console.log(err) & alert("Invalid email or Password"))
      .finally();
  };
  return (
    <FormContainer>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={Yup.object().shape({
          username: Yup.string().required("Required"),
          password: Yup.string()
            .required("No password provided.")
            .min(6, "Password is too short - should be 6 chars minimum.")
            .matches(/(?=.*[0-9])/, "Password must contain a number.")
        })}
      >
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
              <label className="loginLabel" htmlFor="username"></label>
              <input
                className="loginInput"
                name="username"
                type="text"
                placeholder="Enter your username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {errors.username && touched.username && (
                <span
                  style={{ position: "absolute", top: "70px", left: "70px" }}
                  className="input-feedback"
                >
                  {errors.username}
                </span>
              )}
              <label className="loginLabel" htmlFor="username"></label>
              <input
                className="loginInput"
                name="password"
                type="password"
                placeholder="Enter your password"
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
                  className="input-feedback"
                >
                  {errors.password}
                </span>
              )}
              <button className="loginButton" type="submit">
                Login
              </button>
            </form>
          );
        }}
      </Formik>
    </FormContainer>
  );
};

export default Login;
