import styled from "styled-components";
import { Typography } from "antd";
import { theme } from "@/theme";

const StyledTitle = styled(Typography.Title).withConfig({
    shouldForwardProp: (prop) => !['compact'].includes(prop)
})`
    // using :is() to increase specificity over antd
    &:is(h1) {
        font-size: ${props => props.compact ? '2.5rem' : '6rem'}; 
        letter-spacing: -0.02em; 

        color: ${theme.colors.purple[500]}; 
        margin-bottom: 0; 

        flex-shrink: 0; 
    }
`;

export const AppName = ({compact}) => {
    return <StyledTitle level={1} compact={compact}>bpmsort</StyledTitle>
}