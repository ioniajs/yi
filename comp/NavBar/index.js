/**
 * @description 导航组件
 */
import React from 'react';

export default class NavBar extends React.PureComponent {
    render() {
        const { children } = this.props;

    return <div className="wp-navbar">{children}</div>;
    }
}