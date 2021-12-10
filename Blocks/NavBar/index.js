import React from 'react'
import Link from 'next/link'
import styled, {keyframes} from 'styled-components'

const jumper = keyframes`
  0%{
    left: 0;
  }
  50%{
    left: 15px;
  }
  100%{
    left: 0;
  }
  //0% {
  //  left: 0;
  //}
  //10% {
  //  left: 15px
  //}
  //25% {
  //  left: 0;
  //}
  //40% {
  //  left: 12px;
  //}
  //55% {
  //  left: 0;
  //}
  //70% {
  //  left: 7px;
  //}
  //85% {
  //  left: 0;
  //}
  //95% {
  //  left: 2px;
  //}
  //100% {
  //  left: 0;
  //}
`

const NavbarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 15%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;    
  padding-top: 10vh;
`

const NavbarItemMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const NavbarItem = styled.a`
  text-decoration: none;
  position: relative;
  transition: all .3s linear;
  width: 100%;
  border-bottom: 1px solid #00fff5;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 20px 15px;

  &:hover {
    animation: ${jumper} 1s linear infinite;
    background-color: rgba(0, 0, 0, 0.4);
  }
`

export default function NavBar() {
    return (
        <NavbarWrapper>
            <NavbarItemMenu>
                <Link href='/' passHref><NavbarItem>Главная</NavbarItem></Link>
                <Link href='/chat' passHref><NavbarItem>Чат</NavbarItem></Link>
                <Link href='tasks' passHref><NavbarItem>Задачи</NavbarItem></Link>
                <Link href='teams' passHref><NavbarItem>Команда</NavbarItem></Link>
                <Link href='settings' passHref><NavbarItem>Настройки</NavbarItem></Link>
                <Link href='logout' passHref><NavbarItem>Выйти</NavbarItem></Link>
            </NavbarItemMenu>
        </NavbarWrapper>
    )
}
