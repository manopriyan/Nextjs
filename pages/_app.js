import Defaultlayout from '../components/Defaultlayout'
import '../styles/globals.css'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import bootstrap-notify from '../node_modules/bootstrap/dist/';
function MyApp({ Component, pageProps }) {
  return <Defaultlayout>
    <Component {...pageProps} />
  </Defaultlayout>
}

export default MyApp
