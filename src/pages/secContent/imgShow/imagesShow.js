import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { Paper } from '@material-ui/core'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router'
import Loader from '../../content/RightSide/components/Loader'

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
  const [products, setProducts] = useState({})
  const { id } = useParams()
  const [loading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch(`http://159.65.126.180/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts({
          title: data.title,
          price: data.price,
          image: data.image,
          id: data.id,
        })
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return (
    <React.Fragment>
      <Grid item xs={12} md={6} className={classes.padd}>
        <Loader isLoading={loading}>
          <Grid
            xs={12}
            className={classes.img1}
            style={{ backgroundImage: `url("${products.image}")` }}
          ></Grid>

          <Grid container xs={12} className={classes.padd2}>
            <Paper
              item
              xs={3}
              className={classes.img}
              style={{ backgroundImage: `url("${products.image}")` }}
            ></Paper>
            <Paper
              item
              xs={3}
              className={classes.img}
              style={{ backgroundImage: `url("${products.image}")` }}
            ></Paper>
            <Paper
              item
              xs={3}
              className={classes.img}
              style={{ backgroundImage: `url("${products.image}")` }}
            ></Paper>
            <Paper
              item
              xs={3}
              className={classes.img}
              style={{ backgroundImage: `url("${products.image}")` }}
            ></Paper>
          </Grid>
        </Loader>
      </Grid>
    </React.Fragment>
  )
}
