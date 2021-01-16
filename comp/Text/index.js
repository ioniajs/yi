/**
 * @description 文本组件
 */
import React from "react";

export default class Text extends React.PureComponent {
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
      <span
        className="wp-text"
        style={{
          color,
          fontSize,
          lineHeight,
          fontSizeUnit,
          textAlign,
          fontWeight,
        }}
      >
        {text}
      </span>
    );
  }
}
