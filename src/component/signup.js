import React from 'react'
import { Avatar, Button, Grid, Paper, TextField, Typography } from '@material-ui/core'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import { Link } from 'react-router-dom';
import signupImg from '../img/registerFrame.png'
import './signup.css'

import Checkbox from '@mui/material/Checkbox';
function signup() {
    const paperStyle = {
        padding: '30px 20px',
        width: 300,
        margin: "20px auto"
    }
    const headerStyle = {
        margin: 0,
    }
    const marginTop = {
        marginTop: 5,
    }
    return (
        <>
            <Grid container spacing={2} alignItems="center">
                


                <Grid item xs={12} sm={6}>
                    <Paper elevation={20} style={paperStyle}>
                        <Grid align='center'>
                            <Avatar>
                                <PersonAddAlt1OutlinedIcon />
                            </Avatar>
                            <h2 style={headerStyle}>Sign Up</h2>
                            <Typography variant='caption' style={{ fontWeight: "bold" }}>Please fill yhe deatils to signup!</Typography>
                        </Grid>

                        <form>
                            <TextField fullWidth label='Name' placeholder='Enter your Name' />
                            <TextField fullWidth label='Email' placeholder='Enter your Email' />


                            <FormControl style={marginTop}>
                                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />

                                </RadioGroup>
                            </FormControl>






                            <TextField fullWidth label='Phone Number' placeholder='Enter your Phone Number' />
                            <TextField fullWidth label='Password' placeholder='Enter your Password' />
                            <TextField fullWidth label='Confirm Password' placeholder='Confirm your Password' />

                            <FormControlLabel required control={<Checkbox />} label="I accept the terms and conditions" />


                            <Button type='submit' variant='contained' color='primary'>Sign Up</Button>
                        </form>
                        <span>Already signed up <Link to="/login" style={{
                            textDecoration: 'none',
                            fontWeight: 'bold',
                        }}>Login</Link></span>
                    </Paper>

                </Grid>

                {/* Image Column */}
                <Grid item xs={12} sm={6}>
                    <div className="signup-image">
                        <img src={signupImg} alt="Login" />
                    </div>
                </Grid>
            </Grid>

        </>
    )
}

export default signup


