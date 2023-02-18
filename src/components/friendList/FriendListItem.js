import css from './FriendListItem.module.css';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.statusTrue : css.statusFalse}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

