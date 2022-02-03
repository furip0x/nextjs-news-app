import React from "react"
import Head from "next/head"
import Toolbar from "../components/toolbar"
import styles from "../styles/About.module.css"

const About = ({ user }) => {
  console.log(user)
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content={user.description} />

        <meta property="og:image" content={user.image} />
        <meta property="og:title" content={`Created by ${user.name}`} />
        <meta property="og:description" content={user.description} />

        <meta property="twitter:image" content={user.image} />
        <meta property="twitter:title" content={`Created by ${user.name}`} />
        <meta property="twitter:description" content={user.description} />
      </Head>
      <div className="page-container">
        <Toolbar />
        <div className={styles.main}>
          <h1>NextJS News App</h1>
          <div className={styles.about}>
            <h2>{user.name}</h2>
            <h6>{user.position}</h6>
            <img src={user.image} />
            <p>{user.description}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = async (pageContext) => {
  const apiResponse = await fetch("link-here")

  const user = await apiResponse.json()

  return {
    props: {
      user,
    },
  }
}

export default About
