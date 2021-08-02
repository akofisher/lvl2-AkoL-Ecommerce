import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { Paper } from '@material-ui/core'
import { useParams } from 'react-router'
import Loader from '../../content/RightSide/components/Loader'
import { useState, useEffect } from 'react'
import { Api } from '../../../Hooks/CustomApiHook'

const useStyles = makeStyles((theme) => ({
  img1: {
    backgroundImage: 'blue',
    border: '1px solid lightgray',
    borderRadius: '5px',
    width: '450px',
    height: '300px',
    marginLeft: '35px',
  },
  img: {
    backgroundSize: 'cover',
    width: '100px',
    height: '80px',
    margin: '10px',
    border: '1px solid lightgray',
    borderRadius: '5px',
  },

  padd: {
    padding: theme.spacing(4),
  },
  padd2: {
    padding: theme.spacing(2),
  },
}))

export default function ImagesShow() {
  const classes = useStyles()
  const { id } = useParams()

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    Api.getSingleProduct(id)
      .then((json) => {
        setData(json)
        console.log(json)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => setIsLoading(false))
  }, [id])

  return (
    <React.Fragment>
      <Grid item xs={12} md={6} className={classes.padd}>
        <Loader isLoading={isLoading}>
          <Grid
            xs={12}
            className={classes.img1}
            style={{ backgroundImage: `url("${data.image}")` }}
          ></Grid>

          <Grid container xs={12} className={classes.padd2}>
            <Paper
              item
              xs={3}
              className={classes.img}
              style={{ backgroundImage: `url("${data.image}")` }}
            ></Paper>
            <Paper
              item
              xs={3}
              className={classes.img}
              style={{ backgroundImage: `url("${data.image}")` }}
            ></Paper>
            <Paper
              item
              xs={3}
              className={classes.img}
              style={{ backgroundImage: `url("${data.image}")` }}
            ></Paper>
            <Paper
              item
              xs={3}
              className={classes.img}
              style={{ backgroundImage: `url("${data.image}")` }}
            ></Paper>
          </Grid>
        </Loader>
      </Grid>
    </React.Fragment>
  )
}
