import { createStyles, Container, Title, Text, Button } from "@mantine/core"
import Link from "next/link"

const useStyles = createStyles((theme) => ({
    root: {
        backgroundColor: "#437200",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage:
            "linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #194f24d0 70%), url('/PistaHouse-1-69 Large.jpeg')",
        paddingTop: theme.spacing.xl * 6,
        paddingBottom: theme.spacing.xl * 6,
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

function Hero() {
    const { classes } = useStyles()
    return (
        <div className={classes.root}>
            <Container size="lg">
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Title className={classes.title}>
                            {" "}
                            <Text
                                component="span"
                                inherit
                                variant="gradient"
                                gradient={{ from: "green.2", to: "green.4" }}
                            >
                                Fast & <br /> Authentic Food
                            </Text>{" "}
                            <br />
                            in Just Minutes
                        </Title>

                        <Text className={classes.description} mt={30}>
                            We are dedicated to providing you with the finest
                            Indian food and catering. Browse our menu and call
                            to order in advance. <br /> We are specialized in
                            Live Kebabs, Chat, Dosa and all of your favorite
                            Indian dishes.
                        </Text>
                        <Link href="/menu">
                            <Button
                                variant="gradient"
                                gradient={{ from: "green", to: "green" }}
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
