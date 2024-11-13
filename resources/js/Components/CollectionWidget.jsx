import { Statistic, Button, Tooltip } from "antd";
import { Card } from "./Card";
import styled from "@emotion/styled";
import { theme } from "@/theme";
import { SyncOutlined } from "@ant-design/icons";
import { useForm } from "@inertiajs/react";

const CounterWrapper = styled.div`
    .ant-statistic-title { 
        font-size: 16px;
        font-weight: bold; 
        color: ${theme.colors.black[800]};
        margin-bottom: 0;
    }

    .ant-card {
        flex: 3;
        height: 100%;
    }

    .ant-card-body {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        height: 100%; 

        > :first-child {
            margin-bottom: auto;
        }
    }

`;

export const CollectionWidget = ({ count }) => {
    const { post, processing } = useForm();
    
    const handleSync = () => {
        post(route('collection.sync'));
    };

    return (
        <CounterWrapper>
            <Card size="small">
                <Statistic 
                    title="Records in collection" 
                    value={count}
                />

                <Button 
                    shape="circle" 
                    icon={<SyncOutlined />} 
                    type={'primary'}
                    size="large"
                    loading={processing}
                />
            </Card>
        </CounterWrapper>
    )
};