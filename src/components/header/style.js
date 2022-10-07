import styled from "styled-components";
import { darkColorHex, maxMobileScreeenWidth, maxTabletScreenWidth, primaryColorHex, secondaryColorHex } from "../../common/foundation/variables";


export const HeaderContainer = styled.header`
    width: 100%;
    min-height: 40vh;
    padding: 2.5vh 5vw;
    background: ${primaryColorHex};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5vh;

    @media screen and (max-width: ${maxMobileScreeenWidth}px){
        padding: 3vh 5vw;
        transition:0.5s;
        min-height: ${props=>props.open ? "40vh" : "25vh"};
        gap:5vh;
    }
`;

export const HeaderTitle = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    a{
        text-decoration: none;
    }

    .logo{
        width: 30%;
        svg{
            width:90%;
            height: auto;
        }
    }

    div{
        display: flex;
        gap: 2.5vw;
    }

    svg, #facebook{
        width: auto;
        fill: ${secondaryColorHex};
        height: 3vh;
        cursor: pointer;
    }

    .login{
        cursor: pointer;
    }

    @media screen and (max-width: ${maxMobileScreeenWidth}px){
        div{
            display: none;
        }

        .logo{
            width:50%;
        }

        .login{
            display:none;
        }
    }
`;

export const HeaderMobileNavegation = styled.div`
    display: none;

    @media screen and (max-width: ${maxMobileScreeenWidth}px){
        display: flex;
        flex-direction: column;
        gap: 1vh;
        position: absolute;
        top: 2.5vh;
        right:5vw;
        width: 30vw;
        z-index: 2;

        svg, path{
            width: 50%;
            fill: ${secondaryColorHex};
            align-self:center;
        }
        
        nav{
            display: flex;
            flex-direction: column;
            gap: 1.5vh;
            overflow:hidden;
            height:0vh;
            transition: 0.5s;
            align-items:center;
            text-align: center;

            a{
                background: ${primaryColorHex};
            }
        }

        .open{
            height: 25vh;
        }
    }
`;

export const HeaderResearch = styled.div`
    width: 50%;
    position: relative;

    input{
        width: 100%;
        outline: none;
        border: 1px solid ${secondaryColorHex};
        border-radius: 10px;
        padding: 1.5vh 7.5vw 1.5vh 2.5vw;
    }

    .search{
        position: absolute;
        top:50%;
        right: 2.5%;
        height: 60%;
        transform: translateY(-50%);
    }
    
    @media screen and (max-width: ${maxMobileScreeenWidth}px){
        width: 60%;
        align-self: flex-start;

        input{
            padding: 1vh 8vw 1vh 2vw;
        }

        .search{
            right: -5%;
        }
    }
`;

export const HeaderNavigation = styled.nav`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-self: flex-end;
    gap: 5vw;
    
    a{
        text-decoration: none;
    }
    
    .box-bottom{
        position: relative;
    
        :before{
            content:"";
            position: absolute;
            bottom: -10%;
            height: 5%;
            width: 0%;
            background: ${secondaryColorHex};
            transition: 0.5s;
        }

        :hover::before{
            width: 100%;
        }
    }

    .box-around{
        position: relative;
        transition: 0.5s;

        :before{
            content: "";
            position: absolute;
            width: 110%;
            height: 110%;
            border-right: 1px solid ${secondaryColorHex};
            border-bottom: 1px solid ${secondaryColorHex};
            border-radius: 10px;
        }
        
        :after{
            content: "";
            position: absolute;
            bottom: -20%;
            left: -10%;
            width: 25%;
            height: 40%;
            background: ${primaryColorHex};
        }
    }

    @media screen and (max-width: ${maxMobileScreeenWidth}px){
        display: none;
    }
`;