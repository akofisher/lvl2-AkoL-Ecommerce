import Slider from '@material-ui/core/Slider'
import { makeStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
    padding: '14px 44px',
  },
  margin: {
    height: theme.spacing(3),
  },
  FLEX: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}))

function ValueLabelComponent(props) {
  const { children, open, value } = props

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  )
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
}

export default function PriceSlider() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.margin} />
      <Typography gutterBottom>Price</Typography>
      <Slider
        ValueLabelComponent={ValueLabelComponent}
        aria-label="custom thumb label"
        defaultValue={20}
      />
      <div className={classes.FLEX}>
        <p>0$</p>
        <p>100$</p>
      </div>
    </div>
  )
}
