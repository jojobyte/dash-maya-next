import styles from './page.module.css'
import ClientComponent from './client'

export default function Home() {

  return (
    <>
      <main className={styles.main}>
        <ClientComponent />
      </main>
    </>
  )
}
