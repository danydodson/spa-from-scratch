import React from 'react'
import styled from 'styled-components'
import { Router, Link } from '@reach/router'

const store = new Store()

function App() {
  return (
    <Wrapper>
      <Title>title</Title>
      <Router>
        <Detail path='/detail' />
      </Router>
    </Wrapper>
  )
}

export default App

const Wrapper = styled.section`
  padding: 5px;
  background: papayawhip;
`

const Title = styled.h1`
  font-size: 1.5em;
  color: red;
`