import React, { useCallback, useContext } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import { AppContext } from '../Context'

export default function FirstStep() {
  const { formValues, handleChange, handleNext, variant, margin } = useContext(AppContext)
  const { name, sport, gender, dob } = formValues

  // Check if all values are not empty and if there are some errors
  const isError = useCallback(
    () =>
      Object.keys({ name, sport, gender, dob }).some(
        (name) => (formValues[name].required && !formValues[name].value) || formValues[name].error
      ),
    [formValues, name, sport, gender, dob]
  )

  const sportList = [
    'American Football',
    'Aquatics',
    'Archery',
    'Automobile Racing',
    'Badminton',
    'Baseball',
    'Basketball',
    'Beach Volleyball',
    'Bobsleigh',
    'Body Building',
    'Boxing',
    'Cricket',
    'Cross Country Running',
    'Cross Country Skiing',
    'Curling',
    'Cycling',
    'Darts',
    'Decathlon',
    'Down Hill Skiing',
    'Equestrianism',
    'eSports',
    'Fencing',
    'Field Hockey',
    'Figure Skating',
    'Golf',
    'Gymnastics',
    'Ice Hockey',
    'Martial Arts',
    'Mixed Martial Arts',
    'Modern Pentathlon',
    'Motorcycle Racing',
    'Netball',
    'Polo',
    'Racquetball',
    'Rowing',
    'Rugby',
    'Sailing',
    'Shooting',
    'Skateboarding',
    'Skeet Shooting',
    'Skeleton',
    'Snow Boarding',
    'Soccer (Football)',
    'Softball',
    'Squash',
    'Surfing',
    'Swimming',
    'Tennis',
    'Track and Field'
  ]
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label='Name'
            name='name'
            placeholder='Your first name'
            value={name.value}
            onChange={handleChange}
            error={!!name.error}
            helperText={name.error}
            required={name.required}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            select
            SelectProps={{
              multiple: true
            }}
            label='Sport'
            name='sport'
            value={sport.value}
            onChange={handleChange}
            error={!!sport.error}
            // helperText={sport.error}
            required={sport.required}
          >
            {sportList.map((sport) => (
              <MenuItem value={sport}>{sport}</MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            select
            label='Gender'
            name='gender'
            value={gender.value}
            onChange={handleChange}
            error={!!gender.error}
            helperText={gender.error}
            required={gender.required}
          >
            <MenuItem value='Male'>Male</MenuItem>
            <MenuItem value='Female'>Female</MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
            label='Date of birth'
            name='dob'
            type='date'
            defaultValue={dob.value}
            onChange={handleChange}
            required={dob.required}
          />
        </Grid>
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant='contained'
          sx={{ mt: 3, ml: 1 }}
          disabled={isError()}
          color='primary'
          onClick={!isError() ? handleNext : () => null}
        >
          Next
        </Button>
      </Box>
    </>
  )
}
