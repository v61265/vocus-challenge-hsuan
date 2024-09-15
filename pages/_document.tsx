import { Html, Head, Main, NextScript } from 'next/document';
import { GlobalStyles } from '~/styles/global-styles';

export default function Document() {
  return (
    <Html lang='ch'>
      <GlobalStyles />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
