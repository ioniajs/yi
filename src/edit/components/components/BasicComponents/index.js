import React from 'react';
import { Input } from 'antd'
import styles from './index.less'

export default () => {
    return (
        <>
            <div className={`${styles.BasicComponentsHeader}`}>
                {/* <i className="iconfont iconsearchfor" /> */}
                <Input type="search" placeholder="在基础元件中搜索" />
                <i className="iconfont iconshutdown" />
            </div>
        </>
    )
}