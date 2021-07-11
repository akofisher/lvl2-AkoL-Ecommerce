import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'
import { useState } from 'react'

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
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}))

export default function FakeStore() {
  const classes = useStyles()
  const [products, setProducts] = useState([
    {
      id: 1,
      img: 'https://sportmaster.ge/wp-content/uploads/2019/04/3-35.jpg',
      title: 'მაისური',
      price: '0.50$',
    },
    {
      id: 2,
      img: 'https://sportmaster.ge/wp-content/uploads/2019/04/3-35.jpg',
      title: 'მაისური',
      price: '0.60$',
    },
    {
      id: 3,
      img: 'https://sportmaster.ge/wp-content/uploads/2019/04/3-35.jpg',
      title: 'მაისური',
      price: '0.70$',
    },
    {
      id: 4,
      img: 'https://sportmaster.ge/wp-content/uploads/2019/04/3-35.jpg',
      title: 'მაისური',
      price: '0.80$',
    },
    {
      id: 5,
      img: 'https://sportmaster.ge/wp-content/uploads/2019/04/3-35.jpg',
      title: 'მაისური',
      price: '0.90$',
    },
    {
      id: 6,
      img: 'https://sportmaster.ge/wp-content/uploads/2019/04/3-35.jpg',
      title: 'მაისური',
      price: '1$',
    },
    {
      id: 7,
      img: 'https://sportmaster.ge/wp-content/uploads/2019/04/3-35.jpg',
      title: 'მაისური',
      price: '2$',
    },
    {
      id: 8,
      img: 'https://sportmaster.ge/wp-content/uploads/2019/04/3-35.jpg',
      title: 'მაისური',
      price: '3$',
    },
    {
      id: 9,
      img: 'https://sportmaster.ge/wp-content/uploads/2019/04/3-35.jpg',
      title: 'მაისური',
      price: '4$',
    },
  ])

  return (
    <React.Fragment>
      <Grid container className={classes.flexible}>
        {products.map((data) => {
          return (
            <Grid xs={12} md={4} key={data.id}>
              <Card className={classes.padd}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={data.img}
                    title={data.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {data.title}
                    </Typography>
                    <Typography gutterBottom component="h2">
                      {data.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </React.Fragment>
  )
}
