import React, { Component } from "react"
import GlobalProvider from "./context/GlobalProvider"
import DemoContainer from "./container/DemoContainer"
import { ThemeProvider } from "styled-components"
import defaultTheme from "./style/defaultTheme"

export default class App extends Component {
  render() {
    return (
      <GlobalProvider>
        <ThemeProvider theme={defaultTheme}>
          <DemoContainer />
        </ThemeProvider>
      </GlobalProvider>
    )
  }
}
