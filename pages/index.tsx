import { GetServerSideProps } from "next"
import Head from "next/head"
import Hero from "../components/Hero"
import { sanityClient, urlFor } from "../sanity"
import { HomeData } from "../typings"
interface Props {
    homeData: HomeData
}
export default function Home({ homeData }: Props) {
    return (
        <>
            <Head>
                <title>Home | Pista Express</title>
            </Head>
            <Hero homeData={homeData} />
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const querey = `
    *[_type == "home"][0]{
        _id,
        title,
        subtitle,
        description,
        homeImage{
          asset
        },
       
}
`
    const homeData = await sanityClient.fetch(querey)
    return {
        props: {
            homeData,
        },
    }
}
