import { h, render, Component } from 'preact';

class App extends Component {
  state = { value: ''}
  render() {
    return(
	  <div id="app">
        always read the plaque
	  </div>
    )
  }
}

export default App;


