import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const Login = () => {
  const { push } = useHistory();
  const dispatch = useDispatch();
  const handleSubmit = (values, { setStatus, resetForm }) => {
    Axios.post(`https://usetechstuff.herokuapp.com/api/login`, values)

      .then(res => {
        setStatus(res.data);
        resetForm();
        console.log(res, `success`);
        localStorage.setItem("token", res.data.token);
        dispatch({ type: "LOGGED_STATUS", payload: true });
        push("/profile");
      })
      .catch(err => console.log(err) & alert("Invalid email or Password"))
      .finally();
  };
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={handleSubmit}
      // validationSchema={Yup.object().shape({
      //   username: Yup.string()
      //     .username()
      //     .required("Required"),
      //   password: Yup.string()
      //     .required("No password provided.")
      //     .matches(/(?=.*[0-9])/, "Password must contain a number.")
      // })}
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
            <label className='loginLabel' htmlFor='username'>
              username
            </label>
            <input
              className='loginInput'
              name='username'
              type='text'
              placeholder='Enter your username'
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {console.log(values, "values")}
            {errors.username && touched.username && (
              <div className='input-feedback'>{errors.username}</div>
            )}
            <label className='loginLabel' htmlFor='username'>
              Password
            </label>
            <input
              className='loginInput'
              name='password'
              type='password'
              placeholder='Enter your password'
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password && (
              <div className='input-feedback'>{errors.password}</div>
            )}
            <button
              className='loginButton'
              type='submit'
              disabled={isSubmitting}>
              Login
            </button>
          </form>
        );
      }}
    </Formik>
  );
};

export default Login;
