import { SettingOutlined, MenuOutlined, BarsOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import { router } from "@inertiajs/react";

export const MenuButton = () => {
    return (
        <FloatButton.Group
            shape="circle"
            trigger="hover"
            placement="top"
            type="primary"
            icon={<MenuOutlined />}
            className="menu-button"
        >
            <FloatButton 
                icon={<SettingOutlined />}
                onClick={() => {
                    router.get(route('system.update')); 
                }}
            />

            <FloatButton 
                icon={<BarsOutlined />}
                onClick={() => {
                    router.get(route('dashboard')); 
                }}
            />
        </FloatButton.Group>
    )
}