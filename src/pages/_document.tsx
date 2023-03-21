import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Goldman&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="min-h-screen bg-my-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
