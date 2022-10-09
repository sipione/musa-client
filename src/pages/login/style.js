import styled from "styled-components";
import { darkColorHex, maxMobileScreeenWidth, secondaryColorHex } from "../../common/foundation/variables";


export const LoginTitles = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    text-align: center;

    a{
        text-decoration: none;
        color: ${darkColorHex};
        transition: 0.5s;

        :hover{
            color: ${secondaryColorHex};
            text-decoration: underline;
        }
    }

    .forgot--text{
        cursor: pointer;
        transition: 0.5s;

        :hover{
            color: ${secondaryColorHex};
        }
    }

    .forgot--form{
        display:${props => props.forgot ? "block" : "none"};
        input{
            width:100%;
            border: 1px solid ${secondaryColorHex};
            border-radius: 10px;
            padding: 2.5vh 2.5vw;
            margin: 2.5vh 0 ;
        }
    }



    @media screen and (max-width: ${maxMobileScreeenWidth}px){
        width: 80%;
    }
`;

export const LoginForm = styled.div`
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

export const LoginContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items:center;
    padding: 5vh 20vw;
    gap: 5vh;

    @media screen and (max-width: ${maxMobileScreeenWidth}px){
        padding: 5vh 5vw;
    }
`;