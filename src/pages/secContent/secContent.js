import { Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Loader from '../../Components/Loader'
import { Api } from '../../Hooks/CustomApiHook'
import Loyout from '../../Loyout/Loyout'
import ScrollToTop from '../../scroll'
import BottPanel from './bottomTitle/bottPanel'
import Titles from './titles/titles'

const useStyles = makeStyles((theme) => ({
  padd: {
    padding: '25px',
    textAlign: 'center',
  },
  flexible: {
    display: 'flex',
  },
  vieW: {
    justifyContent: 'center',
  },
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

  padd4: {
    padding: theme.spacing(4),
  },
  padd2: {
    padding: theme.spacing(2),
  },
}))

export default function SecondBody() {
  const classes = useStyles()
  const { id } = useParams()
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    Api.getSingleProduct(id)
      .then((json) => {
        setData(json)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => setIsLoading(false))
  }, [id])

  return (
    <React.Fragment>
      <Loyout>
        <ScrollToTop />
        <Grid container xs={12}>
          <Grid item xs={12}>
            <Typography variant="h4" className={classes.padd}>
              Product page
            </Typography>
          </Grid>
          <Grid container xs={12} className={classes.flexible}>
            <Grid item xs={12} md={6} className={classes.padd4}>
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
            <Titles data={data} />
          </Grid>
          <Grid container className={classes.vieW} xs={12}>
            <BottPanel />
          </Grid>
        </Grid>
      </Loyout>
    </React.Fragment>
  )
}
