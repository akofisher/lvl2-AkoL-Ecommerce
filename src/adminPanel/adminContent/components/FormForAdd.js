import { makeStyles, TextField } from '@material-ui/core'
import { useFormik } from 'formik'
import React, { useEffect } from 'react'

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

export default function FormForAdd({ isSubmiting, callback }) {
  const [state, setState] = React.useState({})
  useEffect(() => {
    if (isSubmiting) {
      formik.handleSubmit()
    }
  }, [isSubmiting])
  const classes = useStyles()

  const formik = useFormik({
    initialValues: {
      title: '',
      price: '',
      description: '',
      image: [],
      category: '',
    },
    validate,
    onSubmit: async (values) => {
      try {
        const response = await fetch('https://fakestoreapi.com/products', {
          method: 'POST',
          body: JSON.stringify({
            title: values.title,
            price: values.price,
            description: values.desccription,
            image: values.image,
            category: values.category,
          }),
        })

        setState(response)
      } catch (e) {
        console.log(e)
      }

      setTimeout(() => {
        callback()
      }, 2000)
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
      {state.ok == true ? (
        <div
          style={{
            background: 'green',
            color: 'white',
            paddingLeft: '10px',
          }}
        >
          SUCCESS
        </div>
      ) : null}
    </form>
  )
}
