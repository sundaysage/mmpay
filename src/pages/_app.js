import "@/styles/globals.css";
import Link from "next/link";
import Sidenav from "../../components/Sidenav";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function App({ Component, pageProps }) {
  return (
    <>
    <Sidenav/>
      <Component {...pageProps} />

    </>
  )
}
