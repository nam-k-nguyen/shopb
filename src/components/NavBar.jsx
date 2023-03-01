import React, { useState, useEffect } from 'react'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'

const { Header } = Layout

export default function NavBar({ isAuthenticated }) {
    const [menuItems, setMenuItems] = useState([])
    const [selection, setSelection] = useState(isAuthenticated ? 'dashboard' : 'home')
    
    // Navbar items
    const allItems = [
        { label: <Link to="/">Home</Link>, key: "home" },
        { label: <Link to="/signin">Sign In</Link>, key: "signin" },
        { label: <Link to="/register">Register</Link>, key: "register" },
        { label: <Link to="/dashboard">Dashboard</Link>, key: "dashboard", protected: "true" },
    ]
    
    // Highlight nav link on select/click
    const handleSelection = ({ key }) => {setSelection(key)}
    
    // Switch between protected and unprotected navigation links based on authentication state
    useEffect(() => {
        setMenuItems(allItems.filter(item => isAuthenticated ? !!item.protected : !item.protected))
        setSelection(isAuthenticated ? 'dashboard' : 'home')
    }, [isAuthenticated])
    
    return (
        <Header style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '100%', padding: '0' }} theme='dark'>
            <div style={{ fontWeight: 'bold', padding: '0 10px', letterSpacing: '1px', fontSize: '1.5em' }}>
                <Link to="/">SHOPB</Link>
            </div>
            <Menu onSelect={handleSelection} selectedKeys={[selection]} items={menuItems} theme="dark" mode="horizontal" style={{ width: "100%", display: 'flex', flexDirection: 'row', justifyContent: 'end' }} />
        </Header>
    )
}
