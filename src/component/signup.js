import React from 'react'
import {Grid,Paper} from '@material-ui/core'
function signup() {
    const paperStyle={
       padding:'30px 20px',
       width:300,
       margin:"20px auto"
    }
    const headerStyle={
        margin:0,
    }
  return (
    <div>
    <Grid>
      <Paper  elevation={20} style={paperStyle}>
        <h2 style={headerStyle}>Sign Up</h2>
      </Paper>

    </Grid>

    </div>
  )
}

export default signup