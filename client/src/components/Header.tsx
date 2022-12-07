import React, { memo } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
// import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Athlete Profile Form
          </Typography>
          <Button color='inherit' href='/'>
            Add athlete
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default memo(Header)
