import React from 'react'
import { useFormik } from 'formik'
import { makeStyles } from '@material-ui/core'
import { TextField } from '@material-ui/core'

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = (values) => {
  const errors = {}
  if (!values.title) {
    errors.title = 'Required'
  }

  if (!values.price) {
    errors.price = 'Required'
  }

  if (!values.description) {
    errors.description = 'Required'
  }

  if (!values.image) {
    errors.image = 'Required'
  }

  if (!values.category) {
    errors.category = 'Required'
  }

  return errors
}

const useStyles = makeStyles((theme) => ({
  flexible: {
    display: 'flex',
    flexDirection: 'column',
  },
  marG: {
    margin: '10px',
  },
}))

export default function FormForAdd() {
  const classes = useStyles()
  // Pass the useFormik() hook initial form values, a validate function that will be called when
  // form values change or fields are blurred, and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      title: '',
      price: '',
      description: '',
      image: [],
      category: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  return (
    <form onSubmit={formik.handleSubmit} className={classes.flexible}>
      <TextField
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}
        variant="outlined"
        label="Title"
        className={classes.marG}
      />
      {formik.errors.title ? <div>{formik.errors.title}</div> : null}

      <TextField
        id="price"
        name="price"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.price}
        variant="outlined"
        label="Price"
        className={classes.marG}
      />
      {formik.errors.price ? <div>{formik.errors.price}</div> : null}

      <TextField
        id="description"
        name="description"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.description}
        variant="outlined"
        label="Description"
        className={classes.marG}
      />
      {formik.errors.description ? (
        <div>{formik.errors.description}</div>
      ) : null}

      <TextField
        id="category"
        name="category"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.category}
        variant="outlined"
        label="Category"
        className={classes.marG}
      />
      {formik.errors.category ? <div>{formik.errors.category}</div> : null}

      <input
        id="image"
        name="image"
        type="file"
        onChange={formik.handleChange}
        value={formik.values.image}
        className={classes.marG}
      />
      {formik.errors.image ? <div>{formik.errors.image}</div> : null}
    </form>
  )
}
