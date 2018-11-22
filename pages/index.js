import React, { Component } from 'react'
import styled from 'styled-components'
import fetch from 'isomorphic-unfetch'


const HeroTitle = styled.h1`
  color:red;
  position: relative;
  z-index: 1;
  text-transform: uppercase;
  font-size: 100px;
  margin-bottom: -10px;
  font-family: 'Anton', sans-serif;
  text-shadow: -3px 0px 11px rgba(0,0,0,0.7);
`


class Index extends Component {

  render() {
    return (
      <div>
        <HeroTitle>Cats!</HeroTitle>
      </div>
    )
  }
}

export default Index
