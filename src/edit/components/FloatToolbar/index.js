import React, { useState } from "react";
import styles from "./index.less";

export const ToolButton = ({ active = false, icon, title, onClick }) => (
  <div
    className={`${styles.toolButton} ${active ? styles.toolButtonActive : ""}`}
    onClick={onClick}
  >
    <i className={`iconfont ${icon}`} />
  </div>
);

const FloatToolbar = () => {
  const [active, setActive] = useState(0);
  return (
    <div className={styles.floatToolbar}>
      <ToolButton
        icon="iconpage"
        active={active === 0}
        onClick={() => setActive(0)}
      />
      <ToolButton
        icon="iconelement"
        active={active === 1}
        onClick={() => setActive(1)}
      />
      <ToolButton
        icon="iconComponent"
        active={active === 2}
        onClick={() => setActive(2)}
      />
      <ToolButton
        icon="iconIconlibrary"
        active={active === 3}
        onClick={() => setActive(3)}
      />
      <ToolButton
        icon="iconmine"
        active={active === 4}
        onClick={() => setActive(4)}
      />
    </div>
  );
};

export default FloatToolbar;
