import styled from "styled-components";
import { maxMobileScreeenWidth, secondaryColorHex, titleH2FontSize } from "../../common/foundation/variables";


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

        .fieldsetFirst{
            display: flex;
            align-items: center;
            gap:2.5%;
            border: none;
            position: relative;

            input{
                width: 70%;
            }

            img{
                border-radius: 5px;
                width: 30%;
            }

            .delete{
                position: absolute;
                top: -5%;
                right: -1%;
                color: red;
                z-index: 2;
                font-size: ${titleH2FontSize};
                cursor: pointer;
                display: ${props => props.avatar ? "block" : "none"};
            }

        }

        .fieldset{
            display: flex;
            align-items: center;
            gap:2.5%;
            border: none;            

            .small{
                width: 30%;
            }

            .medium{
                width: 47.5%;
            }

            .big{
                width: 65%
            }
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

    @media screen and (max-width: ${maxMobileScreeenWidth}px){

        form{

            .fieldsetFirst{

                input{
                    width: 50%;
                }
    
                img{
                    border-radius: 5px;
                    width: 50%;
                }

                .delete{
                    top: 0%;
                    right: 2%;
                }
            }

            .fieldset{
                flex-wrap: wrap;

                .small, .medium, .big{
                    width: 100%;
                    margin: 1vh 0;
                }
            }
        }
    }
`;

export const FormPortfolio = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 5vh;

    .title{
        width: 100%;
        margin: 5vh 0;
    }
`;

export const PortfolioCards = styled.div`
    width: 30%;
    height: 55vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1vh;
    margin-bottom: 5vh;
    position: relative;

    .portfolio__details{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1vh;
    }
    
    input{
        width:100%;
    }

    img{
        max-height: 30vh;
        max-width: 100%;
        width: auto;
        border-radius: 5px;
    }

    .delete{
        color: red;
        position: absolute;
        top:20%;
        right: 10%;
        z-index: 2;
        display: ${props => props.image ? "block" : "none"};
    }

    @media screen and (max-width: ${maxMobileScreeenWidth}px){
        width: 100%;
        height: auto;
    }
`;