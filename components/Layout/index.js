import React from 'react'
import Header from "../../Blocks/Header";

export default function Layout({children}) {
    return (
        <>
            <Header/>
            <main>{children}</main>
            <footer>lol</footer>
        </>
    )
}
