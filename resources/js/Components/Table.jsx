import { Table as AntdTable } from "antd";
import styled from "styled-components";
import { theme } from "@/theme";
import { Card } from "./Card";

export const StyledTable = styled(AntdTable)`
`; 

export const Table = (props) => {
    return (
        <Card>
            <StyledTable {...props} />
        </Card>
    );
}; 