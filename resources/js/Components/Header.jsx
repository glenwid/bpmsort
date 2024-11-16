import { AppName } from '@/Components/AppName';
import { Menu } from 'antd';
import { useState } from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import { Link } from '@inertiajs/react';

const { Header: AntdHeader } = Layout;

const StyledHeader = styled(AntdHeader)`
    display: flex; 
    justify-content: space-between;
    gap: 2rem; 

    .ant-menu { 
        background: transparent !important;
        border-bottom: none;
        flex: 2;
        justify-content: flex-end; 
    }

    background-color: unset; 
    margin-bottom: 2rem; 
`;

export const Header = () => {
    const [current, setCurrent] = useState('dashboard');
    const onClick = ({ key }) => setCurrent(key);

    const menuItems = [
        {
            label: <Link href={route('dashboard')}>Dashboard</Link>,
            key: 'dashboard',
            
        },
        {
            label: <Link href={route('system')}>Settings</Link>,
            key: 'settings',
        }
    ]

    return (
        <StyledHeader>
            <AppName compact/>

            <Menu 
                mode="horizontal"
                selectedKeys={[current]}
                onClick={onClick}
                items={menuItems}
            />
        </StyledHeader>
    );
};