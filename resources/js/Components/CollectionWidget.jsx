import { Statistic, Button } from "antd";
import { Card } from "./Card";
import styled from "styled-components";
import { theme } from "@/theme";
import { SyncOutlined } from "@ant-design/icons";

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

export const CollectionWidget = ({ 
    count = 0, 
    title = 'Collection', 
    processing = false, 
    onSync = () => {},
}) => {
    return (
        <CounterWrapper>
            <Card size="small">
                <Statistic 
                    title={title} 
                    value={count}
                />

                <Button 
                    shape="circle" 
                    icon={<SyncOutlined />} 
                    type={'primary'}
                    size="large"
                    loading={processing}
                    onClick={onSync}
                />
            </Card>
        </CounterWrapper>
    )
};