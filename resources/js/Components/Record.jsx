import { Card } from "@/Components/Card";
import { router } from "@inertiajs/react";
import { Skeleton, Typography } from "antd";

const Artists = ({ data }) => {
    return (
        <Typography.Text ellipsis>
            {data?.map((artist) => artist.name).join(', ')}
        </Typography.Text>
    )
}

export const Record = ({ data }) => {
    return (
        <Card 
            hoverable
            onClick={() => {
                router.get(route('records.show', { record: data.id }));
            }}
            cover={
                <Skeleton.Image 
                    style={{
                        width: '100%',
                        height: 'auto',
                        aspectRatio: 1,
                        objectFit: 'cover',
                        boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
                    }}
                />
            }
            bordered={true}
           
        >
            <Card.Meta 
                title={data?.title} 
                description={<Artists data={data?.artists} />}
            />
        </Card>
    )
};

