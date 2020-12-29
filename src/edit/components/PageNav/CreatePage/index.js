import React, { useState } from 'react';
import { Modal, Input, Select, Form, Radio } from 'antd';
import './index.less'

const { Option } = Select;

export default (props) => {
    const [pageType, setPageType] = useState(undefined)
    const [columnPage, setColumnPage] = useState(undefined)
    const {createPage, setCreatePage} = props;

    const handleChang = (value) => {
        setPageType(value);
    }

    const handleColumnChang = (value) => {
        setColumnPage(value)
    }

    return (
            <Modal className="page-create-modal" onOk={() => setCreatePage(false)} title="新增页面" visible={createPage} okText="保存" cancelText="取消" >
                <Form>
                    <Form.Item label="页面类型">
                        <Select placeholder="请选择" allowClear onChange={handleChang}>
                            <Option value="1">首页</Option>
                            <Option value="2">栏目页</Option>
                            <Option value="3">内容页</Option>
                            <Option value="4">公共页</Option>
                        </Select>
                    </Form.Item>
                    {
                        (pageType !== undefined ) && (
                            <>
                                <Form.Item label="模板名称" required={[{require:true}]}>
                                        <Input placeholder="请输入模板名称" addonAfter=".html" />
                                </Form.Item>
                                <Form.Item label="中文备注">
                                        <Input placeholder="请输入中文备注" />
                                </Form.Item>
                            </>
                        )
                    }
                    {
                        pageType === "1"  && ( 
                                <Form.Item label="设为首页模板" required={[{require:true}]}>
                                    <Radio.Group >
                                        <Radio value={1}>是</Radio>
                                        <Radio value={2}>否</Radio>
                                    </Radio.Group>
                                </Form.Item>
                        )
                    }
                    {
                        pageType === "2"  && (
                            <>
                                <Form.Item label="适用模型">
                                    <Select placeholder="请选择" allowClear onChange={handleColumnChang} >
                                        <Option value="1">资讯</Option>
                                        <Option value="2">图片</Option>
                                        <Option value="3">视频</Option>
                                        <Option value="4">下载</Option>
                                    </Select>
                                </Form.Item>
                                {
                                    columnPage !== undefined && (
                                        <Form.Item label="适用栏目">
                                            <Select placeholder="请选择" allowClear >
                                                <Option value="1">资讯</Option>
                                                <Option value="2">图片</Option>
                                                <Option value="3">视频</Option>
                                                <Option value="4">下载</Option>
                                            </Select>
                                        </Form.Item>
                                    )
                                }
                                
                            </>
                        )
                    }
                    {
                        pageType === "3"  && ( 
                            <Form.Item label="适用模型">
                                <Select placeholder="请选择" allowClear >
                                    <Option value="1">资讯</Option>
                                    <Option value="2">图片</Option>
                                    <Option value="3">视频</Option>
                                    <Option value="4">下载</Option>
                                </Select>
                            </Form.Item>
                        )
                    }
                    {/* {
                        pageType === "4"  && ( <span>44444</span>)
                    } */}
                </Form>
            </Modal>
    )
    
}