import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  width: 100%;
  background-color: #000000;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 32px;
  border-bottom: 1px solid #00fff5;
`


export default function Header() {
    return (
        <HeaderWrapper>
            Task Manager
        </HeaderWrapper>
    )
}
