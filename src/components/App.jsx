import { Component } from 'react';
import React from 'react';

import Feedback from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/statistics';
import Wrapper from './Wrapper/wrapper';
import Section from './Section/Section';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClick = state => {
    this.setState(prevState => ({
      [state]: prevState[this.state] + 1,
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }
  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  }

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    console.log(options);
    return (
      <Wrapper>
        <Section title="Please leave feedback">
          <Feedback options={options} onFeedback={this.handleClick} />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            netural={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </Wrapper>
    );
  }
}
export default App;
