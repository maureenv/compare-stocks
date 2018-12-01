import React, { Component } from 'react'
import styled from 'styled-components'
import fetch from 'isomorphic-unfetch'
import cheerio from 'cheerio'
import Meta from '../components/meta'
const url = 'https://www.gurufocus.com/term/peg/AAPL/PEG-Ratio'
var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
import { Line } from 'react-chartjs-2'
import Select from 'react-select'
import Particles from 'react-particles-js'

// https://codepen.io/anon/pen/gQBGdR FIXED HEADER
// https://github.com/jerairrest/react-chartjs-2/issues/81 create custom legend?
// https://github.com/chartjs/Chart.js/issues/3150 show hide bar lines on custom click

const chartData = {
  labels: [],
  datasets: [],
}

const chartOptions = {
  maintainAspectRatio: false,
  elements: {
    line: {
      tension: 0.1,
    },
  },
  legend: {
    display: false,
  },
  scales: {
    xAxes: [{
      gridLines: {
        display: false,
      },
      ticks: {
        autoSkip: true,
        maxTicksLimit: 8,
        maxRotation: 0,
        minRotation: 0,
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

const chartColors = ['#0d60bb', '#01a8d2', '#1dc7a3', '#0db106']

const ChartContainer = styled.div`
  height: 300px;
  width: 100%;
  margin-top: 50px;
  padding-bottom: 100px;
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

const Table = styled.table`

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
  .particles-class {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    position: absolute;
    top: 0;
    z-index: -1;
    position: fixed;
  }
`

const InnerContainer = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 1000px;
`

const Tr = styled.tr`
  font-family: 'Roboto', sans-serif;
  text-align: left;
  position: ${ props => props.fixed && 'fixed' };
  border-bottom:  ${ props => !props.fixed && '1px solid #d6d6d6'};
`

const Th = styled.th`
  text-align: ${ props => props.left ? 'left' : 'right'};
  padding: 10px 20px;
  font-size: 13px;
`

const SelectStyles = styled.div`
  .Select-control {
    width: 200px;
  }
`

const Bullet = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  margin-right: 8px;
  background-color: ${ props => props.color };
`

const LegendName = styled.p`
  font-size: 13px;
  font-family: 'Roboto', sans-serif;
`

const LegendItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px;
  cursor: pointer;
  opacity: ${ props => props.opacity };
`

const ChartLegend = styled.div`
  display: flex;
  justify-content: center;
`

const DateRangeContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`
const DateRangeSelector = styled.div`
  .input {
    position: relative;
    z-index: -9999;
  }
  .input:checked + label {
    background: black;
  }
  .label {
    background: gray;
    color: #fff;
    padding: 5px;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    font-size: 13px;
    border-radius: 4px;
    width: 30px;
    text-align: center;
    display: inline-block;
  }
`

const Dropdown = styled.div`
  position: absolute;
  background: #fff;
  width: 230px;
  padding: 15px 0;
  border-radius: 4px;
  .match {
    transition: all 0.2s ease-in-out;
    font-size: 13px;
    padding: 10px 15px;
    border-bottom: 1px solid #d6d6d6;
    display: flex;
    justify-content: space-between;
    &:last-child {
      border-bottom: 0;
    }
    &:hover {
      background: #d6d6d6;
      cursor: pointer;
    }
  }
  .symbol {
    font-weight: 500;
  }
  .company-name {
    max-width: 150px;
    text-align: right;
    line-height: 1.3;
    color: #767676;
  }
`

const DropdownContainer = styled.div`
  position: relative;
  .input {
    font-size: 13px;
  }
`

class Index extends Component {
  state = {
    stocks: {},
    symbolList: [],
    chartRange: '1M',
    redraw: true,
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
    const { chartRange } = this.state
    chartData.datasets = []
    const labels = []
    if ( chartRange === '1D') {
      stocks[0].chart.map( c => labels.push( c.minute ))
    } else {
      stocks[0].chart.map( c => labels.push( c.date ))
    }
    chartData.labels = labels
    stocks.map(( s, i ) => {
      const data = []
      s.chart.map( c => data.push( c.close && c.close.toFixed(2) ))
      chartData.datasets.push({
         label: s.company.companyName,
         fill: false,
         lineTension: 0.1,
         backgroundColor: chartColors[i],
         borderColor: chartColors[i],
         borderCapStyle: 'butt',
         borderJoinStyle: 'bevel',
         pointBorderColor: chartColors[i],
         pointBackgroundColor: chartColors[i],
         pointBorderWidth: 0.5,
         borderWidth: 2,
         pointHoverRadius: 3,
         pointHoverBackgroundColor: chartColors[i],
         pointHoverBorderColor: chartColors[i],
         pointHoverBorderWidth: 2,
         pointRadius: 0,
         pointHitRadius: 5,
         data: data,
      })
    })

    chartOptions.tooltips.callbacks.label = tooltipItem => '$' + tooltipItem.yLabel.toLocaleString(2)

    this.setState({ chartData, chartOptions })

    // if ( chartFilter === 'total' ) {
    // chartOptions.tooltips.callbacks.label = tooltipItem => '$' + tooltipItem.yLabel.toLocaleString()
    // chartOptions.scales.yAxes[0].ticks.callback = value => '$' + value.toLocaleString()
    // chartData.datasets[0].data = Object.values( chartDataArray ).map( i => i.toFixed( 2 ))

  }

  calculateDebtToEquity = stock => {
    if ( stock.financials.financials ) {
      const shareholderEquity = stock.financials.financials[0].shareholderEquity
      const totalDebt = stock.financials.financials[0].totalDebt
      const debtToEquity = ( totalDebt / shareholderEquity ).toFixed( 2 )
      return `${ debtToEquity }%`
    }
    else {
      return 'N/A'
    }
  }

  calculateAssetTurnover = stock => {
    if ( stock.financials.financials ) {
      const totalAssetsThisQuarter = stock.financials.financials[0].totalAssets
      const totalAssetsLastQuarter = stock.financials.financials[1].totalAssets

      const averageTotalAssets = ( totalAssetsThisQuarter + totalAssetsLastQuarter ) / 2
      const assetTurnover = stock.financials.financials[0].totalRevenue / averageTotalAssets
      return `${ assetTurnover.toFixed( 2 ) }%`
    }
    else {
      return 'N/A'
    }
  }

  calculatePayoutRatio = stock => {
    if ( stock.earnings.earnings ) {
      const EPS = stock.earnings.earnings && stock.earnings.earnings.reduce(( accumulator, currentValue ) => accumulator + currentValue.actualEPS, 0 )
      const dividendRate = stock.stats.dividendRate

      const payoutRatio = Math.floor( ( ( dividendRate / EPS ) * 100 ) * 100 ) / 100

      return `${ payoutRatio }%`
    }
    else {
      return 'N/A'
    }
  }

  setSymbol = ( index, e, clickedItem ) => {
    let selected
    if ( clickedItem === "input" ) {
      selected = e.target.value.toUpperCase()
      setTimeout( () => {
        ( async () => {
          const res = await fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${ selected }&apikey=KT28GNBJ2ECP4SJ1`)
          const data = await res.json()
          this.setState({ [`matches${index}`]: data['bestMatches'] })
        })()
      }, 500)
    }
    else {
      selected = e
      this.setState({ [`matches${index}`]: null })
    }
    const symbolList = [...this.state.symbolList]
    symbolList[index] = selected
    this.setState({ symbolList })
  }

  clearMatches = i => {
    this.setState({ [`matches${ i }`]: null })
  }

  submit = () => {
    ( async () => {
      const { symbolList } = this.state
      if ( symbolList.length > 0 ) {
        const removeFromList = [undefined, null]
        const filteredList = symbolList.filter( i => !removeFromList.includes( i ))
        this.setState({ symbolList: filteredList })

        const res = await fetch(`https://api.iextrading.com/1.0/stock/market/batch?symbols=${ filteredList.join(",")}&types=quote,stats,financials,company,earnings,chart&range=1m`)
        const data = await res.json()
        const stocks = []
        const array = Object.keys( data ).map( d => stocks.push( data[d] ))
        if ( stocks.length > 0 ) {
          this.setState({ stocks, line0: true, line1: true, line2: true, line3: true })
          this.buildChartData( stocks )
        }
      }
    })()
  }

  setChartRange = range => {
    ( async () => {
      const { symbolList } = this.state
      if ( symbolList.length > 0 ) {
        const removeFromList = [undefined, null]
        const filteredList = symbolList.filter( i => !removeFromList.includes( i ))
        this.setState({ symbolList: filteredList, chartRange: range })
        const res = await fetch(`https://api.iextrading.com/1.0/stock/market/batch?symbols=${ filteredList.join(",")}&types=chart&range=${ range }`)
        const data = await res.json()
        const dataArray = []

        for ( const [ key, value ] of Object.entries( data )) {
          dataArray.push({ [key]: value })
        }

        const stocks = [...this.state.stocks]
        stocks.map( ( s, i ) => {
          const chartData = dataArray.find( d => Object.keys( d )[0] === s.company.symbol )
          s.chart = chartData[s.company.symbol].chart
        })
        this.setState({ stocks }, () => this.buildChartData( stocks ))
      }
    })()
  }

  renderInputFields = () => {
    const { symbolList } = this.state

    return Array.from( new Array( 4 ), (val, i ) => {
      return (
        <Th left={ true } key={ i }>
          <DropdownContainer>
            <input className="input" type="text" placeholder="Enter stock symbol" value={ symbolList[i] || '' } onChange={ e => this.setSymbol( i, e, 'input' )} onBlur={ () => this.clearMatches( i ) }/>
            { this.state[`matches${ i }`] &&
              <Dropdown>
                { this.state[`matches${ i }`].map( m =>
                  <div className="match" onClick={ e => this.setSymbol( i, m['1. symbol'], 'dropdown' )}>
                    <p className="symbol">{ m['1. symbol']}</p>
                    <p className="company-name">{ m['2. name'] }</p>
                  </div>
                )}
              </Dropdown>
            }
          </DropdownContainer>
        </Th>
      )
    })
  }

  toggleLine = i => {
    this.refs.chart.chartInstance.getDatasetMeta( i ).hidden = this.state[`line${ i }`]
    this.setState( prevState => ({ [`line${ i }`]: !prevState[`line${ i }`], redraw: false }) )
    this.refs.chart.chartInstance.update()
  }

  renderLegend = () => {
    const { stocks } = this.state
    return stocks.length && stocks.map( ( s, i ) =>
      <LegendItemContainer onClick={ () => this.toggleLine( i ) } opacity={ this.state[`line${ i }`] ? 1 : 0.3 }>
        <Bullet color={ chartColors[i] }/>
        <LegendName>{ s.company.companyName }</LegendName>
      </LegendItemContainer>
    )
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
    if ( stocks.length ) {
      switch ( functionName ) {
        case 'calculatePayoutRatio':
          return (
            stocks.map( s => <Th key={ s.company.companyName }>{ this.calculatePayoutRatio( s ) }</Th> )
          )
          break
        case 'calculateDebtToEquity':
          return (
            stocks.map( s => <Th key={ s.company.companyName }>{ this.calculateDebtToEquity( s )}</Th> )
          )
          break
        case 'calculateAssetTurnover':
          return (
            stocks.map( s => <Th key={ s.company.companyName }>{ this.calculateAssetTurnover( s )}</Th> )
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

  renderChartOptions = () => {
    const options = ['1D', '1M', '1Y', '5Y' ]
    return options.map( o =>
      <DateRangeSelector>
        <input className="input" name="chart" onClick={ () => this.setChartRange( o ) } id={ o } type="radio" key={ o } value={ o } checked={ o === this.state.chartRange }/>
        <label className="label" htmlFor={ o }>{ o }</label>
      </DateRangeSelector>
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
      redraw,
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
      <Particles
        className="particles-class"
        params={{
        "particles": {
          "number": {
              "value": 50
          },
          "size": {
              "value": 3
          }
        },
        "interactivity": {
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            }
          }
        }
      }}/>
        <Meta />
        <InnerContainer>
          <Table>
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
          </Table>
          <ChartContainer>
            <DateRangeContainer>{ this.renderChartOptions() }</DateRangeContainer>
            <ChartLegend>{ this.renderLegend() }</ChartLegend>
            <Line ref="chart" data={ chartData } options={ chartOptions } redraw={ redraw }/>
          </ChartContainer>
        </InnerContainer>
      </OuterContainer>
    )
  }
}


export default Index
