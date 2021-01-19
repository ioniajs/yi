/**
 * @description 音频组件
 */
import React from 'react';
import './index.less'

export default class Audio extends React.PureComponent {
    render() {
        const { src } = this.props
        return (
            <div className="wp-audio">
                <audio src={src}  controls="controls"></audio>
            </div>
        )
    }
}