import Document, { Html, Head, Main, NextScript } from 'next/document'
import Meta from '../components/Meta'

class MyDocument extends Document {
  render() {
    const meta = {
      title: 'Samuel Jones - Software Developer',
      description:
        'A semi-interesting dev blog about JavaScript, CSS and HTML, and other fun topics.',
      image:
        'https://s3.eu-west-2.amazonaws.com/samjones.codes/Screenshot+2021-08-25+at+12.21.48.png'
    }

    return (
      <Html lang="en">
        <Head>
          <Meta meta={meta} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
