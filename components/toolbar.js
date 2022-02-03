import React from "react"
import Link from "next/link"
import styles from "../styles/Toolbar.module.css"

function Toolbar() {
  return (
    <div className={styles.main}>
      <Link href="/">Home</Link>
      <Link href="/feed/1">Feed</Link>
      <Link href="/about">About</Link>
      <a href="https://newsapi.org" target="_blank" rel="noopener noreferrer">
        News API
      </a>
    </div>
  )
}

export default Toolbar
