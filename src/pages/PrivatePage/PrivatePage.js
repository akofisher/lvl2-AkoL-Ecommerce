import React from 'react'
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core'
import Loyout from '../../Loyout/Loyout'
// import { UserContext } from '../../store/UserProvider'
import { useSelector } from 'react-redux'
import { selectLogedIn, selectUser } from '../../store/user/userSelector'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 340,
  },
})
const PrivatePage = () => {
  // const userData = useContext(UserContext)
  const classes = useStyles()
  const user = useSelector(selectUser)
  const isLogedIn = useSelector(selectLogedIn)

  return (
    <React.Fragment>
      {isLogedIn ? (
        <Loyout>
          <Box padding="70px ">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={user.avatar}
                  title="Contemplative Reptile"
                />
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
          </Box>
        </Loyout>
      ) : (
        ''
      )}
    </React.Fragment>
  )
}

export default PrivatePage
