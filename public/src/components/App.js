import React, { Component } from "react";

class App extends Component {
  add(){
    this.props.onAdd();
  }

  decrease(){
    this.props.onDecrease();
  }

  render() {
    return (
      <div>
        {this.props.value}
        <button onClick={this.add.bind(this)}>add</button>
        <button onClick={this.decrease.bind(this)}>decrease</button>
      </div>
    )
  }
}

export default App;
