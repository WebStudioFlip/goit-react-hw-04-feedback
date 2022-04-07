import { useState} from 'react';
import Section from '../shared/Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';

const App = () => {
  const [votes, setVotes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const countTotalFeedback = () => {
    const total = Object.values(votes).reduce((previousValue, number) => {
      return previousValue + number;
    }, 0);
    return total;
  };
  
  const countPositiveFeedbackPercentage = () => {
    const percentage = (votes['good'] * 100) / countTotalFeedback();
    return percentage;
  };
  
  const onBtnClick = property => {
    console.log("click")
    setVotes(prevState => {
      const value = prevState[property];  
      return {
        ...votes,
        [property]: value + 1,
      };
    });
  }

  return (
    <div
      className="App"
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        fontSize: 40,
        textTransform: 'uppercase',
        color: '#010101',
        flexDirection: 'column',
        marginLeft: '20px',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(votes)}
          onLeaveFeedback={onBtnClick}
        />
      </Section>
      <Section title="Statictics">
        <Statistics
          good={votes.good}
          neutral={votes.neutral}
          bad={votes.bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
};



export default App;
