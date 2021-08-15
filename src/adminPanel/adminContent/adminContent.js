import { Grid } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Loader from '../../Components/Loader'
import RespDialog from '../../Components/Modal'
import { Api } from '../../Hooks/CustomApiHook'
import { SINGLE_LIST } from '../../routes'
import { selectLogedIn } from '../../store/user/userSelector'

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

export default function AdminContent() {
  const classes = useStyles()
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const isLogedIn = useSelector(selectLogedIn)

  useEffect(() => {
    setIsLoading(true)
    Api.getProductList()
      .then((el) => {
        setData(el)
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <React.Fragment>
      <Loader isLoading={isLoading}>
        {isLogedIn ? (
          <Grid container className={classes.flexible}>
            <RespDialog />
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
          </Grid>
        ) : (
          ''
        )}
      </Loader>
    </React.Fragment>
  )
}
