/**
 * @description 段落组件
 */
import React from 'react';

export default class Paragraph extends React.PureComponent {
    render() {
        const { text, color, fontSize, lineHeight, textAlign, fontWeight, fontSizeUnit } = this.props;

        return <p className="wp-text" style={{
            color,
            fontSize,
            lineHeight,
            fontSizeUnit,
            textAlign,
            fontWeight
        }}>{text}</p>;
    }
}