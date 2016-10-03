import React, { PropTypes } from "react"
import { Link } from "react-router"

const PagePreview = ({ __url, title, date, tagline }) => {
  const pageDate = date ? new Date(date) : null

  return (
    <div>
      <Link to={ __url }>
        { title }
      </Link>
        <div>
            { tagline }
        </div>
      {
        pageDate &&
        <small>
          { " " }
        </small>
      }
    </div>
  )
}

PagePreview.propTypes = {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  tagline: PropTypes.string,
}

export default PagePreview
