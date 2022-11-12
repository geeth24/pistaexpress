import { createGetInitialProps } from "@mantine/next"
import Document, { Head, Html, Main, NextScript } from "next/document"

const getInitialProps = createGetInitialProps()

export default class _Document extends Document {
    static getInitialProps = getInitialProps

    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" href="/PistaExpress250.png" />
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&display=swap"
                        rel="stylesheet"
                    />
                    <link rel="icon" href="/PistaExpress250.png" />
                    <link rel="apple-touch-icon" href="/PistaExpress250.png" />
                    <meta property="og:title" content="Pista Express" />
                    <meta
                        name="image"
                        property="og:image"
                        content="/PistaExpress3000.jpg"
                    />
                    <meta name="author" content="Pista Express" />
                    <meta
                        property="og:description"
                        content="We are dedicated to providing you with the finest Indian food and catering. Browse our menu and call to order in advance."
                    />
                    <meta
                        property="og:url"
                        content="https://pistaexpress.com"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
