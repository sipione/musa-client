import styled from "styled-components";
import { secondaryColorHex } from "../../common/foundation/variables";


export const EditProfileContainer =  styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5vh 5vw;
    gap: 5vh;
`;

export const EditProfileForm = styled.div`
    width: 100%;
    padding: 2.5vh 5vw;
    border: 3px solid ${secondaryColorHex};
    border-radius: 10px;

    form{
        display: flex;
        flex-direction: column;
        gap:2vh;

        .fieldset{
            display: flex;
            align-items: center;
            gap:2.5%;
            border: none;
        }

        input, textarea, select, .input--checkbox{
            border: 1px solid ${secondaryColorHex};
            border-radius: 10px;
            padding: 2.5vh 2.5vw;
        }

        .input--checkbox{
            padding: 2.5vh 0;
            display: flex;
            justify-content: center;
            gap: 1vw;
        }

        select{
            width:100%;
        }

        textarea{
            min-height:30vh;
        }

        .wrong{
            outline: 2px solid red;
        }

        .done{
            outline: 2px solid green;
        }

    }
`;

export const FormPortfolio = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    .portfolio__cards{
        width: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1vh;
        margin-bottom: 5vh;

        input{
            width:100%;
        }

        img{
            width: 70%;
            height: auto;
            background: grey;
        }
    }
`;