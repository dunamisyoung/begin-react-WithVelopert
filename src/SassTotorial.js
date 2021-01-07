import React from 'react';
import Button from './components/Button';
import './SassTotorial.scss';

const SassTotorial = () => {
  return (
    <div className="SassTotorial">
      <div className="buttons">
        <Button size="large">BUTTON</Button>
        <Button>BUTTON</Button>
        <Button size="small">BUTTON</Button>
      </div>
      <div className="buttons">
        <Button color="gray" size="large">
          BUTTON
        </Button>
        <Button color="gray">BUTTON</Button>
        <Button color="gray" size="small">
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button color="pink" size="large">
          BUTTON
        </Button>
        <Button color="pink">BUTTON</Button>
        <Button color="pink" size="small">
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" outline>
          BUTTON
        </Button>
        <Button color="gray" outline>
          BUTTON
        </Button>
        <Button color="pink" outline size="small">
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" fullWidth>
          BUTTON
        </Button>
        <Button color="gray" size="large" fullWidth>
          BUTTON
        </Button>
        <Button
          color="pink"
          size="large"
          fullWidth
          onClick={() => console.log('클릭')}
          onMouseMove={() => console.log('마우스무브')}
        >
          BUTTON
        </Button>
      </div>
    </div>
  );
};

export default SassTotorial;
