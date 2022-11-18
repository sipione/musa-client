import styled from "styled-components"
import { lightColorHex, secondaryColorHex } from "../../common/foundation/variables";

export const AboutContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5vh 2.5vw;
    gap: 10vh;
`;

export const AboutNav = styled.div`
    width:100%;
    padding: 1vh 5vw;
    display: flex;
    justify-content: space-evenly;
    background: ${secondaryColorHex};
    border-radius: 10px;

    .about-nav__title{
        color: ${lightColorHex};
        font-weight: 300;
    }

    a{
        text-decoration: none;
    }
`;

export const AboutContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    gap: 2.5vh;
    margin-bottom:5vh;

    .about-content__title{

    }

    .about-content__body{

    }
`;

export const AboutFaqBox = styled.div`
    width: 95%;
    border-radius: 10px;
    border: 2px solid ${secondaryColorHex};
    display: flex;
    flex-direction: column;

    .faq-title{
        width: 100%;
        padding: 1vh 2.5vw;
        color: ${secondaryColorHex};
    }

    #${props=>props.hide} div{
        height: auto;
        padding: 1vh 2.5vw;
        transform: scale(1);
    }
`;
    
export const FaqBoxContent = styled.div`
    width: 100%;
    padding: 1vh 2.5vw;
    background: ${secondaryColorHex};
    color: ${lightColorHex};
    display: none;

    .content__title{
        cursor: pointer;
    }
`;

export const FaqBoxDrawer = styled.div`
    width: 100%;
    height: 0;
    background: ${lightColorHex};
    color: ${secondaryColorHex};
    border-radius: 10px;
    padding: 0;
    transition: 0.5s;
    transform: scale(0);
    overflow: hidden;

    .drawer__text{
        transition: 0.5s;
    }
`;