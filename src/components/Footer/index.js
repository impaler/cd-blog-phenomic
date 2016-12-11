import React from "react"

import styles from "./index.css"

const Footer = () => (
  <footer className={ styles.footer }>
    <p>
      <a
        href="/"
        className={ styles.phenomicReference }
      >
        { "christopherdecoster.com" }
      </a>
    </p>
  </footer>
)

export default Footer
