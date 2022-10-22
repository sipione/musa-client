import styled from "styled-components";
import { darkColorHex, lightColorHex, maxMobileScreeenWidth, secondaryColorHex } from "../../common/foundation/variables";


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

export const ContainerInputRadioBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5vh;

    div{
        display: flex;
        gap: 0.25vw;
    }

    span{
        text-align: center;
        color: ${lightColorHex};
        width: 25px;
        height:25px;
        border-radius:5px;
        transition: 0.5s;
    }

    input{
        display: none;
    }

    input:checked + span{
        background: ${secondaryColorHex};
    }
`;