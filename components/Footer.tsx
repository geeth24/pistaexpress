import { createStyles, Anchor, Group, ActionIcon, Image } from "@mantine/core"
import {
    IconBrandYoutube,
    IconBrandInstagram,
    IconBrandFacebook,
} from "@tabler/icons"

const useStyles = createStyles((theme) => ({
    footer: {
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
    },

    links: {
        padding: `${theme.spacing.md}px ${theme.spacing.md}px`,

        [theme.fn.smallerThan("sm")]: {
            marginTop: theme.spacing.lg,
            marginBottom: theme.spacing.sm,
        },
    },
}))

interface FooterCenteredProps {
    links: { link: string; label: string }[]
}

function Footer({ links }: FooterCenteredProps) {
    const { classes } = useStyles()
    const items = links.map((link) => (
        <Anchor<"a">
            color="dimmed"
            key={link.label}
            href={link.link}
            sx={{ lineHeight: 1 }}
            onClick={(event) => event.preventDefault()}
            size="lg"
        >
            {link.label}
        </Anchor>
    ))

    return (
        <div className={classes.footer}>
            <div className={classes.inner}>
                <Group
                    sx={{
                        marginTop: 20,
                    }}
                >
                    <Image
                        src="/Pista Express text.png"
                        width={200}
                        height={50}
                    />
                </Group>

                <Group className={classes.links}>{items}</Group>

                <Group
                    spacing="xs"
                    position="right"
                    noWrap
                    style={{ marginBottom: 20 }}
                >
                    <ActionIcon size="lg" variant="default" radius="xl">
                        <IconBrandFacebook size={18} stroke={1.5} />
                    </ActionIcon>

                    <ActionIcon size="lg" variant="default" radius="xl">
                        <IconBrandInstagram size={18} stroke={1.5} />
                    </ActionIcon>
                </Group>
            </div>
        </div>
    )
}

export default Footer
