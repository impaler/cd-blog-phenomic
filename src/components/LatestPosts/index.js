import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import PagesList from "../../components/PagesList"

const LatestPosts = (props, { collection }) => {
  const { excludePostTitle } = props
  const limit = props.numberOfPosts || 0
  const options = Object.assign({}, {
    filter: item => item.title !== excludePostTitle && item.layout === "Post",
    reverse: false
  }, { limit })
  const latestPosts = enhanceCollection(collection, options)

  return <PagesList pages={ latestPosts }/>
}

LatestPosts.propTypes = {
  numberOfPosts: PropTypes.number,
  excludePostTitle: PropTypes.string,
}

LatestPosts.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default LatestPosts
