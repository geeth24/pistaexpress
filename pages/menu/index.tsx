import {
    createStyles,
    Container,
    Title,
    Text,
    Group,
    Card,
    Badge,
    SimpleGrid,
    Drawer,
    useMantineTheme,
    ActionIcon,
    Select,
} from "@mantine/core"
import { IconAdjustments, IconListSearch } from "@tabler/icons"
import { useState } from "react"

import AppetizersSides from "../../pemenu/AppetizersSides.json"
import Entrees from "../../pemenu/Entrees.json"
import RiceDish from "../../pemenu/RiceDish.json"
import Noodles from "../../pemenu/Noodles.json"
import Breads from "../../pemenu/Breads.json"
import Kids from "../../pemenu/Kids.json"
import Breakfast from "../../pemenu/Breakfast.json"
import KebabsTandoor from "../../pemenu/KebabsTandoor.json"
import Desserts from "../../pemenu/Desserts.json"
import Drinks from "../../pemenu/Drinks.json"
import { Link } from "react-scroll"
import Head from "next/head"
import { GetServerSideProps } from "next"
import { sanityClient } from "../../sanity"
import { MenuCollection } from "../../typings"

const LINK_HEIGHT = 38
const INDICATOR_SIZE = 10
const INDICATOR_OFFSET = (LINK_HEIGHT - INDICATOR_SIZE) / 2

const useStyles = createStyles((theme) => ({
    root: {
        paddingTop: 80,
        paddingBottom: 80,
    },

    inner: {},

    content: {
        padding: 10,
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        textAlign: "left",
        fontWeight: 900,
        fontSize: 38,
        marginBottom: theme.spacing.xl * 1.5,

        [theme.fn.smallerThan("sm")]: {
            fontSize: 32,
        },
    },

    subtitle: {
        // textAlign: "left",
        // position: "left",
        fontSize: 25,
        marginTop: theme.spacing.xl * 1.5,
        marginBottom: theme.spacing.xl * 1.5,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "left",

        [theme.fn.smallerThan("md")]: {
            fontSize: 20,
            textAlign: "left",
            justifyContent: "left",
            // position: "left",
        },
    },

    button: {
        marginTop: theme.spacing.xl * 1.5,
    },
    link: {
        ...theme.fn.focusStyles(),
        display: "block",
        textDecoration: "none",
        color:
            theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
        lineHeight: `${LINK_HEIGHT}px`,
        fontSize: theme.fontSizes.sm,
        height: LINK_HEIGHT,
        borderTopRightRadius: theme.radius.sm,
        borderBottomRightRadius: theme.radius.sm,
        borderLeft: `2px solid ${
            theme.colorScheme === "dark"
                ? theme.colors.dark[4]
                : theme.colors.gray[2]
        }`,

        paddingLeft: theme.spacing.lg,
        "&:hover": {
            backgroundColor:
                theme.colorScheme === "dark"
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0],
        },
    },

    linkActive: {
        fontWeight: 500,
        color: theme.colors[theme.primaryColor][
            theme.colorScheme === "dark" ? 3 : 7
        ],
    },

    links: {
        position: "relative",
    },

    indicator: {
        transition: "transform 150ms ease",
        border: `2px solid ${
            theme.colors[theme.primaryColor][
                theme.colorScheme === "dark" ? 3 : 7
            ]
        }`,
        backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
        height: INDICATOR_SIZE,
        width: INDICATOR_SIZE,
        borderRadius: INDICATOR_SIZE,
        position: "absolute",
        left: -INDICATOR_SIZE / 2 + 1,
    },
}))

interface MenuProps {
    collections: MenuCollection
}

function Menu({ collections }: MenuProps) {
    const { classes } = useStyles()
    const theme = useMantineTheme()
    const [opened, setOpened] = useState(false)
    const [type, setType] = useState<string | null>(null)
    const [active, setActive] = useState(0)

    return (
        <>
            <Head>
                <title>Menu | Pista Express</title>
            </Head>
            <Container className={classes.root}>
                <ActionIcon
                    size="xl"
                    color="lime"
                    variant="filled"
                    radius="xl"
                    onClick={() => setOpened(true)}
                    sx={{
                        position: "fixed",
                        // top: 20,
                        right: 40,
                        bottom: 40,

                        zIndex: 100,
                    }}
                >
                    <IconAdjustments />
                </ActionIcon>
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Drawer
                            overlayColor={
                                theme.colorScheme === "dark"
                                    ? theme.colors.dark[9]
                                    : theme.colors.gray[2]
                            }
                            overlayOpacity={0.55}
                            overlayBlur={3}
                            opened={opened}
                            onClose={() => setOpened(false)}
                        >
                            <div style={{ padding: 20 }}>
                                <Title order={3}>Menu Options</Title>
                                <Table
                                    links={[
                                        {
                                            label: "Appetizers & Sides",
                                            link: "AppetizersSides",
                                            order: 1,
                                        },
                                        {
                                            label: "Entrees",
                                            link: "Entrees",
                                            order: 1,
                                        },
                                        {
                                            label: "Rice Dishes",
                                            link: "RiceDish",
                                            order: 1,
                                        },
                                        {
                                            label: "Noodles",
                                            link: "Noodles",
                                            order: 1,
                                        },
                                        {
                                            label: "Breads",
                                            link: "Breads",
                                            order: 1,
                                        },
                                        {
                                            label: "Kids",
                                            link: "Kids",
                                            order: 1,
                                        },
                                        {
                                            label: "Breakfast",
                                            link: "Breakfast",
                                            order: 1,
                                        },
                                        {
                                            label: "Kebabs & Tandoor",
                                            link: "KebabsTandoor",
                                            order: 1,
                                        },
                                        {
                                            label: "Desserts",
                                            link: "Desserts",
                                            order: 1,
                                        },
                                        {
                                            label: "Drinks",
                                            link: "Drinks",
                                            order: 1,
                                        },
                                    ]}
                                    open={opened}
                                    setOpen={setOpened}
                                    active={active}
                                    setActive={setActive}
                                />
                                {/* <Title order={4} mt={20}>
                                    Filters
                                </Title>

                                <Select
                                    label="Filter by type"
                                    placeholder="Select type"
                                    clearable
                                    data={[
                                        {
                                            label: "VEGETARIAN",
                                            value: "Vegetarian",
                                        },
                                        {
                                            label: "CHICKEN",
                                            value: "Chicken",
                                        },
                                        {
                                            label: "GOATLAMB",
                                            value: "GoatLamb",
                                        },
                                        {
                                            label: "SEAFOOD",
                                            value: "SeaFood",
                                        },
                                        {
                                            label: "EGGTARIAN",
                                            value: "Eggtarian",
                                        },
                                    ]}
                                    value={type}
                                    onChange={(value) => setType(value)}
                                /> */}
                            </div>
                        </Drawer>
                        <Title className={classes.title}>Menu</Title>
                        <div id="AppetizersSides">
                            <Group className={classes.subtitle}>
                                <Text color="lime">Appetizers & Sides</Text>
                            </Group>

                            <Group
                                position="left"
                                //@ts-ignore
                            >
                                <SimpleGrid
                                    cols={4}
                                    spacing="xl"
                                    breakpoints={[
                                        {
                                            maxWidth: 980,
                                            cols: 3,
                                            spacing: "md",
                                        },
                                        {
                                            maxWidth: 755,
                                            cols: 2,
                                            spacing: "sm",
                                        },
                                        {
                                            maxWidth: 600,
                                            cols: 2,
                                            spacing: "sm",
                                        },
                                    ]}
                                >
                                    {collections.appetizerssides
                                        .filter(
                                            (item) =>
                                                item.type === type || !type
                                        )
                                        .map((item) => (
                                            <Card
                                                shadow="sm"
                                                p="lg"
                                                radius="md"
                                                withBorder
                                                key={item.title}
                                            >
                                                <Group
                                                    position="apart"
                                                    mt="md"
                                                    mb="xs"
                                                >
                                                    <Badge
                                                        color="lime"
                                                        variant="light"
                                                        size="xs"
                                                    >
                                                        {item.type}
                                                    </Badge>
                                                </Group>
                                                <Text
                                                    size="md"
                                                    color="lime"
                                                    sx={{
                                                        fontWeight: "bold",
                                                    }}
                                                >
                                                    {item.title}
                                                </Text>
                                            </Card>
                                        ))}
                                </SimpleGrid>
                            </Group>
                        </div>
                        <div id="Entrees">
                            <Group className={classes.subtitle}>
                                <Text color="lime">Entrees</Text>
                            </Group>

                            <Group position="left">
                                <SimpleGrid
                                    cols={4}
                                    spacing="xl"
                                    breakpoints={[
                                        {
                                            maxWidth: 980,
                                            cols: 3,
                                            spacing: "md",
                                        },
                                        {
                                            maxWidth: 755,
                                            cols: 2,
                                            spacing: "sm",
                                        },
                                        {
                                            maxWidth: 600,
                                            cols: 2,
                                            spacing: "sm",
                                        },
                                    ]}
                                >
                                    {
                                        collections.entrees
                                            .filter(
                                                (item) =>
                                                    item.type === type || !type
                                            )
                                            .map((item) => (
                                                <Card
                                                    shadow="sm"
                                                    p="lg"
                                                    radius="md"
                                                    withBorder
                                                    key={item.title}
                                                >
                                                    <Group
                                                        position="apart"
                                                        mt="md"
                                                        mb="xs"
                                                    >
                                                        <Badge
                                                            color="lime"
                                                            variant="light"
                                                            size="xs"
                                                        >
                                                            {item.type}
                                                        </Badge>
                                                    </Group>
                                                    <Text
                                                        size="md"
                                                        color="lime"
                                                        sx={{
                                                            fontWeight: "bold",
                                                        }}
                                                    >
                                                        {item.title}
                                                    </Text>
                                                </Card>
                                            )) //else if no items are found
                                    }
                                </SimpleGrid>
                            </Group>
                        </div>
                        <div id="RiceDish">
                            <Group className={classes.subtitle}>
                                <Text color="lime">Rice Dishes</Text>
                            </Group>

                            <Group position="left">
                                <SimpleGrid
                                    cols={4}
                                    spacing="xl"
                                    breakpoints={[
                                        {
                                            maxWidth: 980,
                                            cols: 3,
                                            spacing: "md",
                                        },
                                        {
                                            maxWidth: 755,
                                            cols: 2,
                                            spacing: "sm",
                                        },
                                        {
                                            maxWidth: 600,
                                            cols: 2,
                                            spacing: "sm",
                                        },
                                    ]}
                                >
                                    {
                                        collections.ricedish
                                            .filter(
                                                (item) =>
                                                    item.type === type || !type
                                            )
                                            .map((item) => (
                                                <Card
                                                    shadow="sm"
                                                    p="lg"
                                                    radius="md"
                                                    withBorder
                                                    key={item.title}
                                                >
                                                    <Group
                                                        position="apart"
                                                        mt="md"
                                                        mb="xs"
                                                    >
                                                        <Badge
                                                            color="lime"
                                                            variant="light"
                                                            size="xs"
                                                        >
                                                            {item.type}
                                                        </Badge>
                                                    </Group>
                                                    <Text
                                                        size="md"
                                                        color="lime"
                                                        sx={{
                                                            fontWeight: "bold",
                                                        }}
                                                    >
                                                        {item.title}
                                                    </Text>
                                                </Card>
                                            )) //else if no items are found
                                    }
                                </SimpleGrid>
                            </Group>
                        </div>
                        <div id="Noodles">
                            <Group className={classes.subtitle}>
                                <Text color="lime">Noodles</Text>
                            </Group>

                            <Group position="left">
                                <SimpleGrid
                                    cols={4}
                                    spacing="xl"
                                    breakpoints={[
                                        {
                                            maxWidth: 980,
                                            cols: 3,
                                            spacing: "md",
                                        },
                                        // { maxWidth: 755, cols: 2, spacing: "sm" },
                                        // { maxWidth: 600, cols: 2, spacing: "sm" },
                                    ]}
                                >
                                    {
                                        collections.noodles
                                            .filter(
                                                (item) =>
                                                    item.type === type || !type
                                            )
                                            .map((item) => (
                                                <Card
                                                    shadow="sm"
                                                    p="lg"
                                                    radius="md"
                                                    withBorder
                                                    key={item.title}
                                                >
                                                    <Group
                                                        position="apart"
                                                        mt="md"
                                                        mb="xs"
                                                    >
                                                        <Badge
                                                            color="lime"
                                                            variant="light"
                                                            size="xs"
                                                        >
                                                            {item.type}
                                                        </Badge>
                                                    </Group>
                                                    <Text
                                                        size="md"
                                                        color="lime"
                                                        sx={{
                                                            fontWeight: "bold",
                                                        }}
                                                    >
                                                        {item.title}
                                                    </Text>
                                                </Card>
                                            )) //else if no items are found
                                    }
                                </SimpleGrid>
                            </Group>
                        </div>
                        <div id="Breads">
                            <Group className={classes.subtitle}>
                                <Text color="lime">Breads</Text>
                            </Group>

                            <Group position="left">
                                <SimpleGrid
                                    cols={4}
                                    spacing="xl"
                                    breakpoints={[
                                        {
                                            maxWidth: 980,
                                            cols: 3,
                                            spacing: "md",
                                        },
                                        // { maxWidth: 755, cols: 2, spacing: "sm" },
                                        // { maxWidth: 600, cols: 2, spacing: "sm" },
                                    ]}
                                >
                                    {
                                        collections.bread.map((item) => (
                                            <Card
                                                shadow="sm"
                                                p="lg"
                                                radius="md"
                                                withBorder
                                                key={item.title}
                                            >
                                                <Group
                                                    position="apart"
                                                    mt="md"
                                                    mb="xs"
                                                >
                                                    <Badge
                                                        color="lime"
                                                        variant="light"
                                                        size="xs"
                                                    >
                                                        Bread
                                                    </Badge>
                                                </Group>
                                                <Text
                                                    size="md"
                                                    color="lime"
                                                    sx={{
                                                        fontWeight: "bold",
                                                    }}
                                                >
                                                    {item.title}
                                                </Text>
                                            </Card>
                                        )) //else if no items are found
                                    }
                                </SimpleGrid>
                            </Group>
                        </div>
                        <div id="Kids">
                            <Group className={classes.subtitle}>
                                <Text color="lime">Kids</Text>
                            </Group>

                            <Group position="center">
                                <SimpleGrid
                                    cols={4}
                                    spacing="xl"
                                    breakpoints={[
                                        {
                                            maxWidth: 980,
                                            cols: 3,
                                            spacing: "md",
                                        },
                                        {
                                            maxWidth: 755,
                                            cols: 2,
                                            spacing: "sm",
                                        },
                                        {
                                            maxWidth: 600,
                                            cols: 2,
                                            spacing: "sm",
                                        },
                                    ]}
                                >
                                    {
                                        collections.kids
                                            .filter(
                                                (item) =>
                                                    item.type === type || !type
                                            )
                                            .map((item) => (
                                                <Card
                                                    shadow="sm"
                                                    p="lg"
                                                    radius="md"
                                                    withBorder
                                                    key={item.title}
                                                >
                                                    <Group
                                                        position="apart"
                                                        mt="md"
                                                        mb="xs"
                                                    >
                                                        <Badge
                                                            color="lime"
                                                            variant="light"
                                                            size="xs"
                                                        >
                                                            {item.type}
                                                        </Badge>
                                                    </Group>
                                                    <Text
                                                        size="md"
                                                        color="lime"
                                                        sx={{
                                                            fontWeight: "bold",
                                                        }}
                                                    >
                                                        {item.title}
                                                    </Text>
                                                </Card>
                                            )) //else if no items are found
                                    }
                                </SimpleGrid>
                            </Group>
                        </div>
                        <div id="Breakfast">
                            <Group className={classes.subtitle}>
                                <Text color="lime">Breakfast</Text>
                            </Group>

                            <Group position="center">
                                <SimpleGrid
                                    cols={4}
                                    spacing="xl"
                                    breakpoints={[
                                        {
                                            maxWidth: 980,
                                            cols: 3,
                                            spacing: "md",
                                        },
                                        {
                                            maxWidth: 755,
                                            cols: 2,
                                            spacing: "sm",
                                        },
                                        {
                                            maxWidth: 600,
                                            cols: 2,
                                            spacing: "sm",
                                        },
                                    ]}
                                >
                                    {
                                        collections.breakfast
                                            .filter(
                                                (item) =>
                                                    item.type === type || !type
                                            )
                                            .map((item) => (
                                                <Card
                                                    shadow="sm"
                                                    p="lg"
                                                    radius="md"
                                                    withBorder
                                                    key={item.title}
                                                >
                                                    <Group
                                                        position="apart"
                                                        mt="md"
                                                        mb="xs"
                                                    >
                                                        <Badge
                                                            color="lime"
                                                            variant="light"
                                                            size="xs"
                                                        >
                                                            {item.type}
                                                        </Badge>
                                                    </Group>
                                                    <Text
                                                        size="md"
                                                        color="lime"
                                                        sx={{
                                                            fontWeight: "bold",
                                                        }}
                                                    >
                                                        {item.title}
                                                    </Text>
                                                </Card>
                                            )) //else if no items are found
                                    }
                                </SimpleGrid>
                            </Group>
                        </div>
                        <div id="KebabsTandoor">
                            <Group className={classes.subtitle}>
                                <Text color="lime">Kebabs &amp; Tandoor</Text>
                            </Group>

                            <Group position="center">
                                <SimpleGrid
                                    cols={4}
                                    spacing="xl"
                                    breakpoints={[
                                        {
                                            maxWidth: 980,
                                            cols: 3,
                                            spacing: "md",
                                        },
                                        {
                                            maxWidth: 755,
                                            cols: 2,
                                            spacing: "sm",
                                        },
                                        {
                                            maxWidth: 600,
                                            cols: 2,
                                            spacing: "sm",
                                        },
                                    ]}
                                >
                                    {
                                        collections.kebabstandoor
                                            .filter(
                                                (item) =>
                                                    item.type === type || !type
                                            )
                                            .map((item) => (
                                                <Card
                                                    shadow="sm"
                                                    p="lg"
                                                    radius="md"
                                                    withBorder
                                                    key={item.title}
                                                >
                                                    <Group
                                                        position="apart"
                                                        mt="md"
                                                        mb="xs"
                                                    >
                                                        <Badge
                                                            color="lime"
                                                            variant="light"
                                                            size="xs"
                                                        >
                                                            {item.type}
                                                        </Badge>
                                                    </Group>
                                                    <Text
                                                        size="md"
                                                        color="lime"
                                                        sx={{
                                                            fontWeight: "bold",
                                                        }}
                                                    >
                                                        {item.title}
                                                    </Text>
                                                </Card>
                                            )) //else if no items are found
                                    }
                                </SimpleGrid>
                            </Group>
                        </div>
                        <div id="Desserts">
                            <Group className={classes.subtitle}>
                                <Text color="lime">Desserts</Text>
                            </Group>

                            <Group position="left">
                                <SimpleGrid
                                    cols={4}
                                    spacing="xl"
                                    breakpoints={[
                                        {
                                            maxWidth: 980,
                                            cols: 3,
                                            spacing: "md",
                                        },
                                        // { maxWidth: 755, cols: 2, spacing: "sm" },
                                        // { maxWidth: 600, cols: 2, spacing: "sm" },
                                    ]}
                                >
                                    {
                                        collections.desserts.map((item) => (
                                            <Card
                                                shadow="sm"
                                                p="lg"
                                                radius="md"
                                                withBorder
                                                key={item.title}
                                            >
                                                <Group
                                                    position="apart"
                                                    mt="md"
                                                    mb="xs"
                                                >
                                                    <Badge
                                                        color="lime"
                                                        variant="light"
                                                        size="xs"
                                                    >
                                                        Sweets
                                                    </Badge>
                                                </Group>
                                                <Text
                                                    size="md"
                                                    color="lime"
                                                    sx={{
                                                        fontWeight: "bold",
                                                    }}
                                                >
                                                    {item.title}
                                                </Text>
                                            </Card>
                                        )) //else if no items are found
                                    }
                                </SimpleGrid>
                            </Group>
                        </div>
                        <div id="Drinks">
                            <Group className={classes.subtitle}>
                                <Text color="lime">Drinks</Text>
                            </Group>

                            <Group position="left">
                                <SimpleGrid
                                    cols={4}
                                    spacing="xl"
                                    breakpoints={[
                                        {
                                            maxWidth: 980,
                                            cols: 3,
                                            spacing: "md",
                                        },
                                        // { maxWidth: 755, cols: 2, spacing: "sm" },
                                        // { maxWidth: 600, cols: 2, spacing: "sm" },
                                    ]}
                                >
                                    {
                                        collections.drinks.map((item) => (
                                            <Card
                                                shadow="sm"
                                                p="lg"
                                                radius="md"
                                                withBorder
                                                key={item.title}
                                            >
                                                <Group
                                                    position="apart"
                                                    mt="md"
                                                    mb="xs"
                                                >
                                                    <Badge
                                                        color="lime"
                                                        variant="light"
                                                        size="xs"
                                                    >
                                                        Beverages
                                                    </Badge>
                                                </Group>
                                                <Text
                                                    size="md"
                                                    color="lime"
                                                    sx={{
                                                        fontWeight: "bold",
                                                    }}
                                                >
                                                    {item.title}
                                                </Text>
                                            </Card>
                                        )) //else if no items are found
                                    }
                                </SimpleGrid>
                            </Group>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Menu

interface TableOfContentsFloatingProps {
    links: { label: string; link: string; order: number }[]
    open: boolean
    setOpen: (open: boolean) => void
    active: number
    setActive: (active: number) => void
}

function Table({
    links,
    setOpen,
    active,
    setActive,
}: TableOfContentsFloatingProps) {
    const { classes, cx } = useStyles()

    const items = links.map((item, index) => (
        <Link
            to={item.link}
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
            key={item.link}
            style={{
                cursor: "pointer",
            }}
            className={cx(classes.link)}
            onClick={() => {
                setActive(index)
                setOpen(false)
            }}
        >
            {item.label}
        </Link>
    ))

    return (
        <div>
            <Group mb="md">
                <IconListSearch size={18} stroke={1.5} />
                <Text>Scroll Through Menu</Text>
            </Group>
            <div className={classes.links}>{items}</div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const query = `
    {
  "appetizerssides": *[_type == "appetizerssides"]{
    _id,
    title,
    type,
    price,
   },
  "bread": *[_type == 'bread']{
    _id,
    title,
    type,
    price,
   },
    "breakfast": *[_type == 'breakfast']{
    _id,
    title,
    type,
    price,
   },
      "desserts": *[_type == 'desserts']{
    _id,
    title,
    type,
    price,
   },
      "drinks": *[_type == 'drinks']{
    _id,
    title,
    type,
    price,
   },
      "entrees": *[_type == 'entrees']{
    _id,
    title,
    type,
    price,
   },
      "kebabstandoor": *[_type == 'kebabstandoor']{
    _id,
    title,
    type,
    price,
   },
       "kids": *[_type == 'kids']{
    _id,
    title,
    type,
    price,
   },
       "noodles": *[_type == 'noodles']{
    _id,
    title,
    type,
    price,
   },
       "ricedish": *[_type == 'ricedish']{
    _id,
    title,
    type,
    price,
   }
}
`

    const collections = await sanityClient.fetch(query).catch((err) => {
        console.log(err)
    })
    console.log(collections)
    return {
        props: {
            collections,
        },
    }
}
