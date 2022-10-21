import styled from "styled-components";
import { darkColorRgba, lightColorHex, primaryColorHex, secondaryColorHex } from "../../common/foundation/variables";


export const PoupupImageContainer = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: ${props => props.active ? "100%" : "0%"};
    background: ${darkColorRgba(0.96)};
    display:${props => props.active ? "flex" : "none"};
    justify-content: center;
    align-items: center;
    z-index: 2;

    .exit{
        position: absolute;
        top: 5%;
        right: 10%;
        cursor: pointer;
        padding: 0 1%;
        border-radius: 5px;
        transition: 0.5s;

        :hover{
            background: ${secondaryColorHex};
            color: ${lightColorHex};
        }
    }

    .image{
        height: 80%;
        border-radius: 5px;
    }

    .back, .next{
        margin: 0 5vw;
        cursor: pointer;
        padding: 0 1%;
        border-radius: 5px;
        transition: 0.5s;

        :hover{
            background: ${secondaryColorHex};
            color: ${lightColorHex};
        }
    }
`;