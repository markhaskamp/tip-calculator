import { h, render, Component } from 'preact';
import skeleton from "../style/skeleton.css";
import fa from "../style/all.min.css";

class TipPercentageComponent extends Component {

  render(props) {
    return(
      <div>
        <i class="fas fa-angle-double-left bumper" onClick={props.handleTipPercentageBump} inc="-5"></i>
        <i class="fas fa-angle-left bumper" onClick={props.handleTipPercentageBump} inc="-1"></i>
        <span>{props.tp}%</span>
        <i class="fas fa-angle-right bumper" onClick={props.handleTipPercentageBump} inc="1"></i>
        <i class="fas fa-angle-double-right bumper" onClick={props.handleTipPercentageBump} inc="5"></i>
      </div>
    )
  }
}

function Header(props) {
    return (
       <div class="row pageHeader" style={{"padding-top": "0.667em"}}>
            <div class="one column"><i class="fas fa-calculator fa-3x" style={{"padding-left": "0.25em"}}></i></div>
            <div class="ten columns"><h3>Tip Calculator</h3></div>
            <div class="one column"><i class="fas fa-percentage fa-3x" style={{"padding-right": "0.25em"}}></i></div>
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

  render(props, {total, splits}) {
    return(
	  <div id="app" class="container">
        <Header/>

        <div style={{"margin-top": "1.5em"}} class="row">
            <div class="one column"/>
            <label class="two columns">Bill Total</label>
            <input class="two columns" type="text" name="txtTotal" onChange={this.handleTotalChange}/>
        </div>
        <div class="row">
            <div class="one column"/>
            <label class="two columns">Tip Percentage</label>

            <TipPercentageComponent class="two columns" handleTipPercentageBump={this.handleTipPercentageBump} tp={this.state.tipPercentage}>{this.state.tipPercentage}</TipPercentageComponent>
        </div>
        <div class="row">
            <div class="one column"/>
            <label class="two columns">Total With Tip</label>
            <label class="two columns">{this.getTotalWithTip()}</label>
        </div>

        {this.state.splits.map((s,n) => (
          <div class="splitLine row">
            <span class="one column">
              <Split id={n} class="two columns">{this.getSplitValue()}</Split>
            </span>
            <span id={n} class="delete one column" style={{"color": "#990000"}} onClick={this.handleDeleteClick.bind(this)}><i class="fas fa-trash-alt fa-lg"></i></span>
          </div>
        ))}
        <div class="fas fa-plus-square fa-2x" style={{"color": "#009900"}} onClick={this.handleAddClick}></div>

	  </div>
    )
  }
}

export default App;


