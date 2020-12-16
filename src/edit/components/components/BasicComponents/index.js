import React, { useState } from 'react';
import { Input } from 'antd'
import { Collapse } from 'antd';
import styles from './index.less';

const { Panel } = Collapse;

const vesselComponentsTop = [
    {icon: 'iconBlock',title: '区块'},
    {icon: 'iconBlock',title: '头部'},
    {icon: 'iconBlock',title: '导航'},
    {icon: 'iconBlock',title: '页脚'},

]

const basicComponents = [
    {icon: 'icontext', title: '纯文本' },
    {icon: 'iconLinktext', title: '链接文本' },
    {icon: 'iconimage', title: '图片' },
    {icon: 'iconparagraph', title: '段落' },
    {icon: 'iconvideo', title: '视频' },
    {icon: 'iconAudio', title: '音频' },
    {icon: 'iconh1', title: '一级标题'},
    {icon: 'iconh2', title: '二级标题'},
    {icon: 'iconh3', title: '三级标题'},
    {icon: 'iconh4', title: '四级标题'},
    {icon: 'iconh5', title: '五级标题'},
    {icon: 'iconh6', title: '六级标题'},
    {icon: 'iconBlock', title: '内联框架'},
    {icon: 'iconform', title: '表格'},
    {icon: 'iconlibrary', title: '文库'},
    {icon: 'iconList', title: '列表'},
]

const searchHistoryContent = [
    {title: '视频'},
    {title: '音频'},
    {title: '文章'},
    {title: '表格'},
    {title: '图片'},
    {title: '列表'},
    {title: '文本'},
    {title: '纯文本'},
    {title: '链接文本'},
]

export default () => {
    const [input, setInput] = useState(true)
    return (
        <>
            <div className={`${styles.basicComponentsHeader}`}>
                {
                input 
                    ? 
                        (<div className={`${styles.basicComponentSearchInput}`}>
                            <i  className="iconfont iconsearchfor" /> 
                            <Input type="text" placeholder="在基础元件中搜索" />
                            <i onClick={() => setInput(false)} className="iconfont iconshutdown" />
                        </div>) 
                    : 
                        (<div className={`${styles.basicComponentInput}`}>
                            <i className="iconfont iconComponentlist" />
                            <p>基础元件</p>
                            <Input onClick={() => setInput(true)} type="text" placeholder="在基础元件中搜索" />
                            <i className="iconfont iconsearchfor" />
                        </div>)
                }
            </div>
            {
                input
                    ? 
                        (<div className={`${styles.basicComponentsSearchPage}`}>
                            <div className={`${styles.searchHistory}`}>
                                <div className={`${styles.searchHistoryTitle}`}>
                                    <span>历史搜索</span>
                                    <i className="iconfont icondelete-bin-line" />
                                </div>
                                <div className={`${styles.searchHistoryContent}`}>
                                    {
                                       searchHistoryContent.map((value,index) => {
                                           return (
                                            <div key={value.title} className={`${styles.searchHistoryTitle}`} >
                                                {value.title}
                                            </div>
                                           )
                                       }) 
                                    }
                                </div>
                            </div>
                            <div className={`${styles.searchHistory}`}>
                                <div className={`${styles.hotSearchContent}`}>
                                    <span>热门搜索</span>
                                </div>
                                <div className={`${styles.searchHistoryContent}`}>
                                    {
                                       searchHistoryContent.map((value,index) => {
                                           return (
                                            <div key={value.title}  className={`${styles.searchHistoryTitle}`} >
                                                {value.title}
                                            </div>
                                           )
                                       }) 
                                    }
                                </div>
                            </div>
                        </div>)   
                    :    
                        (<div className={`${styles.basicComponentsContent}`}>
                            <Collapse>
                                <Panel header="容器">
                                    <div className={`${styles.vesselComponents}`}>
                                    {
                                        vesselComponentsTop.map((a,index) => {
                                            return (
                                                <div key={a.title} className={`${styles.vesselComponentsButtonTop}`}>
                                                    <i className={`iconfont ${a.icon}`} />
                                                    <p>{a.title}</p>
                                                </div>
                                            )
                                        })
                                    }
                                    </div>
                                    {/* <div className={`${styles.vesselComponentsBottom}`}>
                                    {
                                        vesselComponentsBottom.map((b,index) => {
                                            return (
                                                <div key={b.title} className={`${styles.vesselComponentsButtonBottom}`} >
                                                    <i className={`iconfont ${b.icon}`} />
                                                    <p>{b.title}</p>
                                                </div>
                                            )
                                        })
                                    }
                                    </div> */}
                                </Panel>
                            </Collapse>
                            <Collapse>
                                <Panel header="基础元件">
                                    <div className={`${styles.basicComponent}`} >
                                        {
                                            basicComponents.map((c,index) => {
                                                return (
                                                    <div key={c.title} className={`${styles.basicComponentButton}`} >
                                                        <i className={`iconfont ${c.icon}`} />
                                                        <p>{c.title}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </Panel>
                            </Collapse>
                            <Collapse>
                            <Panel header="组合元件">
                                <div className={`${styles.combinationComponent}`} >
                                    {
                                        basicComponents.map((c,index) => {
                                            return (
                                                <div key={c.title} className={`${styles.combinationComponentButton}`} >
                                                    <i className={`iconfont ${c.icon}`} />
                                                    <p>{c.title}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </Panel>
                        </Collapse>
                        </div>)

            }
        </>
    )
}