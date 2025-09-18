import "@/styles/globals.css";
import TopBar from "../components/Topbar";

export default function App({ Component, pageProps }) {
    
  return( 
  <>
    <TopBar/>
    <Component {...pageProps} />
  </>
  );
}
