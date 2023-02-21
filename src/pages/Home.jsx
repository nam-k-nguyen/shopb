import React from 'react'
import { Link } from 'react-router-dom'
import { ShopTwoTone, LoginOutlined, UserAddOutlined } from '@ant-design/icons'

import NavBar from '../components/NavBar'
import { Button, Space, Typography } from 'antd'

const { Title } = Typography

export default function Home() {
    let a = (
        <div style={{ display: 'flex', height: '100%', gap: '20px', alignItems: 'center' }}>
            {/* Left side */}
            <Space style={{ flex: 1, height: '100%', justifyContent: 'center' }} direction="vertical" align='center'>
                <Title level={1} style={{ fontWeight: '700' }} >
                    Get it delivered.<br />Get it done.
                </Title>
                <ShopTwoTone style={{ fontSize: '10em' }} twoToneColor='#1677ff' />
                <Title level={5} style={{ fontWeight: '300', textAlign: 'center' }}>
                    Welcome to our premier e-commerce platform, where you'll find
                    a diverse array of quality products and exclusive deals. Our
                    platform offers an unparalleled shopping experience, with a
                    user-friendly interface and secure payment options. Shop with
                    us today!
                </Title>
            </Space>
            {/* Right side */}
            <Space align='center' direction='vertical' size='large' style={{ flex: 1, height: '200px', background: '#001529', justifyContent: 'center', borderRadius: '10px', padding: '15px' }} >
                <Title level={5} style={{ textAlign: 'center', color: 'white', fontWeight: '400' }}>
                    Continue shopping by signin in or if you register
                </Title>
                <Space size='large'>
                    <Link style={{ color: 'white' }} to='/signin'>
                        <Button size='large' type='primary'>
                            <LoginOutlined />Sign In
                        </Button>
                    </Link>
                    <Link style={{ color: 'white' }} to='/register'>
                        <Button size='large' type='primary'>
                            <UserAddOutlined />Register
                        </Button>
                    </Link>
                </Space>
            </Space>
        </div>
    )

    return (
        a
    )
}
