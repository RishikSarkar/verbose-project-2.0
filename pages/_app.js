import '../styles/globals.css'
import Navbar from '../components/Navbar'
import {ThemeProvider} from 'next-themes'
import {AnimatePresence} from 'framer-motion'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute='class'>
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} />
        </AnimatePresence>
      </ThemeProvider>
    </>
  )
}

export default MyApp;
