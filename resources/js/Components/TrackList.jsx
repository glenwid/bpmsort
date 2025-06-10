import { theme, antdTheme } from "@/theme";
import { Table, Tag } from "antd";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { throttle } from "throttle-debounce";
import { Card } from "./Card";

const TableWrapper = styled(Card)`
    z-index: 666;
    max-width: unset; 
    border-radius: ${antdTheme.token.borderRadius}px;
    border: 0px solid ${theme.colors.black[500]};
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;

    .ant-card-body {
        padding: 0;
    }

    > *,
    .ant-table-cell,
    .ant-table {
        background-color: transparent !important; 
    }



`; 

export const TrackList = ({ data }) => {
    const [height, setHeight] = useState(0);

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', throttle(50   , handleResize));

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    const handleResize = () => {
        // simplebar requires fixed height
        // look for other content and set height accordingly
        const content = document.querySelector('.content-wrapper');
        const header = document.querySelector('.ant-layout-header');
        const contentNeighbours = Array.from(content.children).filter((child) => !child.classList.contains('track-list'));

        let usedHeight = 0;
        contentNeighbours.forEach((neighbour) => {
            usedHeight += neighbour.clientHeight;
        });
        usedHeight += header.clientHeight;


        let remainingHeight = content.clientHeight - usedHeight;

        if(remainingHeight === 0) {
            handleResize();
        } else {
            setHeight(remainingHeight);    
        }
    };
    
    return (
        <TableWrapper>
            <Table
                columns={[
                    {
                        title: 'Title',
                        dataIndex: 'title',
                        key: 'title',
                    },
                    {
                        title: 'Duration',
                        dataIndex: 'duration',
                        key: 'duration',
                        render: (duration) => (
                            <Tag color={theme.colors.purple[300]}>{duration}</Tag>
                        ),
                        align: 'right',
                        width: '8rem',
                    },
                    {
                        title: 'BPM',
                        dataIndex: 'bpm',
                        key: 'bpm',
                        align: 'right',
                        render: (bpm) => (
                            <Tag color={theme.colors.yellowrange[500]}>{bpm}</Tag>
                        ),
                        width: '6rem',
                    },
                ]}
                dataSource={data}
                bordered={false}
                pagination={false}
                scroll={{
                    y: height,
                }}
            />
        </TableWrapper>
        
        
    );
};