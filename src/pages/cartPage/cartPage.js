import { Grid } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Delete from '../../Components/Delete'
import Loader from '../../Components/Loader'
import Quantity from '../../Components/Quantity'
import { Api } from '../../Hooks/CustomApiHook'
import { SINGLE_LIST } from '../../routes'
import { addProducts, setProducts } from '../../store/products/prodActionCreat'

const useStyles = makeStyles((theme) => ({
  media: {
    height: 90,
  },
  flexible: {
    display: 'flex',
    flexDirection: 'column',
  },
  padd: {
    margin: theme.spacing(2),
    textAlign: 'center',
    height: '250px',
  },
}))

export default function CartPage() {
  const classes = useStyles()
  // const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const data = useSelector(addProducts)

  useEffect(() => {
    setLoading(true)
    Api.getProductList()
      .then((data) => {
        // setData(el)
        dispatch(setProducts(data))
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [])

  return (
    <React.Fragment>
      <Grid container className={classes.flexible}>
        <Loader loading={loading}>
          {!!data.length &&
            data.map((data) => {
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
                      <CardContent className={classes.media}>
                        <Typography gutterBottom variant="p" component="p">
                          {data.title}
                        </Typography>
                        <Typography gutterBottom component="h2">
                          {data.price}$
                        </Typography>
                      </CardContent>
                    </CardActionArea>

                    <Quantity />
                    <Delete />
                  </Card>
                </Grid>
              )
            })}
        </Loader>
      </Grid>
    </React.Fragment>
  )
}
