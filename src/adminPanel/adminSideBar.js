import { Toolbar, Typography } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import { Link } from 'react-router-dom'
import { ADMIN_PRODUCTS } from '../routes'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    zIndex: '1',
  },
  drawerContainer: {
    overflow: 'auto',
  },
}))

export default function AdminSideBar() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <List>
          <ListItem button component={Link} to={ADMIN_PRODUCTS}>
            <Typography variant="h6">Products</Typography>
          </ListItem>
          <ListItem button>
            <Typography variant="h6">Users</Typography>
          </ListItem>
          <ListItem button>
            <Typography variant="h6">Categories</Typography>
          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  )
}
