import React, { Suspense } from "react"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"

type LayoutProps = {
    children: React.ReactNode
}

const Navbar = dynamic(() => import("./Navbar"), {
    suspense: true,
})
const Footer = dynamic(() => import("./Footer"), {
    suspense: true,
})

const Layout = ({ children }: LayoutProps) => {
    const router = useRouter()
    //get the current route
    const { route } = router
    console.log("route", route.split("/")[1])
    var currentRoute = route.split("/")[1]
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
                {currentRoute !== "cms" && (
                    <Navbar
                        links={[
                            {
                                link: "/",
                                label: "Home",
                                links: [],
                            },
                            {
                                link: "/menu",
                                label: "Menu",
                                links: [],
                            },
                            {
                                link: "/catering",
                                label: "Catering",
                                links: [],
                            },
                            {
                                link: "/contact",
                                label: "Contact",
                                links: [],
                            },
                        ]}
                    />
                )}
                {children}
                {currentRoute !== "cms" && <Footer />}
            </Suspense>
        </>
    )
}

export default Layout
