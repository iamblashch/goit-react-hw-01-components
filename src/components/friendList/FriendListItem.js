import css from './FriendListItem.module.css';
import PropTypes from 'prop-types'

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.statusTrue : css.statusFalse}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};