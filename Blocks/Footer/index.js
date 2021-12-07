import styled from 'styled-components'

const FooterWrapper = styled.footer`
  width: 100%;
  background-color: rgb(0, 0, 0);
  color:#fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  padding: 20px;
`

export default function Footer() {
    return(
          <FooterWrapper>
              Thank u, guys!
          </FooterWrapper>
    )
}
