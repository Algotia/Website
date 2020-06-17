import React from 'react'
import styled from 'styled-components'
import { Container as Cont } from '@material-ui/core'

export default ({ children }) => {
  
  return (
    <Wrapper>
      <Container>
        {children}
      </Container>
    </Wrapper>
    )

}

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #57f3ff;
`

const Container = styled(Cont)`
  width: 100%;
  min-height: 100vh;
`
