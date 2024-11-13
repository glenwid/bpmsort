import styled from '@emotion/styled';
import { Button, Space, Form, Input } from 'antd';
import { useForm } from '@inertiajs/react';
import { Card } from "@/Components/Card";

const SystemForm = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    height: 100%;
    width: 100%;

    .ant-form-item {
        width: 100%;
        max-width: 666px;

        label {
            font-weight: bold; 
        }
    }
`;

export default function Edit({
    discogs_token,
    discogs_username,
}) {
    const { data, setData, put, processing } = useForm({
        'discogs_username': discogs_username,
        'discogs_token': discogs_token,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('system.update'));
    }; 

    return (
        <>
            <Card size={'small'}>
                <SystemForm layout='vertical'>
                    <Form.Item label="Discogs username">
                        <Input 
                            type="text"
                            value={data.discogs_username}
                            onChange={(e) => setData('discogs_username', e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item label="Discogs token">
                        <Input 
                            type="text"
                            value={data.discogs_token}
                            onChange={(e) => setData('discogs_token', e.target.value)}
                        />
                    </Form.Item>

                    <Space>
                        <Button 
                            type="primary"
                            onClick={handleSubmit}
                            loading={processing}
                        >Save</Button>
                    </Space>
                </SystemForm>
            </Card>
        </>
    );
}
