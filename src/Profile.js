import React from 'react';
import WithRouterSample from './WithRouterSample';

const profileData = {
  velopert: {
    name: '김민준',
    description: 'FE Engineer @ RIDI',
  },
  dunamisyoung: {
    name: '이영상',
    description: 'FastCamput FE 17',
  },
};

const Profile = ({ match }) => {
  console.log(match);
  // path로 전달되는 url 파라미터를 읽을때는 match.params 값을 통해 접근이 가능하다.
  const { username } = match.params;
  const profile = profileData[username];

  if (!profile) {
    return <div>존재하지 않는 사용자 입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  );
};

export default Profile;
