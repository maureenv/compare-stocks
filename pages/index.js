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
  state = {
    stocks: {}
  }

  componentWillMount() {
    ( async ()=> {
      const res = await fetch('https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,fb&types=quote,news,chart&range=1m&last=5')
      const data = await res.json()
      const stocks = []
      const array = Object.keys( data ).map( d => stocks.push( data[d] ))
      this.setState({ stocks })
    })()
  }

  render() {
    const {
      stocks
    } = this.state

    return (
      <div>
        <HeroTitle>Catssss!</HeroTitle>
        { stocks.length && stocks.map( s => <p key={s.quote.companyName}>{ s.quote.companyName }</p> )}
      </div>
    )
  }
}


export default Index
