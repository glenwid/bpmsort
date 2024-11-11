import styled from "@emotion/styled";
import { theme } from "@/theme";

export const AppFrame = styled.section`
    display: flex;
    flex-direction: column;

    max-height: 100vh;
    height: 100%;
    width: 100%;
    padding: 2rem 2rem;
    background-color: ${theme.colors.yellowrange[100]};

    section {
        max-width: 1920px; 
    }
`;
