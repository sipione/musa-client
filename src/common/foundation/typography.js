import styled from "styled-components";
import { bodyLittleTextFontSize, bodyTextFontSize, maxMomaxMobileScreeenWidth, bileScreeenWidth, secondaryColorHex, titleH1FontSize, titleH2FontSize, titleH3FontSize, maxMobileScreeenWidth } from "./variables";

//TITLES START
 export const TitleH1 = styled.h1`
    font-size: ${titleH1FontSize}vw;
    font-weight: 500;
    color: ${secondaryColorHex};


   @media screen and (max-width: ${maxMobileScreeenWidth}px){
         font-size: ${titleH1FontSize*2}vw;
   }   
`;

 export const TitleH2 = styled.h2`
   font-size: ${titleH2FontSize}vw;
   font-weight: 400;
   color: ${secondaryColorHex};

   @media screen and (max-width: ${maxMobileScreeenWidth}px){
      font-size: ${titleH2FontSize*2}vw;
   }
`;

export const TitleH3 = styled.h3`
   font-size: ${titleH3FontSize}vw;
   font-weight: 400;
   color: ${secondaryColorHex};

   @media screen and (max-width: ${maxMobileScreeenWidth}px){
      font-size: ${titleH3FontSize*2}vw;
   }
`;
//TITLES END


//BODY START
export const BodyText = styled.p`
   font-size: ${bodyTextFontSize}vw;
   font-weight: 400;

   @media screen and (max-width: ${maxMobileScreeenWidth}px){
      font-size: ${bodyTextFontSize*2}vw;
   }
`; 

export const BodyLittleText = styled.p`
   font-size: ${bodyLittleTextFontSize}vw;
   font-weight: 400;

   @media screen and (max-width: ${maxMobileScreeenWidth}px){
      font-size: ${bodyLittleTextFontSize*2}vw;
   }
`;
//BODY END