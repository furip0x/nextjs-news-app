import React from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import Toolbar from "../../components/toolbar"
import styles from "../../styles/Feed.module.css"

const Feed = ({ pageNumber, articles }) => {
  const router = useRouter()

  return (
    <>
      <Head>
        <meta property="og:image" content={articles[0]?.urlToImage} />
        <meta property="og:description" content={articles[0]?.description} />
        <meta property="og:title" content={articles[0]?.title + " and more!"} />
      </Head>
      <div className="page-container">
        <Toolbar />
        <div className={styles.main}>
          {articles.map((article, index) => {
            return (
              <div key={index} className={styles.post}>
                <h2>{article.title}</h2>
                <p>{article.description}</p>
                {!!article.urlToImage && <img src={article.urlToImage} />}
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  Source link
                </a>
              </div>
            )
          })}
        </div>
        <div className={styles.paginator}>
          <button
            onClick={() => {
              if (pageNumber > 1) {
                router.push(`/feed/${pageNumber - 1}`)
              }
            }}
            className={pageNumber === 1 ? styles.disabled : styles.active}
          >
            Previous Page
          </button>
          <div>#{pageNumber}</div>
          <button
            onClick={() => {
              if (pageNumber < 5) {
                router.push(`/feed/${pageNumber + 1}`)
              }
            }}
            className={pageNumber === 5 ? styles.disabled : styles.active}
          >
            Next Page
          </button>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = async (pageContext) => {
  const pageNumber = pageContext.query.slug

  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    }
  }

  const apiResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    }
  ).then((res) => res.json())

  const { articles } = apiResponse

  return {
    props: {
      articles: articles,
      pageNumber: Number.parseInt(pageNumber),
    },
  }
}

export default Feed
