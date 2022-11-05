import {
    createStyles,
    Container,
    Title,
    Text,
    Button,
    Group,
    Card,
} from "@mantine/core"

const useStyles = createStyles((theme) => ({
    root: {
        paddingTop: 80,
        paddingBottom: 80,
    },

    inner: {},

    content: {},

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        textAlign: "center",
        fontWeight: 900,
        fontSize: 38,
        marginBottom: theme.spacing.xl * 1.5,

        [theme.fn.smallerThan("sm")]: {
            fontSize: 32,
        },
    },

    description: {
        maxWidth: 540,
        margin: "auto",
        marginTop: theme.spacing.xl,
        marginBottom: theme.spacing.xl * 1.5,
    },
}))

function Menu() {
    const { classes } = useStyles()

    return (
        <>
            <Container className={classes.root}>
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Title className={classes.title}>Menu</Title>

                        <Group position="center">
                            <Card shadow="sm" p="lg" radius="md" withBorder>
                                <Text
                                    size="md"
                                    color="lime"
                                    sx={{
                                        fontWeight: "bold",
                                    }}
                                >
                                    Onion Samosa
                                </Text>
                            </Card>
                        </Group>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Menu
