import { Box, Grid } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Delete from '../../Components/Delete'
import Quantity from '../../Components/Quantity'
import { SINGLE_LIST } from '../../routes'
import { addCartProducts } from '../../store/products/prodSelector'

const useStyles = makeStyles((theme) => ({
  media: {
    height: '25vh',
    width: '35vw',
  },
  flexible: {
    display: 'flex',
    flexDirection: 'column',
  },
  padd: {
    display: 'flex',
    margin: theme.spacing(2),
    textAlign: 'center',
    maxHeight: '300px',
    width: '50vw',
  },
  fle: {
    display: 'flex',
    flexDirection: 'column',
    margin: '50px 50px 0 0',
  },
}))

export default function CartPage() {
  const classes = useStyles()
  // const [data, setData] = useState([])

  const data = useSelector(addCartProducts)

  return (
    <React.Fragment>
      <Grid container className={classes.flexible}>
        {!!data &&
          data.map((data) => {
            return (
              <Grid xs={12} md={4} key={data.cartProducts.id}>
                <Card className={classes.padd}>
                  <CardActionArea
                    component={Link}
                    to={SINGLE_LIST.replace(':id', data.cartProducts.id)}
                  >
                    <CardMedia
                      className={classes.media}
                      image={data.cartProducts.image}
                    />
                    <CardContent className={classes.media}>
                      <Typography gutterBottom variant="p" component="p">
                        {data.cartProducts.title}
                      </Typography>
                      <Typography gutterBottom component="h2">
                        {data.cartProducts.price}$
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <Box className={classes.fle}>
                    <Quantity />
                    <Delete />
                  </Box>
                </Card>
              </Grid>
            )
          })}
      </Grid>
    </React.Fragment>
  )
}
