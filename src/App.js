import React from 'react'
import './App.scss'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Box } from '@material-ui/core'
import Header from './Header/Header'
import Body from './Body/Body'

const useStyles = makeStyles((theme) => ({
  grid: {
    width: '100%',
    margin: '0px',
  },
  box: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: theme.palette.success.light,
  },
}))

function App() {
  const classes = useStyles()

  return (
    <Grid container className={classes.grid}>
      <Header />

      <Body />

      <Grid item xs={12}>
        <Box className={classes.box}>3</Box>
      </Grid>
    </Grid>
  )
}

export default App
