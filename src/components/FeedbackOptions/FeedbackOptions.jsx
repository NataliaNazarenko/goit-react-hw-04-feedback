import PropTypes from 'prop-types';
import { Wrapper, Button } from './FeedbackOptions.styled.jsx';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <Wrapper>
      {options.map(option => (
        <Button key={option} onClick={() => onLeaveFeedback(option)}>
          {option.toUpperCase()}
        </Button>
      ))}
    </Wrapper>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
