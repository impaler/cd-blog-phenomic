import React  from "react"
import Page from "../Page"
import LatestPosts from "../../components/LatestPosts"

const PostsPage = (props) => {
  return (
    <Page { ...props } >
      <LatestPosts />
    </Page>
  )
}

export default PostsPage
