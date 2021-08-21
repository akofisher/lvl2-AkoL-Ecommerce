import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  makeStyles,
  Typography,
} from '@material-ui/core'
import React, { useEffect, useState } from 'react'
// import { UserContext } from '../../store/UserProvider'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Loader from '../../Components/Loader'
import Loyout from '../../Loyout/Loyout'
import { AVATAR_CHANGE } from '../../routes'
import { selectLogedIn, selectUser } from '../../store/user/userSelector'
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 340,
  },
  padd: {
    margin: '20px 40px',
  },
  image: {
    width: 220,
    height: 220,
    borderRadius: '50%',
  },
})
const PrivatePage = () => {
  // const userData = useContext(UserContext)
  const classes = useStyles()
  const user = useSelector(selectUser)
  const isLogedIn = useSelector(selectLogedIn)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
  }, [])

  return (
    <React.Fragment>
      <Loader loading={loading}>
        {isLogedIn ? (
          <Loyout>
            <Box padding="80px ">
              <Card className={classes.root}>
                <CardActionArea>
                  <img src={user.avatar} className={classes.image} alt="Foto" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {user.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {user.email}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Button
                variant="contained"
                color="primary"
                className={classes.padd}
                component={Link}
                to={AVATAR_CHANGE}
              >
                CHANGE AVATAR
              </Button>
            </Box>
          </Loyout>
        ) : (
          ''
        )}
      </Loader>
    </React.Fragment>
  )
}

export default PrivatePage
