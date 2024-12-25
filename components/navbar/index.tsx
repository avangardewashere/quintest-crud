import clsx from 'clsx';
import { memo } from 'react';
import style from './index.module.scss';

const Navbar = memo(() => {
  return (
    <div className={clsx(style.container)}>
      Hadline
    </div>
  );
});

export default Navbar;