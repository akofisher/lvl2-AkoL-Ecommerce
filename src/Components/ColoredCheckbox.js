import Checkbox from '@material-ui/core/Checkbox'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    maxWidth: '300px',
  },
  PAD: {
    padding: '24px',
    maxWidth: '300px',
  },
  title: {
    paddingLeft: '10px',
  },
  FLEX: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}))

export default function ColoredCheckbox() {
  const classes = useStyles()
  const [checked, setChecked] = React.useState([0])

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
  }

  return (
    <List className={(classes.root, classes.PAD)}>
      <Typography variant="h6" className={classes.title}>
        Color
      </Typography>
      <div className={classes.FLEX}>
        {[
          'black',
          'red',
          'blue',
          'green',
          'orange',
          'purple',
          'gray',
          'white',
        ].map((value) => {
          return (
            <ListItem
              key={value}
              role={undefined}
              dense
              button
              onClick={handleToggle(value)}
              style={{ width: 'auto' }}
            >
              <Checkbox
                edge="start"
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                style={{
                  backgroundColor: `${value}`,
                  border: '1px solid black',
                  color: 'transparent',
                }}
              />
            </ListItem>
          )
        })}
      </div>
    </List>
  )
}
