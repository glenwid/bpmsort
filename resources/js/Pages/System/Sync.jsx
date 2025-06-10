import { CollectionWidget } from "@/Components/CollectionWidget";
import styled from "styled-components";
import { useForm } from "@inertiajs/react";

const Wrapper = styled.div`
    display: flex; 
    padding: clamp(6rem, 10vw, 10rem) clamp(2rem, 10vw, 10rem);
    gap: 2rem; 
    justify-content: center;
`;

export default function Sync({ records, tracks }) {
    const { data, setData, post, processing, errors } = useForm({

    });

    return (
        <Wrapper>
            <CollectionWidget 
                count={records.length}
                title="Records in collection"
                onSync={() => post(route('records.sync'))}
                processing={processing}
            />

            <CollectionWidget
                count={tracks.length}
                title="Tracks in collection"
                onSync={() => post(route('tracks.sync'))}
                processing={processing}
            />
        </Wrapper>
    );
};