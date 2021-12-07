import styled from 'styled-components'

const MainContentWrapper = styled.main`
  width: 85%;
  min-height: 100%;
  height: auto;
`

export default function MainContent ({children}) {
    return(
        <MainContentWrapper>
            {children}
        </MainContentWrapper>
    )
}
