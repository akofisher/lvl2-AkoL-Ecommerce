import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import { Typography } from '@material-ui/core'
import MinMax from './MinMax'

const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  PAD: {
    padding: '14px 44px',
  },

  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow:
      'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#137cbd',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  },
})

// Inspired by blueprintjs
function StyledRadio(props) {
  const classes = useStyles()

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  )
}

export default function RadioList() {
  const classes = useStyles()
  return (
    <FormControl component="fieldset" className={classes.PAD}>
      <Typography variant="h6">Price</Typography>
      <RadioGroup
        defaultValue="UNDER 25$"
        aria-label="price"
        name="customized-radios"
      >
        <FormControlLabel
          value="UNDER 25$"
          control={<StyledRadio />}
          label="UNDER 25$"
        />
        <FormControlLabel
          value="25$ TO 50$"
          control={<StyledRadio />}
          label="25$ TO 50$"
        />
        <FormControlLabel
          value="50$ TO 100$"
          control={<StyledRadio />}
          label="50$ TO 100$"
        />
        <FormControlLabel
          value="100$ TO 200$"
          control={<StyledRadio />}
          label="100$ TO 200$"
        />
        <FormControlLabel
          value="200$ & ABOVE"
          control={<StyledRadio />}
          label="200$ & ABOVE"
        />
      </RadioGroup>
      <MinMax />
    </FormControl>
  )
}
