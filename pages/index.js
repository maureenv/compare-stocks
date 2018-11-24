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
      const res = await fetch('https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,msft&types=quote,stats,financials,company,earnings,chart&range=3m')
      const data = await res.json()
      const stocks = []
      const array = Object.keys( data ).map( d => stocks.push( data[d] ))
      this.setState({ stocks })
    })()
  }

  calculateDebtToEquity = stock => {
    const shareholderEquity = stock.financials.financials[0].shareholderEquity
    const totalDebt = stock.financials.financials[0].totalDebt
    const debtToEquity = ( totalDebt / shareholderEquity ).toFixed( 2 )
    return debtToEquity
  }

  calculateAssetTurnover = stock => {
    const totalAssetsThisQuarter = stock.financials.financials[0].totalAssets
    const totalAssetsLastQuarter = stock.financials.financials[1].totalAssets

    const averageTotalAssets = ( totalAssetsThisQuarter + totalAssetsLastQuarter ) / 2
    const assetTurnover = stock.financials.financials[0].totalRevenue / averageTotalAssets
    return assetTurnover.toFixed( 2 )
  }

  calculatePayoutRatio = stock => {
    const EPS = stock.earnings.earnings.reduce(( accumulator, currentValue ) => accumulator + currentValue.actualEPS, 0 )
    const dividendRate = stock.stats.dividendRate

    const payoutRatio = Math.floor( ( ( dividendRate / EPS ) * 100 ) * 100 ) / 100

    return payoutRatio
  }

  render() {
    const {
      stocks
    } = this.state
    const tableHeaders = [
      'Name',
      'PEG',//
      'Price To Earning (P/E)',
      'Price to Sales (P/S)',
      'Price to Book (P/B)',
      'Dividend Yield',
      'Dividend Payout',
      'Return On Assets',
      'Return On Equity',
      'Profit Margin',
      'Current Ratio', //
      'Quick Ratio', //
      'Debt to Equity',
      'Interest Coverage',//
      'Asset Turnover',//
      'Inventory Turnover',//
    ]
    // still need: PEG, current ratio, quick ratio, intereset coverage, asset turnover, inventory turnover
console.log(stocks, 'the stocks')
    return (
      <div>
        <table>
          <tbody>
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
              { stocks.length && stocks.map( s => <th key={ s.company.companyName }>{ s.company.industry }</th> ) }
            </tr>
            <tr>
              <th> Latest Price </th>
              { stocks.length && stocks.map( s => <th key={ s.company.companyName }>${ s.quote.latestPrice }</th> ) }
            </tr>
            <tr>
              <th> Price to Earning (P/E) </th>
              { stocks.length && stocks.map( s => <th key={ s.company.companyName }>{ s.quote.peRatio }</th> ) }
            </tr>
            <tr>
              <th> Price to Sales (P/S) </th>
              { stocks.length && stocks.map( s => <th key={ s.company.companyName }>{ s.stats.priceToSales.toFixed( 2 ) }</th> ) }
            </tr>
            <tr>
              <th> Price to Book (P/B) </th>
              { stocks.length && stocks.map( s => <th key={ s.company.companyName }>{ s.stats.priceToBook }</th> ) }
            </tr>
            <tr>
              <th> Dividend Yield </th>
              { stocks.length && stocks.map( s => <th key={ s.company.companyName }>{ s.stats.dividendYield.toFixed( 2 ) }%</th> ) }
            </tr>
            <tr>
              <th> Dividend Rate </th>
              { stocks.length && stocks.map( s => <th key={ s.company.companyName }>${ s.stats.dividendRate.toFixed( 2 ) }</th> ) }
              {/* THis is the amount receieved per year per stock (paid out quarterly)*/}
            </tr>
            <tr>
              <th> Dividend Payout Ratio </th>
              { stocks.length && stocks.map( s => <th key={ s.company.companyName }>{ this.calculatePayoutRatio( s )}%</th> ) }
              {/* search company payout ratio */}
            </tr>
            <tr>
              <th> Return On Assets </th>
              { stocks.length && stocks.map( s => <th key={ s.company.companyName }>{ s.stats.returnOnAssets }%</th> ) }
              {/* search company payout ratio */}
            </tr>
            <tr>
              <th> Return On Equity </th>
              { stocks.length && stocks.map( s => <th key={ s.company.companyName }>{ s.stats.returnOnEquity }%</th> ) }
              {/* search company payout ratio */}
            </tr>
            <tr>
              <th> Profit Margin </th>
              { stocks.length && stocks.map( s => <th key={ s.company.companyName }>{ s.stats.profitMargin }%</th> ) }
              {/* search company payout ratio */}
            </tr>
            <tr>
              <th> Profit Margin </th>
              { stocks.length && stocks.map( s => <th key={ s.company.companyName }>{ s.stats.profitMargin }%</th> ) }
              {/* search company payout ratio */}
            </tr>
            <tr>
              <th> Debt to Equity </th>
                { stocks.length && stocks.map( s => <th key={ s.company.companyName }>{ this.calculateDebtToEquity( s )}%</th> ) }
              {/* search company payout ratio */}
            </tr>
            <tr>
              <th> Asset Turnover (Current Quarter)</th>
                { stocks.length && stocks.map( s => <th key={ s.company.companyName }>{ this.calculateAssetTurnover( s )}%</th> ) }
              {/* search company payout ratio */}
            </tr>
          </tbody>
        </table>

      </div>
    )
  }
}


export default Index
