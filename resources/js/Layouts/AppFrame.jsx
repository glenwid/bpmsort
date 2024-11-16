import styled from "styled-components";
import { theme } from "@/theme";
import { AppName } from "@/Components/AppName";
import { Feedback } from "@/Components/Feedback";
import { Card } from "@/Components/Card";
import { Flex, Layout as AntdLayout } from "antd";
import { CollectionWidget } from "@/Components/CollectionWidget";
import { usePage, useForm } from "@inertiajs/react";
import { Header } from "@/Components/Header";

export const Layout = styled(AntdLayout)`
    display: flex;
    flex-direction: column;

    max-height: 100vh;
    height: 100%;
    width: 100%;
    padding: 2rem 2rem 2rem;
    background-color: ${theme.colors.grey[100]};
    opacity: 1;

    .content {  
        width: 100%;
        max-width: 60rem; 
        
        margin-left: auto;
        margin-right: auto;
    }

    main {

    }
`;

export const AppFrame = ({ children }) => {
    const { records, tracks } = usePage().props;
    const { post, processing } = useForm();

    return (
        <Layout>
            <Header />

            <Layout.Content className="content">
                <Flex gap={12} justify="space-between">
                    <CollectionWidget 
                        title="Tracks in collection"
                        count={tracks.length} 
                        onSync={() => {
                            post(route('tracks.sync'));
                        }}
                        processing={processing}
                    />

                    <CollectionWidget 
                        title="Records in collection"
                        count={records.length} 
                        onSync={() => {
                            post(route('records.sync'));
                        }}
                        processing={processing}
                    />
                </Flex>

                {children}
            </Layout.Content>

            <Feedback />
        </Layout>
    );
}