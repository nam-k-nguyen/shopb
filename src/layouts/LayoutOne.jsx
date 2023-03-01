import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'

const { Content, Footer } = Layout

export default function LayoutOne() {
    return (
        <Layout style={{ height: '100%' }}>
            <NavBar />
            <Content style={{ padding: '20px 20px', background: '' }}>
                <Outlet />
            </Content>
            <Footer style={{ background: '#001529', color: 'white', textAlign: 'center' }}>© 2023 Created by Nam 😉</Footer>
        </Layout>
    )
}
