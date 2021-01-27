/**
 * @description 五级标题组件
 */
import React from 'react';

export default class Hfive extends React.PureComponent {
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
         <h5 style="wp-h5" style={{color,
            fontSize,
            lineHeight,
            fontSizeUnit,
            textAlign,
            fontWeight,}}>{text}</h5>
        )
    }
}