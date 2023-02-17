import { Profile } from 'components/profile/Profile';
import user from '../components/profile/user.json';

import { Statistics } from 'components/statistics/Statistics';
import stats from '../components/statistics/data.json';

import { FriendList } from 'components/friendList/FriendList';
import  friends  from "../components/friendList/friends.json";

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={stats} />

      <FriendList friends={friends}/>;

    </>
  );
};
