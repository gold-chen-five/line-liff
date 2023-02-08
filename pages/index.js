import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";
export default function Home({ liff, liffError }) {

  //console.log(liff.getIDToken())
  useEffect(() => {
    console.log(liff)
    if(liff){
      const userId = liff.getIDToken()
      alert(userId)
    }
    
  },[])
  return (
    <div>
      <Head>
        <title>LIFF App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>create-liff-app</h1>
        {liff && <p>LIFF init succeeded.</p>}
        {liffError && (
          <>
            <p>LIFF init failed.</p>
            <p>
              <code>{liffError}</code>
            </p>
          </>
        )}
        <a
          href="https://developers.line.biz/ja/docs/liff/"
          target="_blank"
          rel="noreferrer"
        >
          LIFF Documentation
        </a>
      </main>
    </div>
  );
}
