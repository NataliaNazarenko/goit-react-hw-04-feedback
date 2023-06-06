import PropTypes from 'prop-types';
import {
  Wrapper,
  GoodFeedback,
  NeutralFeedback,
  BadFeedback,
  Total,
  PositivePercentage,
} from './Statistics.styled';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <Wrapper>
      <GoodFeedback>Good: {good}</GoodFeedback>
      <NeutralFeedback>Neutral: {neutral}</NeutralFeedback>
      <BadFeedback>Bad: {bad}</BadFeedback>
      <Total>Total: {total}</Total>
      <PositivePercentage>Positive Percentage: {positivePercentage}%</PositivePercentage>
    </Wrapper>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
