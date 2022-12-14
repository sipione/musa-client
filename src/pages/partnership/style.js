import styled from "styled-components";
import { maxMobileScreeenWidth, secondaryColorHex } from "../../common/foundation/variables";

export const PartnershipContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items:center;
    padding: 5vh 20vw;
    gap: 5vh;

    @media screen and (max-width: ${maxMobileScreeenWidth}px){
        padding: 5vh 5vw;
    }
`;

export const PartnershipTitles = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    text-align: center;

    @media screen and (max-width: ${maxMobileScreeenWidth}px){
        width: 80%;
    }
`;

export const PartnershipForm = styled.div`
    width: 100%;
    padding: 2.5vh 5vw;
    border: 3px solid ${secondaryColorHex};
    border-radius: 10px;

    form{
        display: flex;
        flex-direction: column;
        gap:2vh;

        input{
            border: 1px solid ${secondaryColorHex};
            border-radius: 10px;
            padding: 2.5vh 2.5vw;
        }
    }
`;