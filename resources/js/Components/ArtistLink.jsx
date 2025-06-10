import { Button as AntdButton } from "antd"
import styled from "styled-components"

const LinkTag = styled(AntdButton)`
    padding: 0.25rem 1rem !important;
    border: 0; 
    box-shadow: none;

    span {
        line-height: 1;
        font-size: 0.8rem;
        color: white;
    }
`;

export const ArtistLink = ({ data }) => {
    return (
        <LinkTag               
            href={route('artists.show', { artist: data.id })}
            key={data.id} 
            type="primary" 
        >
            {data.name}
        </LinkTag>
    )
}