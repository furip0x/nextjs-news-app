import React from "react"
import Head from "next/head"
import Toolbar from "../components/toolbar"
import styles from "../styles/About.module.css"

const About = ({ user }) => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content={user.data.description} />

        <meta property="og:image" content={user.data.image} />
        <meta property="og:title" content={`Created by ${user.data.name}`} />
        <meta property="og:description" content={user.data.description} />

        <meta property="twitter:image" content={user.data.image} />
        <meta
          property="twitter:title"
          content={`Created by ${user.data.name}`}
        />
        <meta property="twitter:description" content={user.data.description} />
      </Head>
      <div className="page-container">
        <Toolbar />
        <div className={styles.main}>
          <h1>{user.data.description}</h1>
          <div className={styles.about}>
            <h2>{user.data.name}</h2>
            <h3>{user.data.position}</h3>
            <img src={user.data.image} />
          </div>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = async (pageContext) => {
  const apiResponse = await fetch(
    "https://raw.githubusercontent.com/furip0x/nextjs-news-app/main/db.json"
  )

  const user = await apiResponse.json()

  return {
    props: {
      user,
    },
  }
}

export default About
