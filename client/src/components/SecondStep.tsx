import React, { useCallback, useContext } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormHelperText from '@mui/material/FormHelperText'
import Checkbox from '@mui/material/Checkbox'
import { AppContext } from '../Context'

export default function SecondStep() {
  const { formValues, handleChange, handleBack, handleNext, variant, margin } = useContext(AppContext)
  const { about, location, team, interests, profileImage } = formValues

  const isError = useCallback(
    () =>
      Object.keys({ about, location, team, interests, profileImage }).some(
        (name) => (formValues[name].required && !formValues[name].value) || formValues[name].error
      ),
    [formValues, about, location, team, interests, profileImage]
  )

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label='About'
            name='about'
            placeholder='About you'
            value={about.value}
            onChange={handleChange}
            error={!!about.error}
            helperText={about.error}
            required={about.required}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label='location'
            name='location'
            placeholder='Enter your location'
            value={location.value}
            onChange={handleChange}
            error={!!location.error}
            helperText={location.error}
            required={location.required}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label='Team'
            name='team'
            placeholder='Enter your team'
            value={team.value}
            onChange={handleChange}
            error={!!team.error}
            helperText={team.error}
            required={team.required}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label='Interests'
            name='interests'
            placeholder='Enter your interests'
            value={interests.value}
            onChange={handleChange}
            error={!!interests.error}
            helperText={interests.error}
            required={interests.required}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label='profileImage'
            name='profileImage'
            placeholder='Enter your profileImage'
            value={profileImage.value}
            onChange={handleChange}
            error={!!profileImage.error}
            helperText={profileImage.error}
            required={profileImage.required}
          />
        </Grid>
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
        <Button onClick={handleBack} sx={{ mr: 1 }}>
          Back
        </Button>
        <Button variant='contained' disabled={isError()} color='primary' onClick={!isError() ? handleNext : () => null}>
          Next
        </Button>
      </Box>
    </>
  )
}
