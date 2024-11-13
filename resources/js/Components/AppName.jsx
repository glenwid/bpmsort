import styled from "@emotion/styled"
import { Typography } from "antd"
import { theme } from "@/theme"

const StyledTitle = styled(Typography.Title)`
    // using :is() to increase specificity over antd
    &:is(h1) {
        font-size: 6rem; 
        letter-spacing: -0.02em; 

        color: ${theme.colors.purple[500]}; 
        margin-bottom: 0; 
    }
`;

export const AppName = () => {
    return <StyledTitle level={1}>bpmsort</StyledTitle>
}