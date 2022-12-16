import {
    createStyles,
    Container,
    Group,
    ActionIcon,
    Text,
    useMantineColorScheme,
    Image,
    Stack,
} from "@mantine/core"
import {
    IconBrandNextjs,
    IconBrandMantine,
    IconBrandFramer,
} from "@tabler/icons"

const useStyles = createStyles((theme) => ({
    footer: {
        marginTop: 30,
        borderTop: `1px solid ${
            theme.colorScheme === "dark"
                ? theme.colors.dark[5]
                : theme.colors.gray[2]
        }`,
    },

    inner: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",

        maxWidth: 1200,
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,

        [theme.fn.smallerThan("xs")]: {},
    },

    links: {
        [theme.fn.smallerThan("xs")]: {
            marginTop: theme.spacing.md,
        },
    },
}))

function Footer() {
    const { classes } = useStyles()
    const { colorScheme } = useMantineColorScheme()
    const dark = colorScheme === "dark"
    return (
        <div className={classes.footer}>
            <Container className={classes.inner}>
                <Group spacing={5} position="center">
                    <Image
                        src="/PistaExpress250.png"
                        width={150}
                        height={75}
                        alt="image of pista express logo"
                    />
                </Group>

                <Group spacing={5} position="center">
                    <Stack spacing="xs" align="center">
                        <a
                            href="tel:+1 (432) 897-4533"
                            style={{ textDecoration: "none" }}
                        >
                            {" "}
                            <Text size="sm" weight={500} color="lime">
                                +1 (432) 897-4533
                            </Text>
                        </a>
                        <Text
                            size="sm"
                            weight={500}
                            color="lime"
                            sx={{
                                fontFamily: "Lato",
                            }}
                        >
                            © {new Date().getFullYear()} Pista Express
                        </Text>

                        <Group spacing="xs">
                            <Text size="sm" weight={500} color="lime">
                                Built with {` `}
                            </Text>
                            <Group spacing={5}>
                                <ActionIcon
                                    component="a"
                                    size="sm"
                                    color="lime"
                                    style={{ marginTop: -2 }}
                                    href="https://nextjs.org/"
                                >
                                    <IconBrandNextjs />
                                </ActionIcon>
                                {` `}
                                <ActionIcon
                                    component="a"
                                    size="sm"
                                    color="lime"
                                    style={{ marginTop: -2 }}
                                    href="https://mantine.dev/"
                                >
                                    <IconBrandMantine />
                                </ActionIcon>
                                {` `}
                                <ActionIcon
                                    component="a"
                                    size="sm"
                                    color="lime"
                                    style={{ marginTop: -2 }}
                                    href="https://www.framer.com/motion"
                                >
                                    <IconBrandFramer />
                                </ActionIcon>

                                <Text size="sm" weight={500} color="lime">
                                    {` `} by {` `}
                                </Text>
                                <Text
                                    size="sm"
                                    weight={500}
                                    color="lime"
                                    onClick={() => {
                                        window.open("https://geethg.com")
                                    }}
                                    style={{ cursor: "pointer" }}
                                >
                                    Geeth Gunnampalli
                                </Text>
                            </Group>
                        </Group>
                    </Stack>
                </Group>
            </Container>
        </div>
    )
}

export default Footer
