import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
  /* Route와 연결된 컴포넌트로 전달되는 match history location 중 URL 쿼리에 접근하기위에서는
    location의 search에 접근하면된다. */
  console.log(location);
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const detail = query.detail === 'true';
  console.log(query);

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트입니다.</p>
      {detail && <p>detail 값이 true 입니다!</p>}
    </div>
  );
};

export default About;
