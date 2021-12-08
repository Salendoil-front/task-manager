import styled from 'styled-components'

const MainContentWrapper = styled.main`
  width: 85%;
  min-height: 100%;
  height: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
`

export default function MainContent ({children}) {
    return(
        <MainContentWrapper>
            {children}
        </MainContentWrapper>
    )
}
