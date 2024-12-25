import clsx from "clsx";
import { memo } from "react";
import style from "./index.module.scss";

const CardList = memo(() => {
  return (
    <div className={clsx(style.container)}>
      <div className={clsx(style.card)}>
        <div className={clsx(style.details)}>
          <div className={clsx(style.task)}>Sample Task</div>
          <div className={clsx(style.description)}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem,
            modi?
          </div>
        </div>
        <div className={clsx(style.actions)}>
          <div className={clsx(style.mark)}></div>
          <div className={clsx(style.edit)}></div>
        </div>
      </div>
    </div>
  );
});

export default CardList;
