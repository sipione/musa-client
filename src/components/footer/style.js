import styled from "styled-components";
import { darkColorRgba, lightColorHex, maxMobileScreeenWidth, primaryColorHex, secondaryColorHex } from "../../common/foundation/variables";


export const FooterContainer = styled.footer`
    
`;

export const FooterFlexBox = styled.section`
    display: flex;
    background: ${primaryColorHex};
    

    @media screen and (max-width: ${maxMobileScreeenWidth}px){
        flex-direction: column;
        
        .flex-box--media{
            order: -1;
        }
    }
`;

export const FlexBoxContentCenter = styled.div`
    width: 50%;
    min-height: 30vh;
    background: url(${props=>props.bg}) center / cover no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .flex-box__title{
        width: 60%;
        color: ${lightColorHex};
        font-weight: 200;
        text-align: center;
    }

    .flex-box__button{
        width: 40%;
        padding: 1%;
        border: none;
        border-radius: 10px;
        margin-top: 2vh;
        cursor: pointer;
        transition: 0.5s;

        .button__title{
            font-weight: 600;
        }

        :hover{
            filter: drop-shadow(0 5px 10px ${darkColorRgba(0.6)});
            transform: scale(1.01);
        }

    }

    @media screen and (max-width: ${maxMobileScreeenWidth}px){
        width:100%;
        min-height: 20vh;
    }
`;

export const FlexBoxContentLeft = styled.div`
    width: 50%;
    padding: 5vh 5vw;
    display: flex;
    flex-direction: column;
    gap: 2vh;

    .flex-box__nav{
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 1vh;

        a{
            text-decoration: none;
            position: relative;
            width: auto;
            cursor: pointer;

            &:before{
                content:"";
                position: absolute;
                bottom: -10%;
                height: 1px;
                width: 0%;
                background: ${secondaryColorHex};
                transition: 0.5s;
            }
    
            &:hover::before{
                width: 100%;
            }
        }

        :after{
            content: "";
            position: absolute;
            bottom:-2vh;
            left: 0;
            width:50%;
            height: 1px;
            background: ${secondaryColorHex};
            transition: 0.5s;
        }

        :hover:after{
            width:0%;
        }
    }

    .flex-box__text{
        color: ${secondaryColorHex};
    }

    .flex-box__input{
        border: none;
        border-radius: 10px;
        padding: 2.5%;
    }

    .icon-div{
        display: flex;
        gap: 2.5vw;
    }

    .icon-div__svg, #facebook{
        height: 2.5vh;
        fill: ${secondaryColorHex};
        cursor: pointer;
        transition: 0.5s;        
    }
    
    @media screen and (max-width: ${maxMobileScreeenWidth}px){
        width:100%;
        padding: 2.5vh 10vw;

        .flex-box__nav{
            padding-bottom: 5vh;

            :after{
                display: none;
            }
        }

        .flex-box__text{
            align-self: center;
            text-align: center;
        }

        .icon-div{
            align-self: center;
            order: -1;
            gap: 5vw;
            padding-top: 5vh;

            .icon-div__svg, #facebook{
                height: 3vh;
            }
        }
    }
`;

