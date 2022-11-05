import { Container, Text, Title } from "@mantine/core"
import React from "react"

function Contact() {
    return (
        <Container
            size="lg"
            p="xl"
            mt={60}
            sx={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Title order={1}>Contact</Title>
            <Text size="lg">Phone: 123-456-7890</Text>
        </Container>
    )
}

export default Contact
