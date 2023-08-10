import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
    Avatar,
    Button,
    Grid,
    Paper,
    TextField,
    Typography,
} from '@material-ui/core';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import { Link } from 'react-router-dom';
import signupImg from '../img/registerFrame.png';
import './signup.css';
import Checkbox from '@mui/material/Checkbox';

const validationSchema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email address').required('Email is required'),
    phone: yup.string().matches(/^[0-9]+$/, 'Phone number must contain only numbers')
    .required('Phone Number is required'),
    password: yup.string().min(8).max(12).required('Password is required'),
    confirm_password: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    acceptTerms: yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
    gender: yup.string().oneOf(['female', 'male', 'other'], 'Please select a gender').required('Gender is required'),

});

function Signup() {
    const paperStyle = {
        padding: '30px 20px',
        width: 300,
        margin: '20px auto',
    };
    const headerStyle = {
        margin: 0,
    };
    const marginTop = {
        marginTop: 5,
    };

    const handleSubmit = (values) => {
        console.log('Form data submitted:', values);
    };

    return (
        <>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={6}>
                    <Paper elevation={20} style={paperStyle}>
                        <Grid align="center">
                            <Avatar>
                                <PersonAddAlt1OutlinedIcon />
                            </Avatar>
                            <h2 style={headerStyle}>Sign Up</h2>
                            <Typography variant="caption" style={{ fontWeight: 'bold' }}>
                                Please fill the details to sign up!
                            </Typography>
                        </Grid>
                        <Formik
                            initialValues={{
                                name: '',
                                email: '',
                                phone: '',
                                password: '',
                                confirm_password: '',
                                gender:"",
                                acceptTerms: false,
                            }}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            <Form>
                                <Field
                                    as={TextField}
                                    fullWidth
                                    label="Name"
                                    placeholder="Enter your Name"
                                    name="name"
                                />
                                <ErrorMessage name="name" component="div" className="error" />

                                <Field
                                    as={TextField}
                                    fullWidth
                                    label="Email"
                                    placeholder="Enter your Email"
                                    name="email"
                                />
                                <ErrorMessage name="email" component="div" className="error" />

                                <FormControl style={marginTop}>
                                    <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                                    <Field
                                        as={RadioGroup}
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="gender"
                                    >
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                                    </Field>
                                    <ErrorMessage name="gender" component="div" className="error" style={{ color: 'red' }} />
                                </FormControl>
                                           
                    
                                 
                                <Field
                                    as={TextField}
                                    fullWidth
                                    label="Phone Number"
                                    placeholder="Enter your Phone Number"
                                    name="phone"
                                />
                                <ErrorMessage name="phone" component="div" className="error" />

                                <Field
                                    as={TextField}
                                    fullWidth
                                    label="Password"
                                    placeholder="Enter your Password"
                                    type="password"
                                    name="password"
                                />
                                <ErrorMessage name="password" component="div" className="error" />

                                <Field
                                    as={TextField}
                                    fullWidth
                                    label="Confirm Password"
                                    placeholder="Confirm your Password"
                                    type="password"
                                    name="confirm_password"
                                />
                                <ErrorMessage
                                    name="confirm_password"
                                    component="div"
                                    className="error"
                                />

                                <FormControlLabel
                                    control={<Field as={Checkbox} name="acceptTerms" />}
                                    label="I accept the terms and conditions"
                                />
                                <ErrorMessage
                                    name="acceptTerms"
                                    component="div"
                                    className="error"
                                />

                                <Button type="submit" variant="contained" color="primary">
                                    Sign Up
                                </Button>
                            </Form>
                        </Formik>
                        <span>
                            Already signed up{' '}
                            <Link
                                to="/login"
                                style={{
                                    textDecoration: 'none',
                                    fontWeight: 'bold',
                                }}
                            >
                                Login
                            </Link>
                        </span>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className="signup-image">
                        <img src={signupImg} alt="Login" />
                    </div>
                </Grid>
            </Grid>
        </>
    );
}

export default Signup;
