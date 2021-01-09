import React, { useContext, useState } from "react";
import { Input, Button } from "antd";
import { Collapse } from "antd";
import styles from "./index.less";
import storeContext, { EditFuncContext } from "../../../context";
import "./antd.less";

const { Panel } = Collapse;
const { Search } = Input;

const vesselComponents = [
  { icon: "iconBlock", title: "区块" },
  { icon: "iconBlock", title: "头部" },
  { icon: "iconBlock", title: "导航" },
  { icon: "iconBlock", title: "页脚" },
  { icon: " ", title: " " },
  { icon: " ", title: " " },
];

const basicComponents = [
  { icon: "icontext", title: "纯文本" },
  { icon: "iconLinktext", title: "链接文本" },
  { icon: "iconimage", title: "图片" },
  { icon: "iconparagraph", title: "段落" },
  { icon: "iconvideo", title: "视频" },
  { icon: "iconAudio", title: "音频" },
  { icon: "iconh1", title: "一级标题" },
  { icon: "iconh2", title: "二级标题" },
  { icon: "iconh3", title: "三级标题" },
  { icon: "iconh4", title: "四级标题" },
  { icon: "iconh5", title: "五级标题" },
  { icon: "iconh6", title: "六级标题" },
  { icon: "iconBlock", title: "内联框架" },
  { icon: "iconform", title: "表格" },
  { icon: "iconlibrary", title: "文库" },
  { icon: "iconList", title: "列表" },
  { icon: "", title: "" },
  { icon: "", title: "" },
];

const searchHistoryContent = [
  { title: "视频" },
  { title: "音频" },
  { title: "文章" },
  { title: "表格" },
  { title: "图片" },
  { title: "列表" },
  { title: "文本" },
  { title: "纯文本" },
  { title: "链接文本" },
];

const searchImages = [
  { iamge: "../../image/searchOne.png", title: "搜索一" },
  { iamge: "../../image/searchTwo.png", title: "搜索二" },
];

const array1 = vesselComponents.concat(basicComponents);

export default () => {
  const {
    state: { menu },
  } = useContext(storeContext);
  const { chooseDragComp } = useContext(EditFuncContext);
  const [input, setInput] = useState(false);
  const [value, setValue] = useState();
  const [changeMark, setChangeMark] = useState(false);

  return (
    <>
      <div className={`${styles.basicComponentsHeader}`}>
        {input ? (
          <div className={`${styles.basicComponentSearchInput}`}>
            <i className="iconfont iconsearchfor" />
            <Input
              onChange={(e) => {
                // console.log(e.target.value, 'eee')
                const temp = array1
                  .map((item) => {
                    if (item.title.indexOf(e.target.value) > -1) {
                      return item;
                    }
                  })
                  .filter((t) => t !== undefined);
                setValue(temp);
                if (e.target.value) {
                  setChangeMark(true);
                } else {
                  setChangeMark(false);
                }
              }}
              type="text"
              placeholder="在基础元件中搜索"
            />
            <i
              onClick={() => setInput(false)}
              className="iconfont iconshutdown"
            />
          </div>
        ) : (
          <div className={`${styles.basicComponentInput}`}>
            <i className="iconfont iconComponentlist" />
            <p>基础元件</p>
            <Input
              onClick={() => setInput(true)}
              type="text"
              placeholder="在基础元件中搜索"
            />
            <i className="iconfont iconsearchfor" />
          </div>
        )}
      </div>
      {input ? (
        changeMark ? (
          value && value.length !== 0 ? (
            <div className={`${styles.searchSuccessResult}`}>
              <span>搜索结果</span>
              <div className={`${styles.searchSuccessResultContent}`}>
                {value.map((c, index) => {
                  return (
                    <div
                      key={index}
                      className={`${styles.searchSuccessResultButton}`}
                    >
                      <i className={`iconfont ${c.icon}`} />
                      <p>{c.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className={`${styles.searchErrorResultContent}`}>
              <img src={require("../../image/notcomponent.png")} />
              <span className={`${styles.searchErrorResultContentSpan}`}>
                没有您需要的组件，试试去发布需求，让更多设计者知道吧~
              </span>
              <Button
                className={`${styles.searchErrorResultContentButton}`}
                type="primary"
              >
                去发布
              </Button>
            </div>
          )
        ) : (
          <div className={`${styles.basicComponentsSearchPage}`}>
            <div className={`${styles.searchHistory}`}>
              <div className={`${styles.searchHistoryTitle}`}>
                <span>历史搜索</span>
                <i className="iconfont icondelete-bin-line" />
              </div>
              <div className={`${styles.searchHistoryContent}`}>
                {searchHistoryContent.map((value, index) => {
                  return (
                    <div key={index} className={`${styles.searchHistoryTitle}`}>
                      {value.title}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={`${styles.searchHistory}`}>
              <div className={`${styles.hotSearchContent}`}>
                <span>热门搜索</span>
              </div>
              <div className={`${styles.searchHistoryContent}`}>
                {searchHistoryContent.map((value, index) => {
                  return (
                    <div key={index} className={`${styles.searchHistoryTitle}`}>
                      {value.title}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )
      ) : (
        <div className={`${styles.basicComponentsContent}`}>
          <Collapse>
            <Panel header="容器">
              <div className={`${styles.vesselComponents}`}>
                {
                    Object.entries(menu).map(([compName,config], index) => {
                        if(config.type === "vessel") {
                            return (
                                <div key={compName + index}
                                className={`${
                                    // index < 4
                                       styles.vesselComponentsButtonTop
                                    //   : styles.vesselComponentsButtonBottom
                                  }`}
                                  draggable
                                  onDragStart={() => chooseDragComp(config)}
                                >
                                    <i className={`iconfont ${config.icon}`} />
                                    <p>{config.name}</p>
                                </div>
                            )
                        }
                    })
                }
              </div>
            </Panel>
          </Collapse>
          <Collapse>
            <Panel header="基础元件">
              <div className={`${styles.basicComponent}`}>
                {Object.entries(menu).map(([compName, config], index) => {
                    if(config.type === "element") {
                        return (
                            <div
                            key={compName + index}
                            className={`${
                                // index < 16
                                styles.basicComponentButton
                                //   : styles.basicComponentButtonBottom
                            }`}
                            draggable
                            onDragStart={() => chooseDragComp(config)}
                            >
                            <i className={`iconfont ${config.icon}`} />
                            <p>{config.name}</p>
                            </div>
                        );
                }})}
              </div>
            </Panel>
          </Collapse>
          <Collapse>
            <Panel header="组合元件">
            <div className={`${styles.basicComponent}`}>
                {Object.entries(menu).map(([compName, config], index) => {
                    if(config.type === "combination") {
                        return (
                            <div
                            key={compName + index}
                            className={`${
                                // index < 16
                                styles.basicComponentButton
                                //   : styles.basicComponentButtonBottom
                            }`}
                            draggable
                            onDragStart={() => chooseDragComp(config)}
                            >
                            <i className={`iconfont ${config.icon}`} />
                            <p>{config.name}</p>
                            </div>
                        );
                }})}
              </div>
            </Panel>
          </Collapse>
        </div>
      )}
    </>
  );
};
