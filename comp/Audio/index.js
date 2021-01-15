/**
 * @description 音频组件
 */
import React from 'react';
import './index.less'

export default class Audio extends React.PureComponent {
    render() {
        const { src } = this.props
        return (
            <audio src={src} className="wp-audio" controls="controls"></audio>
        )
    }
}