import styled from "styled-components";
import { theme } from "@/theme";
import { Feedback } from "@/Components/Feedback";
import { Layout as AntdLayout } from "antd";
import { Header } from "@/Components/Header";

export const Layout = styled(AntdLayout)`
    display: flex;
    flex-direction: column;

    max-height: 100vh;
    height: 100%;
    width: 100%;
    background-color: ${theme.colors.grey[100]};
    opacity: 1;

    .content {  
        width: 100%;
        max-height: calc(100vh);
        margin-left: auto;
        margin-right: auto;
        padding: 0rem 1rem 1rem;
    }
`;

export const AppFrame = ({ children }) => {
    return (
        <Layout>
            <Header />

            <Layout.Content className="content">
                {children}
            </Layout.Content>

            <Feedback />
        </Layout>
    );
}