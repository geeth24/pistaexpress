import { AppProps } from "next/app"
import Head from "next/head"
import {
    MantineProvider,
    ColorSchemeProvider,
    ColorScheme,
} from "@mantine/core"
import { NotificationsProvider } from "@mantine/notifications"
import { useState } from "react"
import { GetServerSidePropsContext } from "next"
import { getCookie, setCookie } from "cookies-next"
import { useHotkeys } from "@mantine/hooks"
import Layout from "../components/Layout"

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
    const { Component, pageProps } = props
    const [colorScheme, setColorScheme] = useState<ColorScheme>(
        props.colorScheme
    )
    const toggleColorScheme = (value?: ColorScheme) => {
        const nextColorScheme =
            value || (colorScheme === "dark" ? "light" : "dark")
        setColorScheme(nextColorScheme)
        // when color scheme is updated save it to cookie
        setCookie("mantine-color-scheme", nextColorScheme, {
            maxAge: 60 * 60 * 24 * 30,
        })
    }
    useHotkeys([["mod+J", () => toggleColorScheme()]])

    return (
        <div
        //disable scrollbars
        >
            <Head>
                <title>Pista Express</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>

            <ColorSchemeProvider
                colorScheme={colorScheme}
                toggleColorScheme={toggleColorScheme}
            >
                <MantineProvider
                    withGlobalStyles
                    withNormalizeCSS
                    theme={{
                        /** Put your mantine theme override here */
                        fontFamily: "Philosopher, sans-serif",
                        headings: { fontFamily: "Philosopher, sans-serif" },
                        colorScheme: colorScheme,
                        primaryColor: "lime",
                        //dsiable scrollbars
                    }}
                >
                    <NotificationsProvider>
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </NotificationsProvider>
                </MantineProvider>
            </ColorSchemeProvider>
        </div>
    )
}
App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
    // get color scheme from cookie
    colorScheme: getCookie("mantine-color-scheme", ctx) || "light",
})
