import Header from '../components/Header'
import '../styles/globals.css'
import '../styles/normalize.css'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Header/>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
