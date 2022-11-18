import styled from "styled-components";
import { darkColorRgba, secondaryColorHex, maxMobileScreeenWidth, primaryColorHex, darkColorHex } from "../../common/foundation/variables";
import banner from "../../assets/images/banner.png";

export const HomeContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;

    .banner-top{
        height: 60vh;
        width:100%;
        background: #E9B9BC;
        display: flex;
        justify-content: center;
        align-items: center;

        svg{
            height: 80%;
            width: auto;
        }
    }

    .separator{
        display: flex;
        width:100%;
        justify-content: center;
        align-items: center;
        gap: 5vw;


        .separator__span{
            width: 20%;
            height: 3px;
            background: ${secondaryColorHex};
        }
    }

    .single-separator{
        width: 80%;
        height: 0.1vh;
        background: ${secondaryColorHex};
        align-self: center;
        margin: 20vh 0;
    }

    @media screen and (max-width: ${maxMobileScreeenWidth}px){
        .banner-top{
            height: 35vh;
        }
        
        .separator{
            margin-bottom: 5vh;
        }

        .single-separator{
            margin: 10vh 0;
        }
    }
`;

export const HomeCategoriesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5vw;
    padding:5vh 5vw;

    a{
        text-decoration: none;
        color: ${darkColorHex};
    }

    .category{
        width: 15%;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        transition: 0.5s;
        gap:2vh;

        .category__title{
            font-weight: 400;
            text-align:center;
            line-height: 100%;
        }

        .category__image{
            height: auto;
            width: 100%;
        }

        :hover{
            filter: drop-shadow(0 5px 10px ${darkColorRgba(0.6)});
        }
    }

    @media screen and (max-width: ${maxMobileScreeenWidth}px){
        padding:0 10vw;
        justify-content: space-between;
        gap: 0;

        .category{
            width: 27%;
            margin: 2.5vh 0;

        }
    }
`;

export const HomeDescriptionContainer = styled.div`
    width: 60%;
    align-self: center;
    padding:5vh 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5vh;
    text-align: center;

    .logo{
        width: 40%;
        height: auto;
        margin: 5vh 0;
    }

    @media screen and (max-width: ${maxMobileScreeenWidth}px){
        width:100%;
        padding: 2.5vh 5vw;
    }
`;

export const HomeCarrousselContainer = styled.div`
    width: auto;
    display: flex;
    overflow: auto;
    flex-shrink: 0;
    gap: 2.5vw;
    padding: 0 2.5vw;
`;

export const CarrousselCard = styled.div`
    flex-shrink: 0;
    margin-bottom: 20vh;
    width: 22.5vw;
    height: 45vh;
    position: relative;
    background: url(${props => props.image}) top / cover no-repeat;
    cursor: pointer;
    display: flex;
    justify-content: center;

    .card-title{
        text-decoration: none;
        position: absolute;
        bottom: -24%;
        left:0;
        right: 0;
        min-height: 25%;
        background: ${primaryColorHex};
        padding: 1vh 1vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;

        .card-title__text{
            color: ${secondaryColorHex};
        }


    }
    
    :after{
        content: "";
        position: absolute;
        bottom: -35%;
        width: 50%;
        height: 1px;
        background: ${secondaryColorHex};
        transition: 0.5s;
    }

    :hover{

        :after{
            width:100%;
        }
    }

    @media screen and (max-width: ${maxMobileScreeenWidth}px){
        width: 45vw;
        height: 30vh;

        .card-title{
            height: 30%;
        }
    }
`;