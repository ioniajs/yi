/**
 * @description 链接文本组件
 */
import React from 'react';

export default class LinkText extends React.PureComponent {
    render() {
        const { text, color, fontSize, lineHeight, textAlign, fontWeight } = this.props;
        return <p className="wp-linktext" style={{
            color,
            fontSize,
            lineHeight,
            textAlign,
            fontWeight
        }}>{text}</p>;
    }
}