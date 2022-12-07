import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardActionArea from '@mui/material/CardActionArea'

export default function Success() {
  const [users, setUsers] = useState([])
  const theme = useTheme()

  const getUsers = async () => {
    const { data } = await axios.get('/api/users')
    setUsers(data)
  }

  useEffect(() => {
    getUsers()
  }, [])

  // console.log(users)

  return (
    <Grid container direction='column' justifyContent='center' alignItems='center' spacing={2}>
      {users &&
        users.length > 0 &&
        users.map((user: any) => (
          <Grid item xs='auto'>
            <Card sx={{ width: 345 }}>
              <CardActionArea>
                <CardMedia component='img' height='220' image={user.profileImage} />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    {user.name}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    DOB: {new Date(user.dob).toLocaleDateString('en-US')}
                    <br />
                    Gender: {user.gender}
                    <br />
                    Location: {user.location} <br />
                    Sports: {user.sport.join(',')} <br />
                    Team: {user.team}
                  </Typography>
                  <Typography variant='h6' component='h2'>
                    About
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {user.about}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>{' '}
          </Grid>
        ))}
    </Grid>
  )
}
