/**
 * @description 区块组件
 */
import React from 'react';

export default class Block extends React.PureComponent {
    render() {
        const { children } = this.props;

    return <div className="wp-block">{children}</div>;
    }
}