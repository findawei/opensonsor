import React, { useContext } from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import axios from 'axios'
import { AppContext, ContextProps } from '../Context'
import { initialValues } from '../initialValues'

export default function Confirm() {
  let { formValues, handleBack, handleNext } = useContext(AppContext)
  const { name, sport, gender, dob, about, location, team, interests, profileImage } = formValues

  const handleSubmit = () => {
    // Remove unwanted properties from formValue object
    let form = {}

    Object.keys(formValues).map((name) => {
      form = {
        ...form,
        [name]: formValues[name].value
      }
      return form
    })
    // Do whatever with the values
    console.log(form)
    axios.post('api/users', form)

    // Show last component or success message
    handleNext()
    formValues = initialValues
  }

  return (
    <>
      <List disablePadding>
        <ListItem>
          <ListItemText primary='Name' secondary={name.value || 'Not Provided'} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary='Sport' secondary={sport.value.join(', ') || 'Not Provided'} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary='Gender' secondary={gender.value || 'Not Provided'} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary='Date of birth' secondary={dob.value || 'Not Provided'} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary='About' secondary={about.value || 'Not Provided'} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary='Location' secondary={location.value || 'Not Provided'} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary='Team' secondary={team.value || 'Not Provided'} />
        </ListItem>
        <Divider />

        <ListItem>
          <ListItemText primary='Team' secondary={team.value || 'Not Provided'} />
        </ListItem>
        <Divider />

        <ListItem>
          <ListItemText primary='Interests' secondary={interests.value || 'Not Provided'} />
        </ListItem>
        <Divider />

        <ListItem>
          <ListItemText primary='profileImage' secondary={profileImage.value || 'Not Provided'} />
        </ListItem>
      </List>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
        <Button sx={{ mr: 1 }} onClick={handleBack}>
          Back
        </Button>
        <Button variant='contained' color='success' onClick={handleSubmit}>
          Confirm & Continue
        </Button>
      </Box>
    </>
  )
}
