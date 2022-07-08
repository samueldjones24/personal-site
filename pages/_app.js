import { ThemeProvider } from 'next-themes'
import 'nextra-theme-blog/style.css'
import Head from 'next/head'
import ThemeChanger from '../components/ThemeChanger'

import '../styles/main.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <ThemeProvider defaultTheme="system">
        <ThemeChanger />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
