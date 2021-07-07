import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination'
import { Grid, Box } from '@material-ui/core'
import ViewListIcon from '@material-ui/icons/ViewList'
import ViewModuleIcon from '@material-ui/icons/ViewModule'

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
    padding: '60px 34px',
  },
}))

export default function BottLabel() {
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
