import { createGetInitialProps } from "@mantine/next"
import Document, { Head, Html, Main, NextScript } from "next/document"

const getInitialProps = createGetInitialProps()

export default class _Document extends Document {
    static getInitialProps = getInitialProps

    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" href="/PistaExpress3000.jpg" />
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&display=swap"
                        rel="stylesheet"
                    />
                    {/* <link rel="icon" href="/CameraLight.png" />
                    <link rel="apple-touch-icon" href="/CameraLight.png" />
                    <meta property="og:title" content="Reactive Shots" />
                    <meta
                        name="image"
                        property="og:image"
                        content="/RSLogo.jpg"
                    />
                    <meta name="author" content="Geeth Gunnampalli" />
                    <meta
                        property="og:description"
                        content="Event, Portrait, and Landscape Photography"
                    />
                    <meta
                        property="og:url"
                        content="https://reactiveshots.com"
                    /> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
