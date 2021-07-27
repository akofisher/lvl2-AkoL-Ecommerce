import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'
import { useState } from 'react'
import { useEffect } from 'react'
import Loader from './Loader'
import { Link } from 'react-router-dom'
import { SINGLE_LIST, PRODUCT_LIST } from '../../../../routes'
import { useFetch } from '../../../../Hooks/CustomApiHook'

const useStyles = makeStyles((theme) => ({
  media: {
    height: 140,
  },
  flexible: {
    display: 'flex',
    padding: '60px 34px',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  padd: {
    margin: theme.spacing(2),
    textAlign: 'center',
    height: '250px',
  },
}))

export default function FakeStore() {
  const classes = useStyles()

  const { data, error, isLoading, products } = useFetch(
    `${PRODUCT_LIST}?limit=8`,
    {
      method: 'get',
    },
  )

  return (
    <React.Fragment>
      <Grid container className={classes.flexible}>
        <Loader isLoading={isLoading}>
          {!!products.length &&
            products.map((data) => {
              return (
                <Grid xs={12} md={4} key={data.id}>
                  <Card className={classes.padd}>
                    <CardActionArea
                      component={Link}
                      to={SINGLE_LIST.replace(':id', data.id)}
                    >
                      <CardMedia
                        className={classes.media}
                        image={data.image}
                        title={data.title}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="p" component="p">
                          {data.title}
                        </Typography>
                        <Typography gutterBottom component="h2">
                          {data.price}$
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              )
            })}
        </Loader>
      </Grid>
    </React.Fragment>
  )
}
