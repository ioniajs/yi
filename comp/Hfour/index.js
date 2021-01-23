/**
 * @description 四级标题组件
 */
import React from 'react';

export default class Htwo extends React.PureComponent {
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
         <h4 style="wp-h4" style={{color,
            fontSize,
            lineHeight,
            fontSizeUnit,
            textAlign,
            fontWeight,}}>{text}</h4>
        )
    }
}