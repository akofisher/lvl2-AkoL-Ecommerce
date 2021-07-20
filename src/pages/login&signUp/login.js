// import React from 'react'
// import { makeStyles } from '@material-ui/core'
// import { Grid } from '@material-ui/core'
// import { Formik } from 'formik'
// import { Typography } from '@material-ui/core'
// import Footer from '../../loyout/footer/footer'
// import { useFormik } from 'formik'

// import ButtonAppBar from '../../loyout/header/components/NavBar'

// const useStyles = makeStyles((theme) => ({
//   padd: {
//     padding: '150px 0px',
//   },
//   flexible: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   marG: {
//     margin: '10px',
//   },
// }))

// export default function Login() {
//   const classes = useStyles()

//   useEffect(() => {
//     if (isSubmiting) {
//       formik.handleSubmit()
//     }
//   }, [isSubmiting])
//   const classes = useStyles()

//   const formik = useFormik({
//     initialValues: {
//       title: '',
//       price: '',
//     },
//     validate,
//     onSubmit: (values) => {
//       alert(JSON.stringify(values, null, 2))
//       callback()
//     },
//   })

//   return (
//     <React.Fragment>
//       <ButtonAppBar />
//       <Grid container className={classes.padd}>
//         <form onSubmit={formik.handleSubmit} className={classes.flexible}>
//           <TextField
//             id="email"
//             name="email"
//             type="email"
//             onChange={formik.handleChange}
//             value={formik.values.email}
//             variant="outlined"
//             label="Your email"
//             className={classes.marG}
//           />
//           {formik.errors.email ? <div>{formik.errors.email}</div> : null}

//           <TextField
//             id="password"
//             name="password"
//             type="password"
//             onChange={formik.handleChange}
//             value={formik.values.password}
//             variant="outlined"
//             label="Your password"
//             className={classes.marG}
//           />
//           {formik.errors.password ? <div>{formik.errors.password}</div> : null}
//         </form>
//       </Grid>
//       <Footer />
//     </React.Fragment>
//   )
// }
