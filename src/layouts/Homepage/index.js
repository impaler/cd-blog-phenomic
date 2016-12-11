import React from "react"

import LatestPosts from "../../components/LatestPosts"
import Page from "../Page"

const numberOfPosts = 0

const Homepage = (props) => {
  return (
    <Page { ...props }>
      <LatestPosts numberOfPosts={numberOfPosts} />
    </Page>
  )
}

export default Homepage
