import Document, { Html, Head, Main, NextScript } from 'next/document';
import DocHead                                    from 'common/components/ui/doc-head';
import { extractStyles }                          from 'helpers/render';

class MyDocument extends Document {
  static getInitialProps(ctx) {
    return extractStyles(ctx);
  }

  render() {
    return (
      <Html>
        <Head>
          <DocHead />
          {this.props.styles}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
