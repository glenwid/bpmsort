import { Card as AntdCard } from 'antd';
import styled from "styled-components";
import { hexToRgb } from "@/utils";
import { theme } from "@/theme";

const backgroundColor = theme.colors.black[200];
const backgroundOpacity = 0.666;
const r = hexToRgb(backgroundColor)[0];
const g = hexToRgb(backgroundColor)[1];
const b = hexToRgb(backgroundColor)[2];

export const Card = styled(AntdCard).withConfig({
    shouldForwardProp: (prop) => !['hoverable'].includes(prop),
})`
    background-color: rgba(${r}, ${g}, ${b}, ${backgroundOpacity});
    max-width: 400px;
    width: 100%; 
    z-index: 3;
    transition: box-shadow 0.3s ease;

    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, 
        rgb(209, 213, 219) 0px 0px 0px 1px inset;

    ${props => props.hoverable && `
        cursor: pointer;

        &:hover {
            box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px !important;
        }    
    `}
`;