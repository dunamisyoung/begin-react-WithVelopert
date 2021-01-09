import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './Profile';

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
      </ul>
      <hr />
      {/* Route path="주소규칙" component={보여줄 컴포넌트}*/}
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/profiles/:username" component={Profile} />
      {/* profiles 뒤에있는 :username 과 같이 생긴게 url 파라미터이다. */}
    </div>
  );
};

export default App;
