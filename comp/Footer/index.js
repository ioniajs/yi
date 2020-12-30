/**
 * @description 页脚组件
 */
import React from 'react';

export default class Footer extends React.PureComponent {
    render() {
        const { children } = this.props;

    return <footer className="wp-footer">{children}</footer>;
    }
}