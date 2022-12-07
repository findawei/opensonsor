import { ValidationSchema } from './Context'

export const initialValues: ValidationSchema = {
  name: {
    value: '',
    error: '',
    required: true,
    validate: 'text',
    minLength: 2,
    maxLength: 20,
    helperText: 'Custom error message'
  },
  sport: {
    value: [],
    error: '',
    required: true

    // validate: 'select'
  },
  gender: {
    value: '',
    error: '',
    validate: 'select',
    required: true
  },
  dob: {
    value: '',
    error: '',
    required: true
  },
  about: {
    value: '',
    error: '',
    // validate: 'text',
    // minLength: 3,
    // maxLength: 20,
    required: true
  },
  location: {
    value: '',
    error: '',
    validate: 'text',
    minLength: 3,
    maxLength: 20,
    required: true
  },
  team: {
    value: '',
    error: '',
    validate: 'text',
    minLength: 3,
    maxLength: 20,
    required: true
  },
  interests: {
    value: '',
    error: '',
    // validate: 'text',
    minLength: 3,
    required: true

    // maxLength: 20
  },
  profileImage: {
    value: '',
    error: '',
    required: true

    // validate: 'text',
    // minLength: 3,
    // maxLength: 20
  }
  // agreenemt: {
  //   value: false,
  //   error: '',
  //   required: true,
  //   validate: 'checkbox',
  //   helperText: 'Please accept our terms and conditions'
  // },
  // phone: {
  //   value: '',
  //   error: '',
  //   validate: 'phone',
  //   maxLength: 15
  // }
}
