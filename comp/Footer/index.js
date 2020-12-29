/**
 * @description 页脚组件
 */
import React from 'react';

export default class Footer extends React.PureComponent {
    render() {
        const { children } = this.props;

    return <div className="wp-footer">{children}</div>;
    }
}