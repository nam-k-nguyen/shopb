import React from 'react'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'

const { Header } = Layout

export default function NavBar() {
    const items = [
        { label: <Link to="/">Home</Link>, key: "home" },
        { label: <Link to="/signin">Sign In</Link>, key: "signin" },
        { label: <Link to="/register">Register</Link>, key: "register" }
    ]

    return (
        <>
            <Header style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '100%', padding: '0' }} theme='dark'>
                <div style={{ fontWeight: 'bold', padding: '0 10px', letterSpacing: '1px', fontSize: '1.5em' }}>
                    <Link to="/">SHOPB</Link>
                </div>
                <Menu items={items} theme="dark" mode="horizontal" defaultSelectedKeys={['home']} style={{ width: "100%", display: 'flex', flexDirection: 'row', justifyContent: 'end' }} />
            </Header>
        </>
    )
}
