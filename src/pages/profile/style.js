import styled from "styled-components";
import { darkColorHex, maxMobileScreeenWidth, primaryColorHex, secondaryColorHex } from "../../common/foundation/variables";

export const ProfileContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 2.5vw;

    .title-images{
        color: ${darkColorHex};
        font-weight: 500;
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
        background: url(${props => props.img ? props.img : primaryColorHex}) center / cover no-repeat;
    }

    .profile__data{
        width: 60%;
        padding-right: 2.5vw;
        display: flex;
        flex-direction: column;
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

        .data__title--name{
            font-weight: 600;
            display: flex;
            gap: 2vw;

            .title--name__link{
                display: ${props=> props.owner ? "inline" : "none"};

                svg{
                    fill: ${secondaryColorHex};
                    width: 1.5vw;
                }
            }
        }

        .data__title--last{
            margin-bottom: 1.5vh;
        }
    }

    @media screen and (max-width: ${maxMobileScreeenWidth}px){
        flex-direction: column;

        .profile__data{
            width: 100%;
            gap: 1vh;
            align-items: center;

            .data__title--func, .data__title--last, .data__title--about{
                align-self: start;
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

    .card__picture{
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
