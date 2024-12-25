import clsx from "clsx";
import { memo } from "react";
import style from "./index.module.scss";
import CardList from "./CardList";

const Homepage = memo(() => {
  return (
    <div className={clsx(style.container)}>
      <CardList />
    </div>
  );
});

export default Homepage;
