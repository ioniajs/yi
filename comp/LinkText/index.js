/**
 * @description 链接文本组件
 */
import React from 'react';

export default class LinkText extends React.PureComponent {
        openLink() {
            const { link, blank, env } = this.props;
    
            if (env === 'edit') {
                return;
            }
            window.open(link, blank ? '_blank' : '_self');
        }
    render() {
    const { text, color, fontSize, lineHeight, textAlign, fontWeight, href } = this.props;
        return <a href={href} onClick={this.openLink.bind(this)} className="wp-linktext" style={{
            color,
            fontSize,
            lineHeight,
            textAlign,
            fontWeight
        }}>{text}</a>;
    }
}