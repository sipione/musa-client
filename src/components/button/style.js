import styled from "styled-components";
import { darkColorRgba, lightColorHex, secondaryColorHex } from "../../common/foundation/variables";

export const ButtonContainer = styled.button`
    width: 100%;
    border: none;
    border-radius: 10px;
    background: ${secondaryColorHex};
    padding: ${props => props.small ? "0.5vh 0.5vw" : "1.5vh 2.5vw"};
    cursor: pointer;
    transition: 0.5s;

    .button__title{
        color: ${lightColorHex};
        transform: scale(${props => props.small ? "0.6" : "1"})
    }

    :hover{
        filter: drop-shadow(0 5px 10px ${darkColorRgba(0.6)});
    }
`;