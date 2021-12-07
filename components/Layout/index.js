import React from 'react'
import styled from 'styled-components'
import Header from "../../Blocks/Header";
import NavBar from "../../Blocks/NavBar";
import Footer from "../../Blocks/Footer";
import MainContent from "../../Blocks/MainContent";

const MainWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 90vh;
`

export default function Layout({children}) {
    return (
        <>
            <Header/>
            <MainWrapper>
                <NavBar />
                <MainContent>{children}</MainContent>
            </MainWrapper>

            <Footer/>
        </>
    )
}
