import React, { Component, Fragment } from "react"
import GlobalContext from "../context/GlobalContext"
import DemoTitle from "../presentational/DemoTitle"
import DemoPara from "../presentational/DemoPara"

export default class DemoContainer extends Component {
  render() {
    return (
      <GlobalContext.Consumer>
        {context => (
          <Fragment>
            <DemoTitle>{context.globalState?.demoString}</DemoTitle>
            <DemoPara>Okay it looks like everything is working!</DemoPara>
          </Fragment>
        )}
      </GlobalContext.Consumer>
    )
  }
}
