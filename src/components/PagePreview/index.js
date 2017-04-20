import React, { PropTypes } from "react"
import { Link } from "phenomic"

import styles from "./index.css"

const PagePreview = ({ __url, title, tags, description }) => {
  return (
    <div className={ styles.wrapper }>
        <Link to={ __url }  title={description}>

        <h3>{ title }</h3>

          <div className={ styles.description }>
                <p>#{tags.split(', ').join(' #')}</p>
          </div>

      </Link>
    </div>
  )
}

PagePreview.propTypes = {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  tags: PropTypes.array,
  description: PropTypes.string,
}

export default PagePreview
