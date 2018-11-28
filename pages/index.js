import React, { Component } from 'react'
import styled from 'styled-components'
import fetch from 'isomorphic-unfetch'
import cheerio from 'cheerio'
import Meta from '../components/meta'
const url = 'https://www.gurufocus.com/term/peg/AAPL/PEG-Ratio'
var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
import { Line } from 'react-chartjs-2'

const chartData = {
  labels: [],
  datasets: [
    {
       label: 'Apple',
       fill: false,
       lineTension: 0.1,
       backgroundColor: 'rgba(75,192,192,0.4)',
       borderColor: 'rgba(75,192,192,1)',
       borderCapStyle: 'butt',
       borderDash: [],
       borderDashOffset: 0.0,
       borderJoinStyle: 'miter',
       pointBorderColor: 'rgba(75,192,192,1)',
       pointBackgroundColor: '#fff',
       pointBorderWidth: 1,
       pointHoverRadius: 5,
       pointHoverBackgroundColor: 'rgba(75,192,192,1)',
       pointHoverBorderColor: 'rgba(220,220,220,1)',
       pointHoverBorderWidth: 2,
       pointRadius: 1,
       pointHitRadius: 10,
       data: [],
     },
     {
       label: 'Microsoft',
       fill: false,
       lineTension: 0.1,
       backgroundColor: 'rgba(75,192,192,0.4)',
       borderColor: 'rgba(75,192,192,1)',
       borderCapStyle: 'butt',
       borderDash: [],
       borderDashOffset: 0.0,
       borderJoinStyle: 'miter',
       pointBorderColor: 'rgba(75,192,192,1)',
       pointBackgroundColor: '#fff',
       pointBorderWidth: 1,
       pointHoverRadius: 5,
       pointHoverBackgroundColor: 'rgba(75,192,192,1)',
       pointHoverBorderColor: 'rgba(220,220,220,1)',
       pointHoverBorderWidth: 2,
       pointRadius: 1,
       pointHitRadius: 10,
       data: [],
     },
     {
       label: 'Microsoft',
       fill: false,
       lineTension: 0.1,
       backgroundColor: 'rgba(75,192,192,0.4)',
       borderColor: 'rgba(75,192,192,1)',
       borderCapStyle: 'butt',
       borderDash: [],
       borderDashOffset: 0.0,
       borderJoinStyle: 'miter',
       pointBorderColor: 'rgba(75,192,192,1)',
       pointBackgroundColor: '#fff',
       pointBorderWidth: 1,
       pointHoverRadius: 5,
       pointHoverBackgroundColor: 'rgba(75,192,192,1)',
       pointHoverBorderColor: 'rgba(220,220,220,1)',
       pointHoverBorderWidth: 2,
       pointRadius: 1,
       pointHitRadius: 10,
       data: [],
   },
   {
     label: 'Microsoft',
     fill: false,
     lineTension: 0.1,
     backgroundColor: 'rgba(75,192,192,0.4)',
     borderColor: 'rgba(75,192,192,1)',
     borderCapStyle: 'butt',
     borderDash: [],
     borderDashOffset: 0.0,
     borderJoinStyle: 'miter',
     pointBorderColor: 'rgba(75,192,192,1)',
     pointBackgroundColor: '#fff',
     pointBorderWidth: 1,
     pointHoverRadius: 5,
     pointHoverBackgroundColor: 'rgba(75,192,192,1)',
     pointHoverBorderColor: 'rgba(220,220,220,1)',
     pointHoverBorderWidth: 2,
     pointRadius: 1,
     pointHitRadius: 10,
     data: [],
  }
  ],
}

const chartOptions = {
  maintainAspectRatio: false,
  elements: {
    line: {
      tension: 0.1,
    },
  },
  legend: {
    display: true,
  },
  scales: {
    xAxes: [{
      gridLines: {
        display: false,
      },
    }],
    yAxes: [{
      ticks: {
        maxTicksLimit: 5,
        beginAtZero: true,
      },
    }],
  },
  tooltips: {
    callbacks: {},
  },
}

const ChartContainer = styled.div`
  height: 500px;
  width: 100%;
  margin-top: 50px;
`

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

const Tbody = styled.tbody`
border-bottom: 1px solid gray;
`

const OuterContainer = styled.div`
  background: #f5f5f5;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`

const InnerContainer = styled.div`
  padding: 20px;
`

const Tr = styled.tr`
  font-family: 'Roboto', sans-serif;
  text-align: left;
`

const Th = styled.th`
  text-align: ${ props => props.left ? 'left' : 'right'};
  padding: 10px 20px;
  border-bottom: 1px solid #d6d6d6;
  font-size: 13px;
`

class Index extends Component {
  state = {
    stocks: {},
    symbolList: []
  }

  componentWillMount() {
    // ( async () => {
    //   const res = await fetch('https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,msft&types=quote,stats,financials,company,earnings,chart&range=3m')
    //   const data = await res.json()
    //   const stocks = []
    //   const array = Object.keys( data ).map( d => stocks.push( data[d] ))
    //   this.setState({ stocks })
    //   this.buildChartData( stocks )
    // })()

    fetch( proxyUrl + url )
      .then( res => res.text() )
      .then( (body ) => {
        // comp_name
        const test = cheerio.load(body)
        //console.log(test('.comp_name font').text(), 'the test')

        // test('.comp_name font').each(( index, element ) => {
        //   console.log(element, 'the index')
        // })
      })
  }

  buildChartData = stocks => {
    const labels = []
    stocks[0].chart.map( c => labels.push( c.date ))
    chartData.labels = labels
    stocks.map(( s, i ) => {
      const data = []
      s.chart.map( c => data.push( c.close ))
      chartData.datasets[i].data = data
    })
    this.setState({ chartData, chartOptions })
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

  setSymbol = ( index, event ) => {
    ( async () => {
      const text = event.target.value

      const symbolList = [...this.state.symbolList]
      symbolList[index] = text
      this.setState({ symbolList })
      // const res = await fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${ text }&apikey=KT28GNBJ2ECP4SJ1`)
      // const data = await res.json()
      //console.log(data, 'the data from search')
    })()
  }

  submit = () => {
    ( async () => {
      const { symbolList } = this.state
      if ( symbolList.length > 0 ) {
        const removeFromList = [undefined, null]
        const filteredList = symbolList.filter( i => !removeFromList.includes( i ))
        this.setState({ symbolList: filteredList })

        const res = await fetch(`https://api.iextrading.com/1.0/stock/market/batch?symbols=${ filteredList.join(",")}&types=quote,stats,financials,company,earnings,chart&range=3m`)
        const data = await res.json()
        console.log(data, 'the data in submit')
        const stocks = []
        const array = Object.keys( data ).map( d => stocks.push( data[d] ))
        this.setState({ stocks })
        this.buildChartData( stocks )
      }
    })()
  }

  renderInputFields = () => {
    return Array.from(new Array( 4 ), (val, i ) => {
      return (
        <Th key={ i }>
          <input type="text" placeholder="Enter stock symbol" value={ this.state.symbolList[i] || '' } onChange={ e => this.setSymbol( i, e )}/>
        </Th>
      )
    })
  }

  getValue = value => {
    if ( typeof( value ) === "string" ) {
      return value
    }
    else if ( value === 0 ) {
      return 0
    }
    else if ( typeof( value ) === "number" ) {
      //return Math.floor( value * 100 ) / 100
      return value.toFixed(2)
    }
    else if ( value === null || value === undefined ) {
      return 'N/A'
    }
    else {
      return value
    }
  }

  getCalculatedValues = functionName => {
    const { stocks } = this.state
    console.log(functionName, 'function name')
    if ( stocks.length ) {
      switch ( functionName ) {
        case 'calculatePayoutRatio':
          return (
            stocks.map( s => <Th key={ s.company.companyName }>{ this.calculatePayoutRatio( s ) }%</Th> )
          )
          break
        case 'calculateDebtToEquity':
          return (
            stocks.map( s => <Th key={ s.company.companyName }>{ this.calculateDebtToEquity( s )}% </Th> )
          )
          break
        case 'calculateAssetTurnover':
          return (
            stocks.map( s => <Th key={ s.company.companyName }>{ this.calculateAssetTurnover( s ) }%</Th> )
          )
          break
        default:
          return
      }
    }
    else {
      return <Th colSpan="4"/>
    }
  }

  renderCalculatedRow = ( title, functionName ) => {
    const { stocks } = this.state

    return (
      <Tr>
        <Th left={ true }>{ title }</Th>
        { this.getCalculatedValues( functionName ) }
        { stocks.length < 4 && <Th colSpan={ 4 - stocks.length }/> }
      </Tr>
    )
  }

  renderTableRow = ( title, category, subcategory, isDollar, isPercent ) => {
    const { stocks } = this.state

    return (
      <Tr>
        <Th left={ true }>{ title }</Th>
        { stocks.length ?
          stocks.map( s =>
            <Th key={ s.company.companyName }>
              { isDollar && s[category][subcategory] !== null && '$' }
              { this.getValue( s[category][subcategory] ) }
              { isPercent && s[category][subcategory] !== null && '%'}
            </Th> )
            :
            <Th colSpan="4"/>
        }
        { stocks.length < 4 && <Th colSpan={ 4 - stocks.length }/> }
      </Tr>
    )
  }

  render() {
    const {
      stocks,
      chartData,
      chartOptions,
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

    return (
      <OuterContainer>
        <Meta />
        <InnerContainer>
          <table>
            <tbody>
              <Tr>
                <Th left={ true }> Stock Symbol </Th>
                { this.renderInputFields() }
                <button onClick={ () => this.submit() }> Go </button>
              </Tr>
              { this.renderTableRow( 'Name', 'company', 'companyName', false, false )}
              { this.renderTableRow( 'Sector', 'company', 'sector', false, false )}
              { this.renderTableRow( 'Industry', 'company', 'industry', false, false )}
              { this.renderTableRow( 'Latest Price', 'quote', 'latestPrice', true, false )}
              { this.renderTableRow( 'Price to Earning (P/E)', 'quote', 'peRatio', false, true )}
              { this.renderTableRow( 'Price to Sales (P/S)', 'stats', 'priceToSales', false, true )}
              { this.renderTableRow( 'Price to Book (P/B)', 'stats', 'priceToBook', false, true )}
              { this.renderTableRow( 'Dividend Yield', 'stats', 'dividendYield', false, true )}
              { this.renderTableRow( 'Dividend Rate', 'stats', 'dividendRate', true, false )}
              {/* THis is the amount receieved per year per stock (paid out quarterly)*/}
              { this.renderCalculatedRow( 'Dividend Payout Ratio', 'calculatePayoutRatio' )}
              { this.renderTableRow( 'Return On Assets', 'stats', 'returnOnAssets', false, true )}
              { this.renderTableRow( 'Return On Equity', 'stats', 'returnOnEquity', false, true )}
              { this.renderTableRow( 'Profit Margin', 'stats', 'profitMargin', false, true )}
              { this.renderCalculatedRow( 'Debt to Equity', 'calculateDebtToEquity' )}
              { this.renderCalculatedRow( 'Asset Turnover (Current Quarter)', 'calculateAssetTurnover' )}
            </tbody>
          </table>
          <ChartContainer>
            <Line data={ chartData } options={ chartOptions } redraw={ true }/>
          </ChartContainer>
        </InnerContainer>
      </OuterContainer>
    )
  }
}


export default Index
