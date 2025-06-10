import styled from "styled-components";
import { Flex, Skeleton, Typography, Button } from "antd";
import { useEffect } from "react";
import { Link } from "@inertiajs/react";
import { theme } from "@/theme";
import { TrackList } from "@/Components/TrackList";
import { ArtistLink } from "@/Components/ArtistLink";

const RecordPage = styled(Flex)`
`;

const Artists = ({ data }) => {
    return (
        <Flex gap={8}>
            {data?.map((artist) => (
                <ArtistLink data={artist} key={artist.id} />
            ))}
        </Flex>
    )
};

export default function Show({ record }) {

    useEffect(() => {
        console.log(record);
    }, [record]);

    return (
        <RecordPage 
            gap={'2rem'}
            vertical 
            style={{
                width: '100%',
                height: '100%',
                paddingTop: '4rem',
            }}
            className='content-wrapper'
        >
            <Flex gap={'1rem'}>
                <div style={{
                    width: 'auto',
                    height: '13rem',
                    aspectRatio: 1,
                    objectFit: 'cover',
                    position: 'relative',
                    display: 'block',
                }}>
                    <Skeleton.Image 
                        style={{
                            height: '17rem', 
                            width: 'auto', 
                            aspectRatio: 1,
                            objectFit: 'cover',
                            position: 'relative',
                            left: '-1rem',
                            top: '-1rem',
                            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                        }}
                    />
                </div>
                
                <div style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}>
                    <Typography.Title 
                        level={1}
                        style={{
                            maxWidth: '50rem',
                        }}
                    >{record.title}</Typography.Title>
                    <Artists data={record.artists} />
                </div>
            </Flex>

            <TrackList data={record.tracks} />
        </RecordPage>
    );
};