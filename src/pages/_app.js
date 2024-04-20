import "@/styles/globals.css";
import Link from "next/link";
import Sidenav from "../../components/Sidenav";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Sidenav/>
      <Component {...pageProps} />

    </>
  )
}
