import React from 'react'
import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom';
import loginImg from '../img/loginFrame.png'
import './login.css'

function login() {
    const paperStyle = {
        padding: '30px 20px',
        width: 300,
        margin: "20px auto"
    }
    const headerStyle = {
        margin: 0,
    }
    const marginTop = {
        marginTop: 10,
    }

    return (
        <>
            <Grid container spacing={2} alignItems="center">

               









                <Grid item xs={12} sm={6}>
                    <Paper elevation={20} style={paperStyle}>
                        <Grid align='center'>
                            <h2 style={headerStyle}>Log in</h2>
                            <Typography variant='caption' style={{ fontWeight: "bold" }}>Please fill the deatils to login!</Typography>
                        </Grid>

                        <form>
                            <TextField fullWidth label='Email' placeholder='Enter your Email' />
                            <TextField fullWidth label='Password' placeholder='Enter your Password' />

                            <Button type='submit' variant='contained' color='primary' style={marginTop}>Log in</Button>
                        </form>
                        <span>Not registered? <Link to="/" style={{
                            textDecoration: 'none',
                            fontWeight: 'bold',
                        }}>SignUp</Link></span>
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
    )
}

export default login