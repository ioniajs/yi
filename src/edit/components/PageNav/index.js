import React from "react";
import { Tree } from "antd";
import "./index.less";

const { DirectoryTree } = Tree;

const treeData = [
  {
    title: "首页",
    key: "home",
    isLeaf: true,
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
        blockNode
        defaultExpandAll
        onSelect={onSelect}
        onExpand={onExpand}
        treeData={treeData}
        titleRender={(node) => (
          <div className="page-tree-node">
            {node.title}
            {node.isLeaf && (
              <div>
                <i className="iconfont iconedit page-tree-icon" />
                <i className="iconfont iconcopy page-tree-icon" />
                <i className="iconfont icondelete-bin-line page-tree-icon" />
              </div>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default PageNav;
