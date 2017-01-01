import React, { PropTypes } from "react"
import { Link } from "phenomic"
import Svg from "react-svg-inline"

import twitterSvg from "../icons/iconmonstr-twitter-1.svg"
import gitHubSvg from "../icons/iconmonstr-github-1.svg"
import avatarImgSrc from "../../../content/assets/avatar.jpeg"

import {Starfield, Expander} from 'starfield-react'
let ExpandingStarfield = Expander(Starfield)

import styles from "./index.css"

const Header = (props, { metadata: { pkg } }) => (
  <header className={ styles.header }>
    <nav className={ styles.nav }>
      <div className={ styles.navPart1 }>
        <Link
          className={styles.avatarLink}
          to={ "/" }
        >
            <img className={styles.avatarImage} src={ avatarImgSrc } />
        </Link>
      </div>
      <div className={ styles.navPart2 }>
        {
          pkg.twitter &&
          <a
            href={ `https://twitter.com/${pkg.twitter}` }
            className={ styles.link }
          >
            <Svg svg={ twitterSvg } cleanup />
          </a>
        }
        {
          pkg.repository &&
          <a
            href={ pkg.repository }
            className={ styles.link }
          >
            <Svg svg={ gitHubSvg } cleanup />
          </a>
        }
      </div>
    </nav>

      <ExpandingStarfield
          className={ styles.starfield }
          height={200}
          starCount={900}
          strokeStyle={randomColor()}
      />
  </header>
)

Header.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Header

function randomColor() {
    let chars = '0123456789ABCDEF'
    let color = new Array(6)
        .fill(null)
        .map(() => chars[Math.floor(Math.random() * chars.length)])
        .join('')

    return `#${color}`
}