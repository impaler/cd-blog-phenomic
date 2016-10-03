import React, { Component } from "react"
import { Route } from "react-router"

import LayoutContainer from "../LayoutContainer"
import PhenomicPageContainer from "phenomic/lib/PageContainer"

import Page from "../layouts/Page"
import PageError from "../layouts/PageError"
import PageLoading from "../layouts/PageLoading"
import Homepage from "../layouts/Homepage"
import Post from "../layouts/Post"

class PageContainer extends Component {
  render() {
    const { props } = this
    const fontUrl = "http://fonts.googleapis.com/css?" +
        "family=OFL+Sorts+Mill+Goudy+TT:regular,italic"
    return (
      <PhenomicPageContainer
        { ...props }
        layouts={ {
          Page,
          PageError,
          PageLoading,
          Homepage,
          Post,
        } }
      >
        <link href={ fontUrl }
          rel="stylesheet"
          type="text/css"
        />
        </PhenomicPageContainer>
    )
  }
}

export default (
  <Route component={ LayoutContainer }>
    <Route path="*" component={ PageContainer } />
  </Route>
)
