import styles from "./index.less";
import React, { useContext, useCallback, useRef, useMemo } from "react";
import storeContext, { EditFuncContext } from "../../../context";
import { searchTree, EnumEdit } from "../../common";
import { record } from "../../record";
import {
  Tabs,
  Layout,
  Input,
  Select,
  Switch,
  Popover,
  message,
  Tooltip,
} from "antd";
import { SketchPicker } from "react-color";

const IsMacOS = navigator.platform.match("Mac");
const { TabPane } = Tabs;
const { Option } = Select;
const tab = ["页面设置", "样式", "属性"];

export const ToolButton = ({ icon, title, onClick }) => (
  <div className={styles.toolButton}>
    <Tooltip
      title={
        <span style={{ color: "#333333", fontSize: 14, fontWeight: 400 }}>
          {title}
        </span>
      }
      color="#fff"
    >
      <i className={`iconfont ${icon}`} onClick={onClick} />
    </Tooltip>
  </div>
);

const Toolbar = () => {
  const {
    state: { choose },
  } = useContext(storeContext);
  const {
    changeSourceCodeMode,
    savePage,
    showPage,
    deleteNode,
    copeNode,
    pasteNode,
    cutNode,
    returnEdit,
    resumeEdit,
    changePosNode,
    copyCompEl,
  } = useContext(EditFuncContext);
  // const canReturnEdit = record.point > 0;
  // const canResumeEdit = record.point < record.stack.length - 1;
  // const canPaste = !!copyCompEl.current;

  // const fillUnable = useCallback((can) => (can ? undefined : style.unable));

  return (
    <div className={styles.header}>
      <div className={styles.logo}>首页</div>
      <div className={styles.toolbar}>
        {/* <ToolButton title="提示" icon="iconTemplatemarket" /> */}
        <ToolButton
          title="源码"
          icon="iconSourcecode"
          onClick={changeSourceCodeMode}
        />
        <ToolButton title="撤销" icon="iconRevokel" onClick={returnEdit} />
        <ToolButton title="恢复" icon="iconRedo" onClick={resumeEdit} />

        {/* <ToolButton title="提示" icon="iconMoretemplates" />

        <ToolButton title="提示" icon="iconQuote" /> */}

        <ToolButton title="画布设置" icon="iconSetup" />
        <ToolButton title="预览" icon="iconPreview" onClick={showPage} />
        <ToolButton title="保存" icon="iconsave" onClick={savePage} />
      </div>
    </div>
  );
};

export default Toolbar;
