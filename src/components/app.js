import { h, render, Component } from 'preact';
import skeleton from "../style/skeleton.css";
import fa from "../style/all.min.css";

class TipPercentageComponent extends Component {

  render(props) {
    return(
      <div class="seven columns">
        <div class="row">
          <div class="one column"><i class="fas fa-angle-double-left bumper pointer" onClick={props.handleTipPercentageBump} inc="-5"></i></div>
          <div class="one column"><i class="fas fa-angle-left bumper pointer" onClick={props.handleTipPercentageBump} inc="-1"></i></div>
          <div class="two columns" style={{"text-align": "center"}}>{props.children}</div>
          <div class="one column"><i class="fas fa-angle-right bumper pointer" onClick={props.handleTipPercentageBump} inc="1"></i></div>
          <div class="one column"><i class="fas fa-angle-double-right bumper pointer" onClick={props.handleTipPercentageBump} inc="5"></i></div>
        </div>
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
    console.log('totalSplits', totalSplits)
    let newSplits = []
    for (let i=0; i<totalSplits; i++) {
        newSplits.push({locked: false})
    }

    this.setState({total:         this.state.total,
                   tipPercentage: this.state.tipPercentage,
                   splits:        newSplits})
  }

  render(props, {total, splits}) {
    return(
	  <div id="app" class="container">
        <Header/>

        <div style={{"margin-top": "1.5em"}} class="calculator row">
            <div class="three columns">&nbsp;</div>
            <label class="two columns">Bill Total</label>
            <input class="two columns" type="text" name="txtTotal" onChange={this.handleTotalChange}/>
        </div>
        <div class="calculator row">
            <div class="one column">&nbsp;</div>
            <label class="four columns" style={{"text-align": "right"}}>Tip Percentage</label>

            <TipPercentageComponent handleTipPercentageBump={this.handleTipPercentageBump}>{this.state.tipPercentage}</TipPercentageComponent>
        </div>
        <div class="calculator row">
            <div class="two columns">&nbsp;</div>
            <label class="three columns" style={{"text-align": "right"}}>Total With Tip</label>
            <TipPercentageComponent class="two columns" handleTipPercentageBump={this.handleTotalWithBillBump}>{this.getTotalWithTip()}</TipPercentageComponent>
        </div>

        <div class="row">
          <div class="two columns">&nbsp;</div>
          <div class="eight columns"><hr/></div>
        </div>

        <div class="splitPick row">
            <div class="one column">&nbsp;</div>
            <div class="one column">
                <i totalSplits="1" onClick={this.handleTotalSplitsClick} class={splits.length>0 ? "fas fa-user pointer" : "far fa-user pointer"}></i>
            </div>
            <div class="one column">
                <i totalSplits="2" onClick={this.handleTotalSplitsClick} class={splits.length>1 ? "fas fa-user pointer" : "far fa-user pointer"}></i>
            </div>
            <div class="one column">
                <i totalSplits="3" onClick={this.handleTotalSplitsClick} class={splits.length>2 ? "fas fa-user pointer" : "far fa-user pointer"}></i>
            </div>
            <div class="one column">
                <i totalSplits="4" onClick={this.handleTotalSplitsClick} class={splits.length>3 ? "fas fa-user pointer" : "far fa-user pointer"}></i>
            </div>
            <div class="one column">
                <i totalSplits="5" onClick={this.handleTotalSplitsClick} class={splits.length>4 ? "fas fa-user pointer" : "far fa-user pointer"}></i>
            </div>
            <div class="one column">
                <i totalSplits="6" onClick={this.handleTotalSplitsClick} class={splits.length>5 ? "fas fa-user pointer" : "far fa-user pointer"}></i>
            </div>
        </div>

        {this.state.splits.map((s,n) => (
          <div class="splitLine row">
            <div class="four columns">&nbsp;</div>
            <div class="six columns">{this.getSplitValue()}</div>
            <div class="one column"><i class="fas fa-lock-open"></i></div>
            <div id={n} class="one column pointer " style={{"color": "#990000"}} onClick={this.handleDeleteClick.bind(this)}><i class="fas fa-trash-alt"></i></div>
          </div>
        ))}
        <div class="fas fa-plus-square fa-2x pointer" style={{"color": "#009900"}} onClick={this.handleAddClick}></div>

	  </div>
    )
  }
}

export default App;


