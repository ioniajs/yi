import { Input } from "antd";
import React, { useContext } from "react";
import storeContext from "../../../context";
import { EnumEdit, searchTree } from "../../common";
import "./index.less";

export const InlineEditor = ({ props, setMode }) => {
  const { state, dispatch } = useContext(storeContext);
  const { tabIndex, choose, tree } = state;

  let key = "text";
  let value = null;

  return (
    <div className="inline-editor">
      <Input
        autoFocus
        onBlur={() => {
          setMode("read");
        }}
        defaultValue={props.text}
        style={{
          fontSize: props.fontSize,
          border: "none",
        }}
        onChange={(e) => {
          value = e.target.value;
          const nextTree = searchTree(tree, choose, EnumEdit.change, {
            tabIndex,
            items: [{ key, value, index: 2 }],
          });
          dispatch({
            type: "UPDATE_TREE",
            payload: nextTree,
          });
        }}
      />
    </div>
  );
};
