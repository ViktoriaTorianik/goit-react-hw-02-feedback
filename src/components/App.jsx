import { Component } from 'react';
import React from 'react';
class App extends Component {
  state = {
    good: 1,
    neutral: 1,
    bad: 1,
  };
  handleClick = name => {
    this.setState(prevStat => ({ [name]: prevStat[name] + 1 }));
  };

  render() {
    const options = Object.keys(this.state);
    return (
      <section>
        <div>
          <h1>Please leave feedback</h1>
          {options.map(name => (
            <button type="button" onClick={() => this.handleClick(name)}>
              {name}
            </button>
          ))}

          <div>
            <h2>Statistics</h2>
            <ul>
              <li>
                <p>Good</p>
                <p>{this.state.good}</p>
              </li>
              <li>
                <p>Neutral</p>
                <p>{this.state.neutral}</p>
              </li>
              <li>
                <p>Bad</p>
                <p>{this.state.bad}</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
export default App;
