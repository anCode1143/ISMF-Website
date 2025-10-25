import React from "react"
import { Outlet } from "react-router-dom"
import {Navigation} from "./Navigation"
import {Footer} from "./Footer.tsx"

export default function Layout() {
    return (
        <div>
            <Navigation />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}