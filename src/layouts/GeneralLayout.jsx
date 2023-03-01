import React from 'react'
import NavBar from '../components/NavBar'
import { Layout } from 'antd'

export default function GeneralLayout({ children, isAuthenticated }) {
    return (
        <Layout style={{ height: '100%' }}>
            <NavBar isAuthenticated={isAuthenticated} />
            <Layout.Content style={{ padding: '20px 20px', background: '' }}>
                {children}
            </Layout.Content>
            <Layout.Footer style={{ background: '#001529', color: 'white', textAlign: 'center' }}>
                © 2023 Created by Nam 😉
            </Layout.Footer>
        </Layout>
    )
}
