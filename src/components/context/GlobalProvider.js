import React, { Component } from "react"
import PropTypes from "prop-types"
import GlobalContext from "./GlobalContext"

export default class GlobalProvider extends Component {
  state = {
    demoString: "Legit React Template"
  }
  render() {
    return (
      <GlobalContext.Provider
        value={{
          globalState: this.state
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    )
  }
}

GlobalProvider.propTypes = {
  children: PropTypes.node
}
