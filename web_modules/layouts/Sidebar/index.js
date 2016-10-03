import React, { Component } from "react"
import styles from "./sidebar.css"
import { Link } from "react-router"

class Sidebar extends Component {
  render() {
    return (
            <div className={ styles.sidebar }>
                  <Link to="/">
                      <img className={ styles.avatar }
                        width="100" height="100" src="/assets/avatar.jpeg"
                      />
                </Link>
            </div>
        )
  }
}
export default Sidebar