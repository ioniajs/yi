/**
 * @description 三级标题组件
 */
import React from 'react';

export default class Hthree extends React.PureComponent {
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
         <h3 style="wp-h3" style={{color,
            fontSize,
            lineHeight,
            fontSizeUnit,
            textAlign,
            fontWeight,}}>{text}</h3>
        )
    }
}