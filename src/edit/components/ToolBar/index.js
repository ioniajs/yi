import { Input, Tooltip } from "antd";
import React, { useContext } from "react";
import storeContext, { EditFuncContext } from "../../../context";
import "./index.less";

export const ToolButton = ({ icon, title, onClick }) => (
  <div className="tool-button">
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
    paintScale,
    changeSlider,
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

  const handleZoomIn = () => {
    let scale = 10;
    switch (Number((paintScale * 100).toFixed(0))) {
      case 100:
        scale = 60;
        break;
      case 60:
        scale = 30;
        break;
      case 30:
        scale = 10;
        break;
      default:
        scale = 10;
        break;
    }
    changeSlider(scale);
  };
  const handleZoomOut = () => {
    let scale = 100;
    switch (Number((paintScale * 100).toFixed(0))) {
      case 60:
        scale = 100;
        break;
      case 30:
        scale = 60;
        break;
      case 10:
        scale = 30;
        break;
      default:
        scale = 100;
        break;
    }
    changeSlider(scale);
  };

  return (
    <div className="toolbar">
      <div className="toolbar-container">
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
        {/* <Input
          className="zoom-input"
          width={40}
          readOnly
          addonAfter={<i className="iconfont iconAddmodule" />}
          addonBefore={<i className="iconfont iconLess" />}
        /> */}
        <div className="tool-button">
          <i className="iconfont iconLess zoom-icon" onClick={handleZoomIn} />
          <span className="zoom-scale">{(paintScale * 100).toFixed(0)}%</span>
          <i
            className="iconfont iconAddmodule zoom-icon"
            onClick={handleZoomOut}
          />
        </div>
        {/* <ToolButton title="画布设置" icon="iconSetup" /> */}
        <ToolButton title="预览" icon="iconPreview" onClick={showPage} />
        <ToolButton title="保存" icon="iconsave" onClick={savePage} />
      </div>
    </div>
  );
};

export default Toolbar;
