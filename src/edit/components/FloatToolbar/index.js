import React, { useState } from "react";
import styles from "./index.less";
import BasicComponents from "../BasicComponents";
import PageNav from "../PageNav";

export const ToolButton = ({ active = false, icon, title, onClick }) => (
  <div className={`${styles.floatTool}`}>
    <div
      className={`${styles.toolButton} ${
        active ? styles.toolButtonActive : ""
      }`}
      onClick={onClick}
    >
      <i className={`iconfont ${icon}`} />
    </div>
    <span
      onClick={onClick}
      className={`${styles.toolButton} ${active ? styles.toolSpanActive : ""}`}
    >
      {title}
    </span>
  </div>
);

export const ToolModal = ({ header }) => (
  <>
    <div className={`${styles.floatModalHeader}`}>{header}</div>
  </>
);

const FloatToolbar = () => {
  const [active, setActive] = useState(1);
  const [showIcon, setShowIcon] = useState(true);

  const Expand = () => {
    return (
      <div
        onClick={() => setShowIcon(!showIcon)}
        className={`${styles.floatToolRightButton} ${styles.floatToolRightButtonActive}`}
      >
        <i className="iconfont iconright" />
      </div>
    );
  };

  const ExpandModel = () => {
    return (
      <div
        onClick={() => setShowIcon(!showIcon)}
        className={`${styles.floatModalRightButton} ${styles.floatModalRightButtonActive}`}
      >
        <i className="iconfont iconright" />
      </div>
    );
  };

  return (
    <>
      <div>
        <div className={styles.floatToolbar}>
          <ToolButton
            icon="iconpage"
            active={active === 1}
            onClick={() => setActive(1)}
            title="所有分页"
          />
          <ToolButton
            icon="iconelement"
            active={active === 2}
            onClick={() => setActive(2)}
            title="基础元件"
          />
          <ToolButton
            icon="iconComponent"
            active={active === 3}
            onClick={() => setActive(3)}
            title="组件库"
          />
          <ToolButton
            icon="iconIconlibrary"
            active={active === 4}
            onClick={() => setActive(4)}
            title="图标库"
          />
          <ToolButton
            icon="iconmine"
            active={active === 5}
            onClick={() => setActive(5)}
            title="我的"
          />
        </div>
        {active > 0 && !showIcon && <Expand />}
      </div>
      {active === 1 && showIcon && (
        <>
          <div className={`${styles.floatModal}`}>
            <PageNav />
          </div>
          <ExpandModel />
        </>
      )}
      {active === 2 && showIcon && (
        <>
          <div className={`${styles.floatModal}`}>
            <ToolModal header={<BasicComponents />} />
          </div>
          <ExpandModel />
        </>
      )}
    </>
  );
};

export default FloatToolbar;
