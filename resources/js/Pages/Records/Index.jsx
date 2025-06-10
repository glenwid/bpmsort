import { Record } from "@/Components/Record";
import { useEffect, useState } from "react";
import styled from "styled-components";
import SimpleBar from 'simplebar-react';
import { router } from "@inertiajs/react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Divider } from "antd";

const paddingX = '0.9rem';
const paddingTop = '5rem';

const RecordsPage = styled.div`
    width: calc(100% + 2 * ${paddingX});
    margin-left: calc(-1 * ${paddingX});

    .infinite-scroll-component {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 1rem;  
        
        padding: ${paddingTop} ${paddingX} !important;
        padding-top: ${paddingTop} !important;
        &:before {
            display: none; 
        }
    }

    .simplebar-track.simplebar-vertical {
        padding-top: ${paddingTop}; 
    }
`;

export default function Index({ records, pageSize, total, currentPage, hasMorePages }) {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);

    const loadMore = () => {
        router.get(
            route(route().current(), route().routeParams), 
            {
                page: currentPage + 1,  
            }, 
            {
                preserveState: true,
                preserveScroll: true,
                onStart: () => {
                    setIsLoading(true);
                }
            }
        );
    };

    useEffect(() => {
        records && setData([...data, ...records]);
        setIsLoading(false);
    }, [records]);

    useEffect(() => {
        console.log({
            'pageSize': pageSize,
            'total': total,
            'currentPage': currentPage,
            'hasMorePages': hasMorePages,
        });
    }, [pageSize, total, currentPage, hasMorePages]);

    return (
        <RecordsPage>
            <SimpleBar 
                scrollableNodeProps={{ id: 'record-list' }}
                style={{
                    maxHeight: 'calc(100vh)',
                    overflowY: 'auto',
                    overflowX: 'visible',
                }}
            >
                <InfiniteScroll
                    dataLength={data.length}
                    next={loadMore}
                    hasMore={hasMorePages}
                    endMessage={<Divider />}
                    scrollableTarget="record-list"
                >
                    {data.length > 0 && data.map((record) => (
                        <Record key={record.id} data={record} />
                    ))}
                </InfiniteScroll>
            </SimpleBar>
            
            
        </RecordsPage>

    );
};