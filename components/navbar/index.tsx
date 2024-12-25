import clsx from "clsx";
import { memo } from "react";
import style from "./index.module.scss";

const Navbar = memo(() => {
  return (
    <div className={clsx(style.container)}>
      <div className={clsx(style.text)}>
        <div className={clsx(style.title)}>Task Tracker</div>
        <div className={clsx(style.subtitle)}>
          Helps you track your task down
        </div>
      </div>
    </div>
  );
});

export default Navbar;
