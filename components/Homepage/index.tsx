import clsx from 'clsx';
import { memo } from 'react';
import style from './index.module.scss';

const Homepage = memo(() => {
  return (
    <div className={clsx(style.container)}>
      Hello World
    </div>
  );
});

export default Homepage;