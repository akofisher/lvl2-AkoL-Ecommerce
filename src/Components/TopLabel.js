import { Box, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ViewListIcon from '@material-ui/icons/ViewList'
import ViewModuleIcon from '@material-ui/icons/ViewModule'
import Pagination from '@material-ui/lab/Pagination'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
  flexible: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    paddingTop: '60px',
    paddingRight: '34px',
  },
}))

export default function TopLabel() {
  const classes = useStyles()
  return (
    <Grid container className={classes.flexible}>
      <Box xs={4}>
        <ViewListIcon style={{ fontSize: '35px', cursor: 'pointer' }} />
        <ViewModuleIcon style={{ fontSize: '35px', cursor: 'pointer' }} />
      </Box>
      <Box xs={4}>Label Example</Box>
      <Box xs={4} className={classes.root}>
        <Pagination count={3} color="primary" />
      </Box>
    </Grid>
  )
}
