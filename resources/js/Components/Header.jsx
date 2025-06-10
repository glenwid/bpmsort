import { AppName } from '@/Components/AppName';
import { Menu } from 'antd';
import { useState } from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import { Link } from '@inertiajs/react';
import { theme } from '@/theme';

const { Header: AntdHeader } = Layout;
const paddingY = '0.333rem';

const StyledHeader = styled(AntdHeader)`
    padding: ${paddingY} 1rem; 
    margin: 0 !important; 
    margin-bottom: 0rem !important; 
    display: flex; 
    justify-content: space-between;
    align-items: center;
    gap: 2rem; 
    height: unset;
    z-index: 666; 
    position: fixed;
    background-color: rgba(255, 255, 255, 0.9) !important;
    width: 100%;

    .ant-menu { 
        background: transparent !important;
        border-bottom: none;
        flex: 2;
        justify-content: flex-end; 

        li {
            // max-height: 3rem;
        }
    }

    .ant-menu-item-selected {
        color: ${theme.colors.primary};
        font-weight: bold; 
    }

    li:after {
        bottom: -2px !important;
    }

    background-color: unset; 
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px, 
        rgba(0, 0, 0, 0.2) 0px 7px 13px -3px, 
        rgba(0, 0, 0, 0.1) 0px -3px 0px inset;
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
            label: <Link href={route('records.index')}>Records</Link>,
            key: 'records',
        },
        {
            label: <Link href={route('system')}>Connections</Link>,
            key: 'connections',
        },
        {
            label: <Link href={route('system.sync')}>Sync</Link>,
            key: 'sync',
        },
    ]; 

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