import styled from "@emotion/styled";
import { theme } from "@/theme";
import { AppName } from "@/Components/AppName";
import { Feedback } from "@/Components/Feedback";

const Frame = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    max-height: 100vh;
    height: 100%;
    width: 100%;
    padding: 0rem 2rem 2rem;
    background-color: ${theme.colors.grey[100]};
    opacity: 1;

    .content {  
        width: 100%;
        max-width: 1000px; 
        
        margin-left: auto;
        margin-right: auto;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const AppFrame = ({ children }) => {
    return (
        <Frame>
            <section className="content">
                <AppName />

                {children}
            </section>

            <Feedback />
        </Frame>
    );
}