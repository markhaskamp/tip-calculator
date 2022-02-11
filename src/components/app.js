import { h, render, Component } from 'preact';
import fa from "../style/all.min.css";

class TipPercentageComponent extends Component {

  render(props) {
    return(
      <div>
        <div class="tipPercentageText">{props.label}</div>
        <div class="valueBumpers">
          <span class="fas fa-angle-double-left pointer bumper" onClick={props.handleTipPercentageBump} inc="-5"></span>
          <span class="fas fa-angle-left pointer bumper" onClick={props.handleTipPercentageBump} inc="-1"></span>
          <span class="foo">{props.children}</span>
          <span class="fas fa-angle-right pointer bumper" onClick={props.handleTipPercentageBump} inc="1"></span>
          <span class="fas fa-angle-double-right pointer bumper" onClick={props.handleTipPercentageBump} inc="5"></span>
        </div>
        <div style={{"clear": "left"}}></div>
      </div>
    )
  }
}

function Header(props) {
    return (
       <div class="pageHeader">
            <i class="fas fa-calculator" style={{"padding-left": "0.25em"}}></i>
            <span class="header">Tip Calculator</span>
            <i class="fas fa-percentage" style={{"padding-right": "0.25em"}}></i>
       </div>)
}

function Split(props) {
    return (
    <span>{props.children}</span>
    )
}

class App extends Component {
  state = {total: 0,
           tipPercentage: 20,
           splits: [{locked: false}]}

  getTipAmount = () => {
    let totalWithTip = this.getTotalWithTip()
    let tipAmount = totalWithTip - this.state.total
    return (Math.round(tipAmount * 100) / 100).toFixed(2)
  }

  getTotalWithTip = () => {
    let t = this.state.total + (this.state.total * (this.state.tipPercentage / 100))
    return (Math.round(t * 100) / 100).toFixed(2);
  }

  getSplitValue = () => {
    let v = (this.state.total + (this.state.total * (this.state.tipPercentage / 100))) / this.state.splits.length
    return (Math.round(v * 100) / 100).toFixed(2);
  }

  bumpIt = (v, inc) => {
    let x = Math.floor(v)
    let quotient = Math.floor(x/Math.abs(inc))
    let remainder = x % inc

    if (inc < 0) {
        if (inc === -1) {
            return quotient + inc
        } else {
            if (remainder === 0) {
                remainder = inc * -1
            }
            return x - remainder
        }
    } else {
        if (inc === 1) {
            return quotient + inc
        } else {
            return (quotient + 1) * inc
        }
    }
  }

  handleTipPercentageBump = (props) => {
    let incr = parseInt(props.target.attributes['inc'].value)
    this.setState({total:         this.state.total,
                   tipPercentage: (this.bumpIt(this.state.tipPercentage, incr)),
                   splits:        this.state.splits})
  }

  handleTipAmountBump = (props) => {
    let tipAmount = this.getTotalWithTip() - this.state.total
    let incr = parseInt(props.target.attributes['inc'].value)
    let bumpedTipAmount = this.bumpIt(tipAmount, incr)

    let tipPercentage = (bumpedTipAmount / this.state.total) * 100

    this.setState({total:         this.state.total,
                   tipPercentage: (Math.round(tipPercentage * 100) / 100).toFixed(2),
                   splits:        this.state.splits})
  }

  handleTotalWithBillBump = (props) => {
    let twp = this.getTotalWithTip()
    let incr = parseInt(props.target.attributes['inc'].value)
    let bumpedTwp = this.bumpIt(twp, incr)

    let perc = ((bumpedTwp - this.state.total) / this.state.total) * 100

    this.setState({total:         this.state.total,
                   tipPercentage: (Math.round(perc * 100) / 100).toFixed(2),
                   splits:        this.state.splits})
  }

  handleAddClick = () => {
    this.state.splits.push({locked: false})
    this.setState({total:         this.state.total,
                   tipPercentage: this.state.tipPercentage,
                   splits:        this.state.splits})
  }

  handleTotalChange = (ev) => {
    this.setState({total:         ev.target.value / 1,
                   tipPercentage: this.state.tipPercentage,
                   splits:        this.state.splits})
  }

  handleDeleteClick = (ev) => {
    let splitId = ev.target.id
    this.state.splits.splice(splitId, 1)
    this.setState({total:         this.state.total,
                   tipPercentage: this.state.tipPercentage,
                   splits:        this.state.splits})
  }

  handleTotalSplitsClick = (ev) => {
    let totalSplits = parseInt(ev.target.attributes['totalSplits'].value)
    let newSplits = []
    for (let i=0; i<totalSplits; i++) {
        newSplits.push({locked: false})
    }

    this.setState({total:         this.state.total,
                   tipPercentage: this.state.tipPercentage,
                   splits:        newSplits})
  }

  deleteComponent = (n) => {
    return (
        <div id={n} class="pointer " style={{"color": "#990000", "text-align": "right"}} onClick={this.handleDeleteClick.bind(this)}><i class="fas fa-trash-alt"></i></div>
    )
  }

  render(props, {total, splits}) {
    return(
	  <div id="app">
        <Header/>

        <div class="billTotal">
            <label style={{"padding-right": "0.33em"}}>Bill Total</label>
            <input type="text" id="txtTotal" style={{"text-align": "center"}} onChange={this.handleTotalChange}/>
        </div>

        <div style={{"clear": "left"}}>
            <TipPercentageComponent label="Tip Percentage" handleTipPercentageBump={this.handleTipPercentageBump}>{this.state.tipPercentage}</TipPercentageComponent>
        </div>
        <div>
            <TipPercentageComponent label="Tip Amount" handleTipPercentageBump={this.handleTipAmountBump}>{this.getTipAmount()}</TipPercentageComponent>
        </div>
        <div>
            <TipPercentageComponent label='Total With Tip' handleTipPercentageBump={this.handleTotalWithBillBump}>{this.getTotalWithTip()}</TipPercentageComponent>
        </div>

        <hr/>

        <div>
            <div totalSplits="1" onClick={this.handleTotalSplitsClick} class={splits.length>0 ? "fas fa-user splitPicker pointer" : "far fa-user splitPicker pointer"}></div>
            <div totalSplits="2" onClick={this.handleTotalSplitsClick} class={splits.length>1 ? "fas fa-user splitPicker pointer" : "far fa-user splitPicker pointer"}></div>
            <div totalSplits="3" onClick={this.handleTotalSplitsClick} class={splits.length>2 ? "fas fa-user splitPicker pointer" : "far fa-user splitPicker pointer"}></div>
            <div totalSplits="4" onClick={this.handleTotalSplitsClick} class={splits.length>3 ? "fas fa-user splitPicker pointer" : "far fa-user splitPicker pointer"}></div>
            <div totalSplits="5" onClick={this.handleTotalSplitsClick} class={splits.length>4 ? "fas fa-user splitPicker pointer" : "far fa-user splitPicker pointer"}></div>
            <div totalSplits="6" onClick={this.handleTotalSplitsClick} class={splits.length>5 ? "fas fa-user splitPicker pointer" : "far fa-user splitPicker pointer"}></div>
            <div class="fa fa-user-plus pointer" style={{"padding-left": "50px"}} onClick={this.handleAddClick}></div>
        </div>

        {this.state.splits.map((s,n) => (
          <div class="splitLine">
            <div class="splitterCount">{n+1}</div>
            <div class="splitterValue">{this.getSplitValue()}</div>
            {n > 0 ? this.deleteComponent(n) : '' }
          </div>
        ))}

	  </div>
    )
  }
}

export default App;


