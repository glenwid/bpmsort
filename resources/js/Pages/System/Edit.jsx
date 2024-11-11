import styled from '@emotion/styled';
import { theme } from '@/theme';
import { Typography, Button, Space } from 'antd';
import Statistic from 'antd/es/statistic/Statistic';

const EditLayout = styled.section`

   
`;

export default function Dashboard({
    records,
}) {


    return (
        <EditLayout>
            <Typography.Title 
                level={1}
                style={{
                    fontSize: '10rem',
                }}
            >bpmsort</Typography.Title>

            <Space>
                

            </Space>
        </EditLayout>
    );
}
