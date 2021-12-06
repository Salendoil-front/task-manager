import React from 'react'
import Link from 'next/link'



export default function Header() {
    return(
        <>
            header
            <Link href='/'>main</Link>
            <Link href='/tasks'>tasks</Link>
        </>
    )
}