import React, { PropTypes } from "react"
import { Link } from "phenomic"
import Svg from "react-svg-inline"

import twitterSvg from "../icons/iconmonstr-twitter-1.svg"
import gitHubSvg from "../icons/iconmonstr-github-1.svg"
import avatarImgSrc from "../../../content/assets/avatar.jpeg"

import { ExpandingStarfield, randomColor } from "starfield-react"

import styles from "./index.css"

const Header = (props, { metadata: { pkg } }) => {

  return (<header className={ styles.header }>
    <nav className={ styles.nav }>
      <div className={ styles.navPart1 }>
        <Link
          title="Go home"
          className={styles.avatarLink}
          to={ "/" }
        >
          <img className={styles.avatarImage} src={ avatarImgSrc }/>
        </Link>
      </div>
      <div className={ styles.navPart2 }>
        {
          pkg.twitter &&
          <a
            title="Catch me on twitter"
            href={ `https://twitter.com/${pkg.twitter}` }
            className={ styles.link }
          >
            <Svg svg={ twitterSvg } cleanup/>
          </a>
        }
        {
          pkg.repository &&
          <a
            title="Catch me on github"
            href={ pkg.repository }
            className={ styles.link }
          >
            <Svg svg={ gitHubSvg } cleanup/>
          </a>
        }
      </div>
    </nav>

    <ExpandingStarfield
      className={ styles.starfield }
      height={200}
      count={1300}
      starStyle={randomColor()}
    />
  </header>)
}

Header.contextTypes = {
  metadata: PropTypes.object.isRequired
}

Header.propTypes = {
  current: PropTypes.string
}

export default Header
