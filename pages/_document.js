import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    const meta = {
      title: 'Samuel Jones - Software Developer',
      description:
        'A semi-interesting tech blog about JavaScript, CSS and HTML.',
      image:
        'https://s3.eu-west-2.amazonaws.com/samjones.codes/Screenshot+2021-08-25+at+12.21.48.png'
    }

    return (
      <Html lang="en">
        <Head>
          <meta name="robots" content="follow, index" />
          <meta name="description" content={meta.description} />
          <meta name="site_name" property="og:site_name" content={meta.title} />
          <meta
            name="description"
            property="og:description"
            content={meta.description}
          />
          <meta name="title" property="og:title" content={meta.title} />
          <meta name="image" property="og:image" content={meta.image} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@samueldjones" />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          <meta name="twitter:image" content={meta.image} />
          <title>{meta.title}</title>
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
