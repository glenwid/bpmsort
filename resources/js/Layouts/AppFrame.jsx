import styled from "@emotion/styled";
import { theme } from "@/theme";
import { AppName } from "@/Components/AppName";
import { Feedback } from "@/Components/Feedback";
import { Card } from "@/Components/Card";
import { Flex } from "antd";
import { CollectionWidget } from "@/Components/CollectionWidget";
import { usePage, useForm } from "@inertiajs/react";

const Frame = styled.section`
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
`;

export const AppFrame = ({ children }) => {
    const { records, tracks } = usePage().props;
    const { post, processing } = useForm();

    return (
        <Frame>
            <section className="content">
                <Flex gap={12} justify="space-between">
                    <Card style={{ maxWidth: 607 }}>
                        <AppName />
                    </Card>

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
            </section>

            <Feedback />
        </Frame>
    );
}