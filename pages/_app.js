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
      </Head>
      <ThemeProvider defaultTheme="system">
        <ThemeChanger />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
