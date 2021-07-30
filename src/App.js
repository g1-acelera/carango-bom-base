import React from "react"

import { ThemeProvider } from "@material-ui/core/styles"
import { muiTheme, defaultStyles } from "./@material/Theme"
import { CssBaseline } from "@material-ui/core"

import Routes from "./routes"

const App = () => {
  const classes = defaultStyles()

  return (
    <ThemeProvider theme={muiTheme}>
      <div className={classes.root}>
        <CssBaseline />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Routes />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
