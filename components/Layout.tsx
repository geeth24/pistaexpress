import React, { Suspense } from "react"
import dynamic from "next/dynamic"

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
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
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
                {children}
                <Footer
                    links={[
                        {
                            link: "/",
                            label: "Home",
                        },
                        {
                            link: "/menu",
                            label: "Menu",
                        },
                        {
                            link: "/catering",
                            label: "Catering",
                        },
                        {
                            link: "/contact",
                            label: "Contact",
                        },
                    ]}
                />
            </Suspense>
        </>
    )
}

export default Layout
