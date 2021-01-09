import React from 'react';
import Profile from './Profile';
import { NavLink, Route } from 'react-router-dom';

const Profiles = () => {
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          {/* NavLink는 Link에서 사용하는 경로가 일치했을때 특정 스타일이나 CSS 클래스를 적용할수있게 하는 컴포넌트이다.
          만약 스타일을 부여하고 싶다면 activeStyle을 클래스를 부여하고싶다면 activeClassName을 이용하면된다. 
          isActive를 통해서 함수로 조건부 스타일링을 할수있다. 
          isActive는 파라미터로 두가지를 가져온다.((match, location) => { 
            retrun match.location === 'blabla' 
          })
          */}
          <NavLink
            to="/profiles/velopert"
            activeStyle={{ background: 'black', color: 'white' }}
            activeClassName="active"
          >
            velopert
          </NavLink>
        </li>
        <li>
          <NavLink to="/profiles/dunamisyoung" activeStyle={{ background: 'black', color: 'white' }}>
            dunamisyoung
          </NavLink>
        </li>
      </ul>

      <Route path="/profiles" exact render={() => <div>사용자를 선택해주세요</div>} />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default Profiles;
