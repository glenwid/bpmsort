import { Card as AntdCard } from 'antd';
import styled from '@emotion/styled';
import { hexToRgb } from "@/utils";
import { theme } from "@/theme";

const backgroundColor = theme.colors.black[100];
const backgroundOpacity = 0.5;
const r = hexToRgb(backgroundColor)[0];
const g = hexToRgb(backgroundColor)[1];
const b = hexToRgb(backgroundColor)[2];

export const Card = styled(AntdCard)`
    background-color: rgba(${r}, ${g}, ${b}, ${backgroundOpacity});
    max-width: 400px;
    width: 100%; 
    z-index: 3;
    margin-top: -0.666rem;
`;