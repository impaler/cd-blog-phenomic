import React, { Component } from "react"

import Page from "../Page"

class Post extends Component {
  
  render() {
    const { props } = this

    return (
      <Page
        { ...props}
      />
    )
  }
}

export default Post
