import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import About from './About';
import HistorySample from './HistorySample';
import Home from './Home';
import Profiles from './Profiles';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          {/* a태그를 대체 사용법은 Link to="주소" */}
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
        <li>
          <Link to="/history">예제</Link>
        </li>
      </ul>
      <hr />
      {/* Route path="주소규칙" component={보여줄 컴포넌트}*/}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다</h2>
              <p>{location.pathname}</p>
            </div>
          )}
          /* 
          Switch는 가장 먼저 매칭되는 단 하나의 페이지를 보여준다.
          주로 404 페이지를 만들때 path 없이 Route render={ ... } 형식으로한다. */
        />
      </Switch>
      {/* profiles 뒤에있는 :username 과 같이 생긴게 url 파라미터이다. */}
    </div>
  );
};

export default App;
