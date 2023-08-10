import React from 'react';
import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import loginImg from '../img/loginFrame.png';
import './login.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup.string().min(8).max(12).required('Password is required'),
});

function Login() {
  const paperStyle = {
    padding: '30px 20px',
    width: 300,
    margin: '20px auto',
  };
  const headerStyle = {
    margin: 0,
  };
  const marginTop = {
    marginTop: 10,
  };

  const handleSubmit = (values) => {
    console.log('Form data submitted:', values);
    // Add your login logic here
  };

  return (
    <>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6}>
          <Paper elevation={20} style={paperStyle}>
            <Grid align="center">
              <h2 style={headerStyle}>Log in</h2>
              <Typography variant="caption" style={{ fontWeight: 'bold' }}>
                Please fill the details to login!
              </Typography>
            </Grid>
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <Field
                  as={TextField}
                  fullWidth
                  label="Email"
                  placeholder="Enter your Email"
                  name="email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error"
                  style={{ color: 'red' }}
                />

                <Field
                  as={TextField}
                  fullWidth
                  label="Password"
                  placeholder="Enter your Password"
                  name="password"
                  type="password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                  style={{ color: 'red' }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={marginTop}
                >
                  Log in
                </Button>
              </Form>
            </Formik>
            <span>
              Not registered?{' '}
              <Link
                to="/"
                style={{
                  textDecoration: 'none',
                  fontWeight: 'bold',
                }}
              >
                SignUp
              </Link>
            </span>
          </Paper>
        </Grid>

        {/* Image Column */}
        <Grid item xs={12} sm={6}>
          <div className="login-image">
            <img src={loginImg} alt="Login" />
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default Login;
