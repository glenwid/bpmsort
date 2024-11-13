import styled from '@emotion/styled';
import { theme } from '@/theme';
import { Button, Space, Form, Input, Card } from 'antd';
import { useForm } from '@inertiajs/react';
import { useEffect } from 'react';
import { hexToRgb } from "@/utils";
import { Feedback } from '@/Components/Feedback';

const backgroundColor = theme.colors.black[100];
const backgroundOpacity = 0.5;
const r = hexToRgb(backgroundColor)[0];
const g = hexToRgb(backgroundColor)[1];
const b = hexToRgb(backgroundColor)[2];


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

const StyledCard = styled(Card)`
    background-color: rgba(${r}, ${g}, ${b}, ${backgroundOpacity});
    max-width: 400px;
    width: 100%; 
    z-index: 3;
    margin-top: -0.666rem;
`;

export default function Edit({
    discogs_token,
    discogs_username,
    success, 
    errors,
}) {
    const { data, setData, put, processing } = useForm({
        'discogs_username': discogs_username,
        'discogs_token': discogs_token,
    });
    
    useEffect(() => {
        console.log(data);
    }, [data]);

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('system.update'));
    }; 

    return (
        <>
            <StyledCard size={'small'}>
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
            </StyledCard>


        </>
    );
}
