import Header from '../components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps,navigation }) {
  // console.log(navigation);

  return (
    <>
      <Header navigation = {navigation}/>
      <Component {...pageProps} />
    </>
  )
}

MyApp.getInitialProps = async () => {
  const res = await fetch(`http://localhost:1337/api/navigations`)
  const resData = await res.json()
  const navigation = resData.data
  return {
    navigation
  }
}

export default MyApp
