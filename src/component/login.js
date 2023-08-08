import React from 'react'
import {  Button, Grid, Paper, TextField, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom';

function login() {
    const paperStyle = {
        padding: '30px 20px',
        width: 300,
        margin: "20px auto"
    }
    const headerStyle = {
        margin: 0,
    }
    
  return (
    <div>
            <Grid>
                <Paper elevation={20} style={paperStyle}>
                    <Grid align='center'>          
                    <h2 style={headerStyle}>Log in</h2>
                        <Typography variant='caption' style={{fontWeight:"bold"}}>Please fill the deatils to login!</Typography>
                    </Grid>

                    <form>
                        <TextField fullWidth label='Email' placeholder='Enter your Email' />
                        <TextField fullWidth label='Password' placeholder='Enter your Password' />

                        <Button type='submit' variant='contained' color='primary'>Log in</Button>
                    </form>
                    <span>Not registered? <Link to="/" style={{
          textDecoration: 'none',
          fontWeight: 'bold',
        }}>SignUp</Link></span>
                </Paper>

            </Grid>

        </div>
  )
}

export default login