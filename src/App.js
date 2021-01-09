import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';

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
    </div>
  );
};

export default App;
