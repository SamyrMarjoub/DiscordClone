import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Main from '../components/Main'
import Herodivs from '../components/Herodivs'
import Footer from '../components/Footer'

export default function Home() {
  
  
  return (
    <>
      <div className='w-full bg-[#404eed] flex flex-col items-center justify-center'>
        <Head>
          <title>Discord</title>
          <link rel="shortcut icon" href='discord-icon.svg' />

        </Head>
        <Header />
        <Main />
        <Herodivs />
        <Footer />

      </div>


    </>
  )
}
