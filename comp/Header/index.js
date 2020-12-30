/**
 * @description 头部组件
 */
import React from 'react';

export default class Header extends React.PureComponent {
    render() {
        const { children } = this.props;

    return <header className="wp-header">{children}</header>;
    }
}