import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import About from '../components/About'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Verbose Project</title>
        <meta name="description" content="Verbose Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
    <Main />
    <About />
    </div>
  )
}
