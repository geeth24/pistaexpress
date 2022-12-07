import {
    createStyles,
    ThemeIcon,
    Text,
    Box,
    Stack,
    Container,
    Title,
} from "@mantine/core"
import { IconPhone, IconMapPin, IconAt } from "@tabler/icons"
import Head from "next/head"
type ContactIconVariant = "white" | "gradient"

interface ContactIconStyles {
    variant: ContactIconVariant
}

const useStyles = createStyles((theme, { variant }: ContactIconStyles) => ({
    wrapper: {
        display: "flex",
        alignItems: "center",
        color: theme.white,
    },

    icon: {
        marginRight: theme.spacing.md,
        backgroundImage:
            variant === "gradient"
                ? `linear-gradient(135deg, ${
                      theme.colorScheme === "dark"
                          ? theme.colors[theme.primaryColor][7]
                          : theme.colors[theme.primaryColor][4]
                  } 0%, ${theme.colors[theme.primaryColor][6]} 100%)`
                : "none",
        backgroundColor: "transparent",
    },

    title: {
        color:
            variant === "gradient"
                ? theme.colors.gray[6]
                : theme.colors[theme.primaryColor][0],
    },

    description: {
        color: variant === "gradient" ? theme.black : theme.white,
    },
}))

interface ContactIconProps
    extends Omit<React.ComponentPropsWithoutRef<"div">, "title"> {
    icon: React.FC<any>
    title: React.ReactNode
    description: React.ReactNode
    hrefPrefix: string
    variant?: ContactIconVariant
}

function ContactIcon({
    icon: Icon,
    title,
    description,
    hrefPrefix,
    variant = "gradient",
    className,
    ...others
}: ContactIconProps) {
    const { classes, cx } = useStyles({ variant })
    return (
        <div
            className={cx(classes.wrapper, className)}
            {...others}
            onClick={() => window.open(hrefPrefix + description)}
        >
            {variant === "gradient" ? (
                <ThemeIcon size={40} radius="md" className={classes.icon}>
                    <Icon size={24} />
                </ThemeIcon>
            ) : (
                <Box mr="md">
                    <Icon size={24} />
                </Box>
            )}

            <div>
                <Text
                    size="xs"
                    className={classes.title}
                    sx={(theme) => ({
                        color:
                            theme.colorScheme === "dark"
                                ? theme.colors.lime[1]
                                : theme.colors.lime[9],
                    })}
                >
                    {title}
                </Text>
                <Text
                    className={classes.description}
                    sx={(theme) => ({
                        color:
                            theme.colorScheme === "dark"
                                ? theme.white
                                : theme.colors.lime[9],
                    })}
                >
                    {description}
                </Text>
            </div>
        </div>
    )
}

interface ContactIconsListProps {
    data?: ContactIconProps[]
    variant?: ContactIconVariant
}

const MOCKDATA = [
    {
        title: "Email",
        description: "pistamidland@gmail.com",
        icon: IconAt,
        hrefPrefix: "mailto:",
    },
    {
        title: "Phone",
        description: "+1 (432) 897-4533",
        icon: IconPhone,
        hrefPrefix: "tel:",
    },
    {
        title: "Address",
        description: "3312 Fortress Dr, Midland, TX 79706",
        icon: IconMapPin,
        hrefPrefix:
            "https://www.google.com/maps/search/?api=1&query=Pista+Express+Midland",
    },
]

function ContactIconsList({ data = MOCKDATA, variant }: ContactIconsListProps) {
    const items = data.map((item, index) => (
        <ContactIcon key={index} variant={variant} {...item} />
    ))
    return <Stack>{items}</Stack>
}

function ContactIcons() {
    return (
        <>
            <Head>
                <title>Contact Us | Pista Express</title>
            </Head>
            <Container
                size="lg"
                pt={80}
                pb={80}
                sx={{
                    maxWidth: 700,
                }}
            >
                <Title
                    sx={(theme) => ({
                        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                        textAlign: "center",
                        fontWeight: 900,
                        fontSize: 38,
                        marginBottom: theme.spacing.xl * 1.5,

                        [theme.fn.smallerThan("sm")]: {
                            fontSize: 32,
                        },
                    })}
                >
                    Contact Us
                </Title>
                <Box
                    sx={(theme) => ({
                        padding: theme.spacing.xl,
                        borderRadius: theme.radius.md,
                        backgroundColor:
                            theme.colorScheme === "dark"
                                ? theme.colors.lime[9]
                                : theme.colors.lime[2],
                    })}
                >
                    <ContactIconsList />
                </Box>
            </Container>
        </>
    )
}

export default ContactIcons
