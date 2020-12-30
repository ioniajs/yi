import React, { useState } from "react";
import { Tree, Modal } from "antd";
import { ExclamationCircleOutlined } from '@ant-design/icons';
import CreatePage from './CreatePage';
import "./index.less";
import CopyPage from './CopyPage';

const { DirectoryTree } = Tree;

const treeData = [
  {
    title: "首页",
    key: "home",
    // isLeaf: true,
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

  const [deletePage, setDeletePage] = useState(false)
  const [createPage, setCreatePage] = useState(false)
  const [copyPage, setCopyPage] = useState(false)
  return (
    <div className="page-nav">
      <div className="page-nav-header">
        所有页面
        <i onClick={() => setCreatePage(true)} className="iconfont iconAdd page-nav-icon" />
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
                <i onClick={() => setCopyPage(true)} className="iconfont iconcopy page-tree-icon" />
                <i onClick={() => setDeletePage(true)} className="iconfont icondelete-bin-line page-tree-icon" />
              </div>
            )}
          </div>
        )}
      />
    <Modal className="page-delete-modal" title="提示" visible={deletePage} onOk={() => setDeletePage(false)} okText="确定" cancelText="取消">
      <ExclamationCircleOutlined />
      <p className="page-modal-delete-content-p">确定要删除该页面？删除后不能恢复。</p>
    </Modal>
    <CreatePage setCreatePage={setCreatePage} createPage={createPage}  />
    <CopyPage setCopyPage={setCopyPage} copyPage={copyPage}  />
    </div>
  );
};

export default PageNav;
