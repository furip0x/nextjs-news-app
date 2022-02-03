import Head from "next/head"
import Toolbar from "../components/toolbar"
import { useRouter } from "next/router"
import styles from "../styles/Home.module.css"

export default function Home() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>NextJS News App</title>
        <meta name="description" content="NextJS news App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className="page-container">
          <Toolbar />
          <div className={styles.main}>
            <h1>Next.js News App</h1>
            <h3>Latest news articles</h3>
            <button onClick={() => router.push("/feed/1")}>Feed</button>
          </div>
        </div>
      </div>
    </>
  )
}
