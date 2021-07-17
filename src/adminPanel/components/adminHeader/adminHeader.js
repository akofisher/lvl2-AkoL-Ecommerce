import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

export default function AdminHeader() {
  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Admin Panel</Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}
