import React from 'react';
import { withRouter } from 'react-router-dom';

const WithRouterSample = ({ location, match, history }) => {
  console.log('match', match);
  return (
    <div>
      <h4>location</h4>
      <textarea value={JSON.stringify(location, null, 2)} readOnly></textarea>
      <h4>match</h4>
      <textarea value={JSON.stringify(match, null, 2)} readOnly></textarea>
      <button onClick={() => history.push('/')}>홈으로</button>
      {/* match는 현재 자신이 렌더링된 위치를 기준으로 match 값을 받아온다.
        하지만 location은 어디선 불러오든 같은정보를 가져온다.
      */}
    </div>
  );
};

export default withRouter(WithRouterSample);
