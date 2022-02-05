import { h, render, Component } from 'preact';

class TipPercentageComponent extends Component {
  state = {tipPercentage: 20}
  handleTipPercentageChange = (ev) => {
    this.setState({tipPercentage: ev.target.value * 1})
  }

  render(props, state) {
    return(
      <div>
        <input type="range"
               id="sldrTipPercentage" 
               min="5" max="50"
               value="{this.state.tipPercentage}"
               onChange={this.handleTipPercentageChange}/>
        <label>{this.state.tipPercentage}</label>
      </div>
    )
  }
}

function Split(props) {
    return (
    <span>{props.children}</span>
    )
}

class App extends Component {
  state = {total: 0,
           tipPercentage: 20,
           splits: []}

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
    // debugger
    let splitId = ev.target.id
    this.state.splits.splice(splitId, 1)
    this.setState({total:         this.state.total,
                   tipPercentage: this.state.tipPercentage,
                   splits:        this.state.splits})
  }


  render(props, {total, splits}) {
    return(
	  <div id="app">
        <label>Total</label> &nbsp; <input type="text" name="txtTotal" onChange={this.handleTotalChange}/>
        <br />
        <TipPercentageComponent>20</TipPercentageComponent>
        <hr />

        {this.state.splits.map((s,n) => (
          <div>
            <span>
              <Split id={n}>{(this.state.total + (this.state.total * (this.state.tipPercentage / 100))) / this.state.splits.length}</Split>
            </span>
            <span id={n} onClick={this.handleDeleteClick.bind(this)}> [x]
            </span>
          </div>
        ))}
        <input type="button" value="add 1" onClick={this.handleAddClick}></input>

	  </div>
    )
  }
}

export default App;


