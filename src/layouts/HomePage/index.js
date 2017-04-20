import React, { PropTypes } from "react"
import { Link } from "phenomic"
import Svg from "react-svg-inline"

import twitterSvg from "../../components/icons/iconmonstr-twitter-1.svg"
import gitHubSvg from "../../components/icons/iconmonstr-github-1.svg"
import avatarImgSrc from "../../../content/assets/avatar.jpeg"

import styles from "./index.css"

const HomePage = (props, {
                    metadata: { pkg },
                  }) => {
  return (
    <div className={styles.home}>
      <div className={styles.avatar}>
        <Link
          to={ "/blog" }
          title="Read my blog"
        >
          <img src={ avatarImgSrc }/>
        </Link>
      </div>

      <div className={styles.about}>
        <p>Hi I'm Chris, welcome to my little home on the web.
          <br />
          I am a generalist software craftsman who loves <br />
          talking tech, learning, and writing code.
        </p>
      </div>

      <div>
        <div className={styles.blogNavigation}>
          <Link
            to={ "/blog" }
          >
            Read my blog
          </Link>
        </div>
      </div>

      <nav className={styles.profiles}>
        <br />
        <hr />
        <div>
          {
            pkg.twitter &&
            <a
              href={ `https://twitter.com/${pkg.twitter}` }
              title="Catch me on twitter"
            >
              <Svg svg={ twitterSvg } cleanup/>
            </a>
          }
          {
            pkg.repository &&
            <a
              href={ pkg.repository }
              title="Catch me on github"
            >
              <Svg svg={ gitHubSvg } cleanup/>
            </a>
          }
        </div>

      </nav>

    </div>
  )
}

HomePage.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default HomePage
