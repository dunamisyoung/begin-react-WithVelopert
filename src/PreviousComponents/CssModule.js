import React, { useState } from 'react';
import CheckBox from './CheckBox';

const CssModule = () => {
  const [check, setCheck] = useState(false);

  const onChange = (e) => {
    setCheck(e.target.checked);
  };

  return (
    <div>
      <CheckBox onChange={onChange} checked={check}>
        다음약관에 모두 동의
      </CheckBox>
    </div>
  );
};

export default CssModule;
