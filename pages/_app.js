import "@/styles/globals.css";
import TopBar from "../components/Topbar";
import Footer from "../components/Footer";
export default function App({ Component, pageProps }) {
    
  return( 
  <>
    <TopBar />
    <Component {...pageProps} />
    <Footer />
  </>
  );
}
