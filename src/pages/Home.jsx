import React from 'react'
import { Layout, Space, Menu } from 'antd'

const { Header, Content } = Layout

export default function Home() {
    const menuItems = [
        {key: 1, label: "one"},
        {key: 2, label: "two"},
        {key: 3, label: "tee"},
    ] 

    return (
        <div>
            <Space direction='vertical' style={{ width: '100%' }} size={[0, 48]}>
                <Layout>
                    <Header>
                        <Menu mode='horizontal' items={menuItems}/>
                    </Header>
                    <Content>Content</Content>
                </Layout>
            </Space>
        </div>
    )
}
