import styled from "styled-components";
import { darkColorHex, maxMobileScreeenWidth, primaryColorHex, secondaryColorHex } from "../../common/foundation/variables";

export const ProfileContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 2.5vw;
    position: relative;

    .title-images{
        color: ${darkColorHex};
    }

    .unloged-link{
        margin: 5vh 0;
        text-decoration: none;
        color: ${darkColorHex};
        transition: 0.5s;

        :hover{
            color: ${secondaryColorHex};
        }
    }
`;

export const ProfileDataBox = styled.div`
    padding: 5vh 0;
    display: flex;
    gap: 5vw;

    .profile__pic{
        width: 40%;
        min-height: 40vh;
        border-radius: 5px;
        background: url(${props => props.img ? props.img : primaryColorHex}) center / cover no-repeat;
    }

    .profile__data{
        a{
            text-decoration: none;
        }

        width: 60%;
        padding-right: 2.5vw;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5vh;

        .data__instagram{
            display: flex;
            align-items:center;
            cursor: pointer;

            a{
                text-decoration: none;
            }

            svg{
                width: 3vw;
                fill: ${secondaryColorHex};
            }

            :hover{

                .data__title{
                    color: ${secondaryColorHex};
                    text-decoration: underline;
                }
            }
        }

        .data__title{
            color: ${darkColorHex};
            font-weight: 400;
            transition: 0.5s;
        }

        .data__web{
            display: flex;
            gap: 2.5vw;
        }

        .data__title--site{
            
            :hover{
                    color: ${secondaryColorHex};
            }
        }

        .data__title--name{
            font-weight: 600;
            display: flex;
            gap: 2vw;
            line-height: 90%;

            .title--name__link{
                display: ${props => props.owner ? "flex" : "none" };
                align-items: center;
                gap: 1vw;
                text-decoration: none;
                color: ${darkColorHex};
                transition: 500ms;
                position: absolute;
                top: 2.5vh;
                right: 5vw;


                svg{
                    fill: ${secondaryColorHex};
                    width: 1.5vw;
                }

                :hover{
                    color: ${secondaryColorHex};
                }
            }
        }

        .data__title--about{
            font-weight: 200;
            line-height: 110%;
            margin: 2.5vh 0;
        }

        .data__title--last{
            margin-bottom: 1.5vh;
            width: 100%;
        }
    }

    @media screen and (max-width: ${maxMobileScreeenWidth}px){
        flex-direction: column;

        .profile__data{
            width: 100%;
            gap: 1vh;
            align-items: center;
            padding-right: 0;
            padding: 0 5vw;

            .data__wpp{
                width: 100%;
            }

            .data__title--func, .data__title--last, .data__title--about{
                align-self: start;
                font-weight: 200;
            }

            .data__web{
                flex-direction: column;
            }

            .data__instagram{
                svg{
                    width: 7vw;
                }
            }
        }
        
        .profile__pic{
            width:90%;
            align-self:center;
            min-height: 60vh;
        }
    }
`;

export const ProfileImagesBox = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 5vh 0;

    .images-button{
        width:100%;
        padding-right: 60%;
    }

    @media screen and (max-width: ${maxMobileScreeenWidth}px){
        .images-button{
            width:100%;
            padding: 0;
        }
    }
`;


export const ImagesBoxCard = styled.div`
    width: 25vw;
    margin-bottom: 5vh;
    cursor: pointer;

    .card__picture{
        border-radius: 5px;
        width: 100%;
        height: 20vw;
        background: url(${props=> props.profileImage ? props.profileImage : null}) center / cover no-repeat;
    }

    .card__desc{
        text-align:center;
        padding: 10% 10% 0 10%;
    }

    @media screen and (max-width: ${maxMobileScreeenWidth}px){
        width: 47.5%;
    }
`;
