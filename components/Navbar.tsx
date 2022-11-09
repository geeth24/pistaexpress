import {
    createStyles,
    Header,
    Container,
    Group,
    Button,
    Burger,
    Image,
    Text,
    Paper,
    Transition,
    useMantineColorScheme,
    Switch,
    useMantineTheme,
    ActionIcon,
} from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { IconMoonStars, IconSun } from "@tabler/icons"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
const HEADER_HEIGHT = 60

const useStyles = createStyles((theme) => ({
    inner: {
        height: HEADER_HEIGHT,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },

    links: {
        [theme.fn.smallerThan("sm")]: {
            display: "none",
        },
    },

    burger: {
        [theme.fn.largerThan("sm")]: {
            display: "none",
        },
    },

    dropdown: {
        position: "absolute",
        top: 60,
        left: 0,
        right: 0,
        // zIndex: 999,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderTopWidth: 0,
        overflow: "hidden",

        [theme.fn.largerThan("sm")]: {
            display: "none",
        },
    },

    link: {
        display: "block",
        lineHeight: 1,
        padding: "8px 12px",
        borderRadius: theme.radius.sm,
        textDecoration: "none",
        color:
            theme.colorScheme === "dark"
                ? theme.colors.dark[0]
                : theme.colors.gray[7],

        fontSize: theme.fontSizes.lg,
        fontWeight: 500,

        "&:hover": {
            backgroundColor:
                theme.colorScheme === "dark"
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0],
        },

        [theme.fn.smallerThan("sm")]: {
            borderRadius: 0,
            padding: theme.spacing.md,
        },
    },

    linkActive: {
        "&, &:hover": {
            backgroundColor: theme.fn.variant({
                variant: "light",
                color: "teal",
            }).background,
            color: theme.fn.variant({
                variant: "light",
                color: "teal",
            }).color,
        },
    },
    linkLabel: {
        marginRight: 5,
    },
}))

interface NavbarProps {
    links: {
        link: string
        label: string
        links: { link: string; label: string }[]
    }[]
}

function Navbar({ links }: NavbarProps) {
    const router = useRouter()

    const [opened, { toggle }] = useDisclosure(false)
    const [active, setActive] = useState(router.pathname)
    const { classes, cx } = useStyles()
    const { colorScheme, toggleColorScheme } = useMantineColorScheme()
    const dark = colorScheme === "dark"
    const theme = useMantineTheme()

    const items = links.map((link) => (
        <Link
            href={link.link}
            key={link.link}
            className={cx(
                classes.link,
                link.link === active && classes.linkActive
            )}
            onClick={() => {
                setActive(link.link)
                toggle()
            }}
        >
            {link.label}
        </Link>
    ))

    return (
        <Header
            height={HEADER_HEIGHT}
            sx={{
                borderBottom: 0,
                position: "sticky",
                top: 0,
                marginTop: -HEADER_HEIGHT,
                backgroundColor:
                    theme.colorScheme === "dark" ? "#1a1b1ede" : "#ffffffde",
                backdropFilter: "blur(10px)",
            }}
        >
            <Container className={classes.inner} fluid>
                <Group>
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        className={classes.burger}
                        size="sm"
                    />
                    <Image src="/PistaExpress.png" width={75} height={75} />
                </Group>
                <Group className={classes.links} spacing={5}>
                    {items}
                </Group>
                <Transition
                    transition="pop-top-right"
                    duration={200}
                    mounted={opened}
                >
                    {(styles) => (
                        <Paper
                            className={classes.dropdown}
                            withBorder
                            style={styles}
                            sx={{
                                backgroundColor:
                                    theme.colorScheme === "dark"
                                        ? "#1a1b1e"
                                        : "#ffffff",
                                // backdropFilter: "blur(35px)",
                                zIndex: 9,
                            }}
                        >
                            {items}
                        </Paper>
                    )}
                </Transition>
                <Group position="center">
                    <Link href="/menu">
                        <Button radius="xl" sx={{ height: 30 }}>
                            Menu
                        </Button>
                    </Link>
                    <ActionIcon
                        size="lg"
                        color="teal"
                        onClick={() => toggleColorScheme()}
                        title="Toggle color scheme"
                        radius="xl"
                    >
                        {dark ? (
                            <IconSun size={18} />
                        ) : (
                            <IconMoonStars size={18} />
                        )}
                    </ActionIcon>
                </Group>
            </Container>
        </Header>
    )
}

export default Navbar
