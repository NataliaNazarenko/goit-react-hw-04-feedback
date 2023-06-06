import PropTypes from 'prop-types';
import { TitleMessage } from './Notification.styled';

export function Notification({ message }) {
  return <TitleMessage>{message}</TitleMessage>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
