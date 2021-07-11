import React from 'react'
import Rating from '@material-ui/lab/Rating'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  Flex: {
    display: 'flex',
    justifyContent: 'baseline',
  },
  FntSize: {
    fontSize: '10px',
    padding: '5px',
  },
  title: {
    paddingLeft: '15px',
  },
  PAD: {
    padding: '24px',
  },
}))

export default function RatingList() {
  const [value, setValue] = React.useState(4)
  const classes = useStyles()

  return (
    <div className={classes.PAD}>
      <Typography className={classes.title} variant="h6">
        Avg. Customer Review
      </Typography>
      <Box
        className={classes.Flex}
        component="fieldset"
        borderColor="transparent"
      >
        <Rating name="simple-controlled" value={value} />
        <Typography className={classes.FntSize} component="p">
          {' '}
          & UP
        </Typography>
      </Box>
      <Box
        className={classes.Flex}
        component="fieldset"
        borderColor="transparent"
      >
        <Rating name="simple-controlled" value={value - 1} />
        <Typography className={classes.FntSize} component="p">
          {' '}
          & UP
        </Typography>
      </Box>
      <Box
        className={classes.Flex}
        component="fieldset"
        borderColor="transparent"
      >
        <Rating name="simple-controlled" value={value - 2} />
        <Typography className={classes.FntSize} component="p">
          {' '}
          & UP
        </Typography>
      </Box>
      <Box
        className={classes.Flex}
        component="fieldset"
        borderColor="transparent"
      >
        <Rating name="simple-controlled" value={value - 3} />
        <Typography className={classes.FntSize} component="p">
          {' '}
          & UP
        </Typography>
      </Box>
    </div>
  )
}
