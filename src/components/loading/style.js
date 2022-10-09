import styled from "styled-components";
import { darkColorRgba } from "../../common/foundation/variables";


export const LoadingContainer = styled.section`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    background: ${darkColorRgba(0.9)};
    display: flex;
    justify-content: center;
    align-items: center;

    .icon{
        animation: spin 2s infinite;

        svg{
            width: 60%;
        }
    }

    @keyframes spin{
        50%{
            transform: rotate(180deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
`;