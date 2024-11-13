import { usePage } from '@inertiajs/react';
import { message } from 'antd';
import { useEffect } from 'react';

export const Feedback = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const { success, errors } = usePage().props;

    useEffect(() => {
        if (success) {
            messageApi.open({
                type: 'success',
                content: success,
            });
        }
    }, [success]);

    useEffect(() => {
        if (errors && typeof errors === 'object' && Object.keys(errors).length > 0) {
            Object.keys(errors).forEach((key) => {
                messageApi.open({
                    type: 'error',
                    content: errors[key],
                });
            });
        }
    }, [errors]);

    return <>{contextHolder}</>;
};