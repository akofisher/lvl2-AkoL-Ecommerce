import { Grid, makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Rating from '@material-ui/lab/Rating'
import React from 'react'
import Buttons from '../../../Components/Buttons'
import Quantity from '../../../Components/Quantity'
import RadioSizes from '../../../Components/RadioSizes'

const useStyles = makeStyles((theme) => ({
  Flex: {
    display: 'flex',
    justifyContent: 'baseline',
    marginLeft: '-15px',
  },
  padd: {
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  roW: {
    display: 'flex',
    alignItems: 'baseline',
    padding: '10px 0px',
  },
  fnt: {
    color: 'gray',
    fontSize: '14px',
  },
  brd: {
    borderBottom: '1px solid black',
  },
  line: {
    border: '1px solid lightgray',
    width: '100%',
    margin: '20px 0',
  },
  flexible: {
    display: 'flex',
    width: '100%',
  },
}))

export default function Titles() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Grid item xs={12} md={6} className={classes.padd}>
        <Typography variant="h6">Blue denim shirt</Typography>
        <Typography variant="p" style={{ fontSize: '12px' }}>
          SHIRTS
        </Typography>
        <Box
          className={classes.Flex}
          component="fieldset"
          borderColor="transparent"
        >
          <Rating name="simple-controlled" value={4} />
        </Box>
        <Typography variant="h6">$17.99</Typography>
        <Typography variant="p" className={classes.roW}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sit
          recusandae asperiores atque libero nobis!
        </Typography>
        <Box className={classes.roW}>
          <Typography variant="h6" style={{ marginRight: '98px' }}>
            Model
          </Typography>
          <Typography variant="p" className={classes.fnt}>
            Shirt 5407X
          </Typography>
        </Box>
        <Box className={classes.roW}>
          <Typography variant="h6" style={{ marginRight: '105px' }}>
            Color
          </Typography>
          <Typography variant="p" className={classes.fnt}>
            Blue
          </Typography>
        </Box>
        <Box className={classes.roW}>
          <Typography variant="h6" style={{ marginRight: '80px' }}>
            Delivery
          </Typography>
          <Typography variant="p" className={classes.fnt}>
            USA, Europe
          </Typography>
        </Box>
        <Box xs={12} className={classes.line}></Box>
        {/* AFTER LINE */}
        <Grid className={classes.flexible}>
          <Grid item xs={12} md={4}>
            <Quantity />
          </Grid>
          <Grid item xs={12} md={8}>
            <RadioSizes />
          </Grid>
        </Grid>
        <Box xs={12}>
          <Buttons />
        </Box>
      </Grid>
    </React.Fragment>
  )
}
