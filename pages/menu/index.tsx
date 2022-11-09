import {
    createStyles,
    Container,
    Title,
    Text,
    Button,
    Group,
    Card,
    Badge,
    SimpleGrid,
    Drawer,
    useMantineTheme,
    ActionIcon,
    Select,
} from "@mantine/core"
import { IconFilter } from "@tabler/icons"
import { useState } from "react"

import AppetizersSides from "../../pemenu/AppetizersSides.json"

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

    subtitle: {
        // textAlign: "left",
        // position: "left",
        fontSize: 25,
        marginBottom: theme.spacing.xl * 1.5,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        [theme.fn.smallerThan("md")]: {
            fontSize: 20,
            textAlign: "center",
            justifyContent: "center",
            // position: "center",
        },
    },

    button: {
        marginTop: theme.spacing.xl * 1.5,
    },
}))

function Menu() {
    const { classes } = useStyles()
    const theme = useMantineTheme()
    const [opened, setOpened] = useState(false)
    const [type, setType] = useState<string | null>(null)

    return (
        <>
            <Container className={classes.root}>
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
                                <Title order={3}>Filter</Title>
                                <Text size="sm" style={{ marginTop: 10 }}>
                                    Filter by type
                                </Text>
                                <Select
                                    label="Category"
                                    placeholder="Select category"
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
                                />
                            </div>
                        </Drawer>
                        <Title className={classes.title}>Menu</Title>
                        <Group className={classes.subtitle}>
                            <Text color="lime">Appetizers & Sides</Text>
                            <ActionIcon
                                size="lg"
                                color="lime"
                                onClick={() => setOpened(true)}
                            >
                                <IconFilter />
                            </ActionIcon>
                        </Group>

                        <Group position="center">
                            <SimpleGrid
                                cols={4}
                                spacing="xl"
                                breakpoints={[
                                    { maxWidth: 980, cols: 3, spacing: "md" },
                                    { maxWidth: 755, cols: 2, spacing: "sm" },
                                    // { maxWidth: 600, cols: 1, spacing: "sm" },
                                ]}
                            >
                                {AppetizersSides.filter(
                                    (item) => item.type === type || !type
                                ).map((item) => (
                                    <Card
                                        shadow="sm"
                                        p="lg"
                                        radius="md"
                                        withBorder
                                        key={item.title}
                                    >
                                        <Group position="apart" mt="md" mb="xs">
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
                </div>
            </Container>
        </>
    )
}

export default Menu
