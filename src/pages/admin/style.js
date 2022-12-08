import styled from "styled-components";
import { darkColorRgba, lightColorHex, primaryColorHex, secondaryColorHex } from "../../common/foundation/variables";


export const AdminContainer = styled.section`
    min-height: 70vh;
    padding: 5vh 2.5vw;
    display: flex;
    flex-direction: column;

    .title{
        text-align: center;
    }
    `;

export const AdminStatics = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2.5vh 5vw;
    border: 2px solid ${primaryColorHex};
    color: ${secondaryColorHex};
    border-radius: 5px 5px 0 0;

`;

export const FormContainer = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${primaryColorHex};
    padding: 1vh 1vw;
    border-radius: 0 0  5px 5px;
    margin-bottom: 5vh;

    .user-searcher{
        height: 100%;

        input{
            padding: 1.5vh 1vw;
            border-radius: 5px;
            outline: none;
            border: 1px solid ${secondaryColorHex};
            background: ${primaryColorHex};
            color: ${secondaryColorHex};
            transition: 500ms;

            :focus{
                box-shadow: 5px 5px 10px ${darkColorRgba(0.4)};
                background: ${lightColorHex};
            }
        }
    }
`;

export const FormUserSelector = styled.div`
    position: relative;
    min-width: 30%;

    .box{
        transition: 500ms;
        background: ${props => props.open ? lightColorHex : primaryColorHex};
        color: ${secondaryColorHex};
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1vw;
        border: 1px solid ${secondaryColorHex};
        border-radius: 5px;
        padding: 0.5vh 0.5vw;
        height: 100%;
        box-shadow: ${props => props.open ? "5px 0px 10px" : "0 0 0"} ${darkColorRgba(0.4)};
        transform: scale(${props=>props.open ? 1.05 : 1});
        cursor: pointer;
        
        .arrow{
            transition: 500ms;
            transform: rotate(${props => props.open ? "180deg" : "0deg"});
        }
    }

    .dropdown{
        position: absolute;
        top: 105%;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        gap: 1vh;
        padding: 1vh 1vw;
        background: ${secondaryColorHex};
        border-radius: 5px;
        transform-origin: top;
        transform: scaleY(${props=> props.open ? 1 : 0}) translateY(${props=> props.open ? "0%" : "-0%"});
        transition: 500ms;
        box-shadow: ${props => props.open ? "5px 5px 10px" : "0 0 0"} ${darkColorRgba(0.4)};
        color: ${lightColorHex};

        input{
            display: none;

            +.span{
                cursor: pointer;
            }

            :checked +.span{
                background: ${lightColorHex};
                transition: 500ms;
            }
        }

        div{
            display: flex;
            align-items: center;
            gap: 0.5vw;

            p{
                cursor: pointer;
            }
        }

        .span{
            color: ${secondaryColorHex};
            border: .5px solid ${lightColorHex};
            border-radius: 5px;
            width: 1.5vw;
            height: 1.5vw;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

`;

export const DataContainer = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 2.5vh;
`;

export const DataContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${primaryColorHex};
    border-radius: 5px;
    color: ${secondaryColorHex};
    padding: 2.5vh 5vw;
    margin: 2.5vh 0;

    .block, .unblock{
        transition: 500ms;
        cursor: pointer;

        :hover{
            transform: scale(1.25);
        }
    }
`;