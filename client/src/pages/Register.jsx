import React from "react";
import "./Login.css";

import { useFormik } from "formik";
import { registerSchema } from "../schemas/index";

function Register() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    cpassword: "",
  };

  let { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: registerSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form>
        <h3>Register Here</h3>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Email or Phone"
          id="username"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.name && errors.name ? <p>{errors.name}</p> : null}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {touched.email && errors.email ? <p>{errors.email}</p> : null}

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          value={values.password}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {touched.password && errors.password ? <p>{errors.password}</p> : null}
        <label htmlFor="cpassword">Password</label>
        <input
          type="password"
          placeholder="Confirm Password"
          id="cpassword"
          value={values.cpassword}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {touched.cpassword && errors.cpassword ? (
          <p>{errors.cpassword}</p>
        ) : null}

        <button onClick={handleSubmit}>Log In</button>
      </form>
    </>
  );
}

export default Register;
