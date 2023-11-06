import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedback = {
    good,
    neutral,
    bad,
  };

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        break;
    }
  };
  const onTotal = () => {
    return good + neutral + bad;
  };
  const positivePercentage = () => {
    const total = onTotal();
    const number = Math.round((good * 100) / total);
    return number;
  };

  return (
    <Section title={'Plese leave your feedback'}>
      <FeedbackOptions
        options={Object.keys(feedback)}
        onLeaveFeedback={onLeaveFeedback}
      />
      {onTotal() ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={onTotal()}
          positivePercentage={positivePercentage()}
        />
      ) : (
        <Notification message={'There is no feedback'} />
      )}
    </Section>
  );
};
