import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { useState, useEffect } from 'react'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
})

export default function FakeStore() {
  const [products, setProducts] = useState([])
  const classes = useStyles()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=9')
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://sportmaster.ge/wp-content/uploads/2019/04/3-35.jpg"
          title="title"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            title
          </Typography>
          <Typography gutterBottom component="h2">
            price
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
