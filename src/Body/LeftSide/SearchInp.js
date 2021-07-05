import React from 'react'
import { fade, withStyles, makeStyles } from '@material-ui/core/styles'
import InputBase from '@material-ui/core/InputBase'
import Typography from '@material-ui/core/Typography'
import SearchIcon from '@material-ui/icons/Search'
import FormControl from '@material-ui/core/FormControl'

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase)

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  PAD: {
    padding: '24px',
  },
  FntSize: {
    fontSize: '25px',
    padding: '8px',
  },
  title: {
    paddingBottom: '20px',
  },
}))

export default function SearchInp() {
  const classes = useStyles()

  return (
    <form className={(classes.root, classes.PAD)} noValidate>
      <FormControl className={classes.margin}>
        <Typography variant="h6" className={classes.title}>
          Filters
        </Typography>
        <div className={classes.root}>
          <BootstrapInput defaultValue="Search..." id="bootstrap-input" />
          <SearchIcon className={classes.FntSize} />
        </div>
      </FormControl>
    </form>
  )
}
