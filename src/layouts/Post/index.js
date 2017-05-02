import React, { PropTypes } from "react"

import LatestPosts from "../../components/LatestPosts"
import Page from "../Page"
import { Link } from "phenomic"

import styles from "./index.css"

const Post = (props) => {
  return (
    <Page { ...props } >
      <div className={styles.more}>
        <hr />
        <LatestPosts
          numberOfPosts={2}
          excludePostTitle={props.head.title}
        />
        <Link to={ "/blog" } className={styles.allPostsButton}>
          All posts
        </Link>
      </div>
    </Page>
  )
}

Post.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Post
