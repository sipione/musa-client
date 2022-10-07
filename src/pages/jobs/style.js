import styled from "styled-components";
import { darkColorHex, darkColorRgba, maxMobileScreeenWidth, primaryColorHex, secondaryColorHex, titleH3FontSize } from "../../common/foundation/variables";

export const JobsContainer = styled.section`
    display: flex;
    padding: 5vh 2.5vw;
    position: relative;

    @media screen and (max-width: ${maxMobileScreeenWidth}px){
        flex-direction: column;
    }
`;

export const JobsCategoryIndicator = styled.div`
    display:${props=>props.selection ? "block" : "none"};
    position: absolute;
    left: 5%;
    top: 0;

    span{
        cursor: pointer;
        color: ${secondaryColorHex};
        font-size: ${titleH3FontSize}vw;
    }

    @media screen and (max-width: ${maxMobileScreeenWidth}px){
        span{
            font-size: ${titleH3FontSize*3}vw;
        }
    }
`;

export const JobsFilterBox = styled.div`
    width: 40%;
    border: 2px solid ${secondaryColorHex};
    display: flex;
    flex-direction: column;
    gap: 2vh;
    margin-right: 1vw;
    position: relative;

    .arrow{
        display:none;
    }

    .filter__item--title{
        margin-top: 3vh;
    }

    .filter__item{
        padding: 1vh 5vw;
    }

    .filter__item--desc{
        background: ${primaryColorHex};
        cursor: pointer;
        transition:0.5s;

        :hover{
            text-shadow: 0 5px 10px ${darkColorRgba(0.4)};
        }
    }

    @media screen and (max-width: ${maxMobileScreeenWidth}px){
        width: 100%;
        margin-bottom: 5vh;
        height:${props => props.hidden ? "9vh" : `${props.categories * 7.5}vh`};
        overflow: hidden;
        transition: 0.5s;

        .arrow{
            display:block;
            position: absolute;
            top:4vh;
            right:30px;
            border-top: 15px solid ${secondaryColorHex};
            border-left: 15px solid transparent;
            border-right: 15px solid transparent;
            transition:0.5s;
            cursor: pointer;
            transform: rotate(${props => props.hidden ? "" : "180deg"});
        }
    }
`;

export const JobsOffersBox = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 5vh;
    padding-left: 1vw;

    a{
        text-decoration: none;
        color: ${darkColorHex};
    }

    @media screen and (max-width: ${maxMobileScreeenWidth}px){
        width:100%;
        gap: 2.5vh;
    }
`;

export const OfferBoxContent = styled.div`
    width: 100%;
    border: 1px solid ${secondaryColorHex};
    background: ${primaryColorHex};
    display: flex;
    align-items:start;

    .img{
        flex-shrink:0;
        width: 15vw;
        height: 15vw;
        margin: 2.5vw;
        border-radius: 50%;
        background: url(${props=>props.src}) center / cover no-repeat;
    }

    .content__button{
        width: 100%;
        padding: 6.5% 2% 6.5% 0;
    }

    @media screen and (max-width: ${maxMobileScreeenWidth}px){
        .img{
            width: 30vw;
            height: 30vw;
            margin: 5vw;
        }   
    }
`;

export const ContentText = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;

    .content-text__title{
        color: ${darkColorHex};
        font-weight: 400;
        text-transform: uppercase;
    }

    @media screen and (max-width: ${maxMobileScreeenWidth}px){
        width: 100%;
    }
`;