import { Text, Title } from "@mantine/core"
import Head from "next/head"
import React from "react"
import PhotoAlbum, { RenderPhoto } from "react-photo-album"

const renderPhoto: RenderPhoto = ({
    layout,
    layoutOptions,
    imageProps: { alt, style, ...restImageProps },
}) => (
    <div className="render-div">
        <Text
            size="sm"
            color="lime"
            sx={{
                fontWeight: "bold",
            }}
        >
            {alt}
        </Text>
        <img
            alt={alt}
            style={{
                ...style,
                width: "100%",
                padding: 0,
                transition: "all 1s",
            }}
            {...restImageProps}
        />
    </div>
)
const images = [
    {
        src: "/slides/1.jpg",
        width: 175,
        height: 125,
        alt: "Food Table Setup",
    },
    {
        src: "/slides/2.jpg",
        width: 175,
        height: 125,
        alt: "Fruit Table Setup",
    },
    {
        src: "/slides/3.jpg",
        width: 175,
        height: 125,
        alt: "Fruit Table Setup",
    },
    {
        src: "/slides/4.jpg",
        width: 125,
        height: 175,
        alt: "Fruit Table Setup",
    },
    {
        src: "/slides/5.jpg",
        width: 175,
        height: 125,
        alt: "Fruit Table Setup",
    },
    {
        src: "/slides/6.jpg",
        width: 175,
        height: 125,
        alt: "Fruit Table Setup",
    },
    {
        src: "/slides/7.jpg",
        width: 125,
        height: 175,
        alt: "Drink Table Setup",
    },
    {
        src: "/slides/8.jpg",
        width: 175,
        height: 125,
        alt: "Dessert Table Setup",
    },

    {
        src: "/slides/9.jpg",
        width: 175,
        height: 125,
        alt: "Food Table Setup",
    },
    {
        src: "/slides/10.jpg",
        width: 125,
        height: 175,
        alt: "Drink Table Setup",
    },
    {
        src: "/slides/11.jpg",
        width: 125,
        height: 175,
        alt: "Veggie Table Setup",
    },
    {
        src: "/slides/12.jpg",
        width: 125,
        height: 175,
        alt: "Drink Table Setup",
    },
    {
        src: "/slides/13.jpg",
        width: 175,
        height: 125,
        alt: "Fruit Table Setup",
    },
    {
        src: "/slides/14.jpg",
        width: 175,
        height: 125,
        alt: "Fruit Table Setup",
    },
    {
        src: "/slides/15.jpg",
        width: 175,
        height: 125,
        alt: "Food Table Setup",
    },
]

const Home = () => {
    return (
        <>
            <Head>
                <title>Catering | Pista House Texas</title>
            </Head>
            <Title
                align="center"
                sx={{ fontWeight: "bold" }}
                color="lime"
                mt={60}
            >
                Catering
            </Title>

            <div
                style={{
                    padding: 20,
                }}
            >
                <PhotoAlbum
                    layout="masonry"
                    photos={images}
                    //@ts-ignore
                    renderPhoto={renderPhoto}
                />
            </div>
        </>
    )
}

export default Home
