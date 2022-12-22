import { createStyles, Container, Title, Text, Button } from "@mantine/core"
import Link from "next/link"
import { urlFor } from "../sanity"
import { HomeData } from "../typings"

const useStyles = createStyles((theme) => ({
    root: {
        backgroundColor: "#437200",
        backgroundSize: "cover",
        backgroundPosition: "center",
        // backgroundImage:
        //     "linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #194f24d0 70%), url('/PistaHouse-1-69 Large.jpeg')",
        paddingTop: theme.spacing.xl * 8,
        paddingBottom: theme.spacing.xl * 8,
    },

    inner: {
        display: "flex",
        justifyContent: "space-between",

        [theme.fn.smallerThan("md")]: {
            flexDirection: "column",
        },
    },

    image: {
        [theme.fn.smallerThan("md")]: {
            display: "none",
        },
    },

    content: {
        paddingTop: theme.spacing.xl * 2,
        paddingBottom: theme.spacing.xl * 2,
        marginRight: theme.spacing.xl * 3,

        [theme.fn.smallerThan("md")]: {
            marginRight: 0,
        },
    },

    title: {
        color: theme.white,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 900,
        lineHeight: 1.05,
        maxWidth: 500,
        fontSize: 48,

        [theme.fn.smallerThan("md")]: {
            maxWidth: "100%",
            fontSize: 34,
            lineHeight: 1.15,
        },
    },

    description: {
        color: theme.white,
        opacity: 0.75,
        maxWidth: 500,

        [theme.fn.smallerThan("md")]: {
            maxWidth: "100%",
        },
    },

    control: {
        paddingLeft: 25,
        paddingRight: 25,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: 22,
        width: "50%",
        [theme.fn.smallerThan("md")]: {
            width: "100%",
        },
    },
}))
interface Props {
    homeData: HomeData
}
function Hero({ homeData }: Props) {
    const { classes } = useStyles()
    return (
        <div
            className={classes.root}
            style={{
                backgroundImage: `linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #194f24d0 70%), url(${urlFor(
                    homeData.homeImage
                ).url()})`,
            }}
        >
            <Container size="lg">
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Title className={classes.title}>
                            {" "}
                            <Text
                                component="span"
                                inherit
                                variant="gradient"
                                gradient={{
                                    from: "lime.2",
                                    to: "lime.4",
                                }}
                            >
                                {homeData.title}
                            </Text>{" "}
                            <br />
                            {homeData.subtitle}
                        </Title>

                        <Text className={classes.description} mt={30}>
                            {homeData.description}
                        </Text>
                        <Link href="/menu">
                            <Button
                                variant="gradient"
                                gradient={{ from: "lime", to: "lime" }}
                                size="md"
                                className={classes.control}
                                mt={40}
                                radius="xl"
                            >
                                Menu
                            </Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Hero

