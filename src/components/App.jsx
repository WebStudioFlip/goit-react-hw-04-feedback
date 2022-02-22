import { Component } from "react";
import Section from '../shared/Section'
import Statistics from './Statistics'
import  FeedbackOptions from './FeedbackOptions'


class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0    
  }

    render () {
      return (
      <div className="App"  style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start', 
        fontSize: 40,
        textTransform: 'uppercase',
        color: '#010101',
        flexDirection: 'column',
        marginLeft: '20px'
      }}>
        <Section title="Please leave feedback">
        <FeedbackOptions options={this.state} onLeaveFeedback={this.onBtnClick}/>
        </Section>
        <Section title="Statictics">
        <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>
        </Section>
    
     
    </div>
      )}

      countTotalFeedback = () => {
        const total = Object.values(this.state).reduce((previousValue, number) => {
          return previousValue + number;
        }, 0)
        return total
      }

      countPositiveFeedbackPercentage = () =>  {
        const percentage = this.state['good']*100/this.countTotalFeedback();
        return percentage;
      }

      onBtnClick = (property) => {
        this.setState(prevState => {
          const value = prevState[property];

          return {
              [property]: value + 1    
          }
      })
      }

  }

  export default App;
