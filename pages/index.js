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
      const res = await fetch('https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,zts&types=quote,stats,company,earnings,chart&range=3m')
      const data = await res.json()
      const stocks = []
      const array = Object.keys( data ).map( d => stocks.push( data[d] ))
      this.setState({ stocks })
    })()
  }

  calculatePayoutRatio = stock => {
    const EPS = stock.earnings.earnings.reduce(( accumulator, currentValue ) => accumulator + currentValue.actualEPS, 0 )
    const dividendRate = stock.stats.dividendRate

    const payoutRatio = Math.floor( ( ( dividendRate / EPS ) * 100 ) * 100 ) / 100

    return payoutRatio
  }

  calculateTotal = orders => {
    const total = orders.reduce(( accumulator, currentValue ) => accumulator + Number( currentValue.total ), 0 )
     return total.toLocaleString()
  }

  render() {
    const {
      stocks
    } = this.state
    const tableHeaders = [
      'Name',
      'PEG',
      'Price To Earning (P/E)',
      'Price to Sales (P/S)',
      'Price to Book (P/B)',
      'Dividend Yield',
      'Dividend Payout',
      'Return On Assets',
      'Return On Equity',
      'Profit Margin',
      'Current Ratio',
      'Quick Ratio',
      'Debt to Equity',
      'Interest Coverage',
      'Asset Turnover',
      'Inventory Turnover',
    ]
console.log(stocks, 'the stocks')
    return (
      <div>
        <table>
          <tr>
            <th> Name </th>
            { stocks.length && stocks.map( s => <th key={ s.company.companyName }>{ s.company.companyName }</th> ) }
          </tr>
          <tr>
            <th> Sector </th>
            { stocks.length && stocks.map( s => <th key={ s.company.companyName }>{ s.company.sector }</th> ) }
          </tr>
          <tr>
            <th> Industry </th>
            { stocks.length && stocks.map( s => <th key={ s.company.industry }>{ s.company.industry }</th> ) }
          </tr>
          <tr>
            <th> Latest Price </th>
            { stocks.length && stocks.map( s => <th key={ s.company.industry }>${ s.quote.latestPrice }</th> ) }
          </tr>
          <tr>
            <th> Price to Earning (P/E) </th>
            { stocks.length && stocks.map( s => <th key={ s.company.industry }>{ s.quote.peRatio }</th> ) }
          </tr>
          <tr>
            <th> Price to Sales (P/S) </th>
            { stocks.length && stocks.map( s => <th key={ s.company.industry }>{ s.stats.priceToSales.toFixed( 2 ) }</th> ) }
          </tr>
          <tr>
            <th> Price to Book (P/B) </th>
            { stocks.length && stocks.map( s => <th key={ s.company.industry }>{ s.stats.priceToBook }</th> ) }
          </tr>
          <tr>
            <th> Dividend Yield </th>
            { stocks.length && stocks.map( s => <th key={ s.company.industry }>{ s.stats.dividendYield.toFixed( 2 ) }%</th> ) }
          </tr>
          <tr>
            <th> Dividend Rate </th>
            { stocks.length && stocks.map( s => <th key={ s.company.industry }>${ s.stats.dividendRate.toFixed( 2 ) }</th> ) }
            {/* THis is the amount receieved per year per stock (paid out quarterly)*/}
          </tr>
          <tr>
            <th> Dividend Payout Ratio </th>
            { stocks.length && stocks.map( s => <th key={ s.company.industry }>{ this.calculatePayoutRatio( s )}%</th> ) }
            {/* search company payout ratio */}
          </tr>
          <tr>
            <th> Return On Assets </th>
            { stocks.length && stocks.map( s => <th key={ s.company.industry }>{ s.stats.returnOnAssets }%</th> ) }
            {/* search company payout ratio */}
          </tr>
          <tr>
            <th> Return On Equity </th>
            { stocks.length && stocks.map( s => <th key={ s.company.industry }>{ s.stats.returnOnEquity }%</th> ) }
            {/* search company payout ratio */}
          </tr>
          <tr>
            <th> Profit Margin </th>
            { stocks.length && stocks.map( s => <th key={ s.company.industry }>{ s.stats.profitMargin }%</th> ) }
            {/* search company payout ratio */}
          </tr>
        </table>

      </div>
    )
  }
}


export default Index
