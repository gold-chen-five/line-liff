import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect,useState } from "react";
import { useSendUserId } from "hook/useSendUserId";

export default function Home({ liff, liffError }) {
  const [userId, setUserId] = useState()
  const [sendUserId,setSendUserId] = useState()
  const {data,isLoading,isError} = useSendUserId(sendUserId)

  useEffect(() => {
    if(liff && liff.isLoggedIn()){
      const userId = liff.getIDToken()
      setUserId(userId)
    }
  },[liff])

  useEffect(() => {
    console.log(data)
  },[data])
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
        <div>userId: {userId}</div>
        {
          userId && <button onClick={() => setSendUserId(userId)}>send user ID</button>
        }
        <button onClick={() => setSendUserId('hello')}>send user ID</button>
        <div>
        {
          isLoading ? 'loading' : 
            data ? data.message : null 
        }
        </div>
      </main>
    </div>
  );
}
