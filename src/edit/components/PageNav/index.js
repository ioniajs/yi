import React from "react";
import { Tree } from "antd";
import "./index.less";

const { DirectoryTree } = Tree;

const treeData = [
  {
    title: "首页",
    key: "home",
  },
  {
    title: "新闻",
    key: "news",
    children: [
      { title: "leaf 1-0", key: "0-1-0", isLeaf: true },
      { title: "leaf 1-1", key: "0-1-1", isLeaf: true },
    ],
  },
];

const PageNav = () => {
  const onSelect = (keys, event) => {
    console.log("Trigger Select", keys, event);
  };

  const onExpand = () => {
    console.log("Trigger Expand");
  };

  return (
    <div className="page-nav">
      <div className="page-nav-header">
        所有页面
        <i className="iconfont iconAdd page-nav-icon" />
      </div>
      <DirectoryTree
        className="page-tree"
        multiple
        defaultExpandAll
        onSelect={onSelect}
        onExpand={onExpand}
        treeData={treeData}
      />
    </div>
  );
};

export default PageNav;
