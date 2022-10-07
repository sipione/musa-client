import styled from "styled-components";
import { darkColorHex, maxMobileScreeenWidth, secondaryColorHex } from "../../common/foundation/variables";


export const RegisterTitles = styled.div`
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

    @media screen and (max-width: ${maxMobileScreeenWidth}px){
        width: 80%;
    }
`;

export const RegisterForm = styled.div`
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
            outline: none;
            padding: 2.5vh 2.5vw;
        }

        .wrong{
            outline: 2px solid red;
            position: relative;

            :before{
                content: "Verifique o campo";
                position: absolute;
                top:0;
                left:0;

                width:100%;
                height: 20px;
            }
        }

        .done{
            outline: 2px solid green;
            position: relative;

            :after{
                content: "Verifique o campo";
                position: absolute;
                top:0;
                left:0;

                width:100%;
                height: 20px;
            }
        }
    }
`;

export const RegisterContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items:center;
    padding: 5vh 20vw;
    gap: 5vh;

    @media screen and (max-width: ${maxMobileScreeenWidth}px){
        padding: 5vh 5vw;
    }
`;