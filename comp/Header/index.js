/**
 * @description 头部组件
 */
import React from 'react';

export default class Header extends React.PureComponent {
    render() {
        const { children } = this.props;

    return <div className="wp-header">{children}</div>;
    }
}