import styled from "@emotion/styled";
import { theme } from "@/theme";
import { AppName } from "@/Components/AppName";
import { Feedback } from "@/Components/Feedback";
import { Card } from "@/Components/Card";
import { Flex } from "antd";
import { CollectionWidget } from "@/Components/CollectionWidget";

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
        max-width: 1000px; 
        
        margin-left: auto;
        margin-right: auto;
    }
`;

export const AppFrame = ({ children }) => {
    return (
        <Frame>
            <section className="content">
                <Flex gap={12}>
                    <Card style={{ maxWidth: 607 }}>
                        <AppName />
                    </Card>

                    <CollectionWidget />
                    
                </Flex>

                {children}
            </section>

            <Feedback />
        </Frame>
    );
}