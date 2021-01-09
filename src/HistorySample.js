import React, { useEffect } from 'react';

const HistorySample = ({ history }) => {
  /* 
    action은 가장 마지막에 발생한 action을 가지고있다. 
    여기서 push는 link로 이동됫을때
    pop은 뒤로가기

    go는 입력한 숫자만큼 페이지를 앞으로, 뒤로 이동시킨다.
    goBack은 뒤로가기
    goForward는 앞으로가기
    listen은 경로에 변경이 생겻을때 특정함수 호출하고싶다면 사용.
    location은 현재 자신이 위치한 경로에대한 정보 나타냄
    push는 특정주소로 이동 - 방문기록 남음
    replace도 특정주소로이동 - 방문기록이 안남음
  */
  const goback = () => {
    history.goback();
  };
  const goHome = () => {
    history.push('/');
  };

  const replaceToHome = () => {
    history.replace('/');
  };

  useEffect(() => {
    // history라는 주소를 떠날때 물어보도록 설정, 즉 사용자가 이탈할때 경고출력
    console.log(history);
    const unblock = history.block('정말 떠나실건가요?');
    return () => {
      unblock();
    };
  }, [history]);

  return (
    <div>
      <button onClick={goback}>뒤로가기</button>
      <button onClick={goHome}>홈으로</button>
      <button onClick={replaceToHome}>홈으로 (Replace)</button>
    </div>
  );
};

export default HistorySample;
