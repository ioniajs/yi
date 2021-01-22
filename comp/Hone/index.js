/**
 * @description 一级标题组件
 */
import React from 'react';

export default class Hone extends React.PureComponent {
    render() {
        const {
            text,
            color,
            fontSize,
            lineHeight,
            textAlign,
            fontWeight,
            fontSizeUnit,
          } = this.props;
        return (
         <h1 style="wp-h1" style={{color,
            fontSize,
            lineHeight,
            fontSizeUnit,
            textAlign,
            fontWeight,}}>{text}</h1>
        )
    }
}