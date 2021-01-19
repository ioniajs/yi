/**
 * @description 视频组件
 */
import React from 'react';
import './index.less'

export default class Video extends React.PureComponent {
    render() {
        const { src } = this.props;
        return (
            <video src={src} className="wp-video" controls="controls"></video>
        )
    }
}