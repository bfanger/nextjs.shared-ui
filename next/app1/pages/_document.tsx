import Document, { Html, Main } from "next/document";
import Head from "next/head";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8"></meta>
        </Head>
        <body>
          <Main />
          {/* <NextScript /> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
