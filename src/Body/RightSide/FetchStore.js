import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'
// import { useState, useEffect } from 'react'

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
  // const [products, setProducts] = useState([])
  const classes = useStyles()

  // useEffect(() => {
  //   fetch('https://fakestoreapi.com/products?limit=9')
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data))
  // }, [])

  return (
    <React.Fragment>
      <Grid container className={classes.flexible}>
        <Grid md={4}>
          <Card className={classes.padd}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://sportmaster.ge/wp-content/uploads/2019/04/3-35.jpg"
                title="title"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  მაისური
                </Typography>
                <Typography gutterBottom component="h2">
                  0.50$
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid md={4}>
          <Card className={classes.padd}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://sportmaster.ge/wp-content/uploads/2019/04/3-35.jpg"
                title="title"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  მაისური
                </Typography>
                <Typography gutterBottom component="h2">
                  0.50$
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid md={4}>
          <Card className={classes.padd}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://sportmaster.ge/wp-content/uploads/2019/04/3-35.jpg"
                title="title"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  მაისური
                </Typography>
                <Typography gutterBottom component="h2">
                  0.50$
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid md={4}>
          <Card className={classes.padd}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://sportmaster.ge/wp-content/uploads/2019/04/3-35.jpg"
                title="title"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  მაისური
                </Typography>
                <Typography gutterBottom component="h2">
                  0.50$
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid md={4}>
          <Card className={classes.padd}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://sportmaster.ge/wp-content/uploads/2019/04/3-35.jpg"
                title="title"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  მაისური
                </Typography>
                <Typography gutterBottom component="h2">
                  0.50$
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid md={4}>
          <Card className={classes.padd}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://sportmaster.ge/wp-content/uploads/2019/04/3-35.jpg"
                title="title"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  მაისური
                </Typography>
                <Typography gutterBottom component="h2">
                  0.50$
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid md={4}>
          <Card className={classes.padd}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://sportmaster.ge/wp-content/uploads/2019/04/3-35.jpg"
                title="title"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  მაისური
                </Typography>
                <Typography gutterBottom component="h2">
                  0.50$
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid md={4}>
          <Card className={classes.padd}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://sportmaster.ge/wp-content/uploads/2019/04/3-35.jpg"
                title="title"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  მაისური
                </Typography>
                <Typography gutterBottom component="h2">
                  0.50$
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid md={4}>
          <Card className={classes.padd}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://sportmaster.ge/wp-content/uploads/2019/04/3-35.jpg"
                title="title"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  მაისური
                </Typography>
                <Typography gutterBottom component="h2">
                  0.50$
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
