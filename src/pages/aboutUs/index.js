import { useState } from "react";
import { BodyText, TitleH2, TitleH3 } from "../../common/foundation/typography";
import { AboutContainer, AboutContent, AboutFaqBox, AboutNav, FaqBoxContent, FaqBoxDrawer } from "./style"


const AboutPage = ()=>{
    window.scrollTo(0,0);

    const [hide, setHide] = useState(false)

    return(
        <AboutContainer>
            <AboutNav>
                <a href="#sobre"> <TitleH3 className="about-nav__title">Sobre Nós</TitleH3></a>

                <TitleH3 className="about-nav__title">|</TitleH3>
                
                <a href="#politica"> <TitleH3 className="about-nav__title">Política de privacidade</TitleH3></a>
                
                <TitleH3 className="about-nav__title">|</TitleH3>
                
                <a href="#suporte"> <TitleH3 className="about-nav__title">Suporte</TitleH3></a>

                <TitleH3 className="about-nav__title">|</TitleH3>

                <a href="#termos"><TitleH3 className="about-nav__title">Termos de uso</TitleH3></a>

                <TitleH3 className="about-nav__title">|</TitleH3>

                <a href="#faq"> <TitleH3 className="about-nav__title">FAQ</TitleH3></a>
            </AboutNav>

            <AboutContent id="sobre">
                <TitleH2>Sobre nós</TitleH2>
                <BodyText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</BodyText>
            </AboutContent>

            <AboutContent id="politica">
                <TitleH2>Política de privacidade</TitleH2>
                <BodyText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</BodyText>
            </AboutContent>

            <AboutContent id="suporte">
                <TitleH2>Suporte</TitleH2>
                <BodyText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</BodyText>
            </AboutContent>

            <AboutContent id="termos">
                <TitleH2>Termos de uso</TitleH2>
                <BodyText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</BodyText>
            </AboutContent>

            <AboutFaqBox hide={hide}>
                <BodyText className="faq-title">FAQ</BodyText>
                <FaqBoxContent hide={hide} id="one">
                    <BodyText className="content__title" onClick={(event)=>setHide(event.target.parentElement.id == hide ? false : event.target.parentElement.id)}>Como oferecer meus serviços ?</BodyText>
                    <FaqBoxDrawer hide={hide}>
                        <BodyText className="drawer__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</BodyText>
                    </FaqBoxDrawer>
                </FaqBoxContent>

                <FaqBoxContent hide={hide} id="two">
                    <BodyText className="content__title" onClick={(event)=>setHide(event.target.parentElement.id == hide ? false : event.target.parentElement.id)}>Como contratar?</BodyText>
                    <FaqBoxDrawer hide={hide}>
                        <BodyText className="drawer__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</BodyText>
                    </FaqBoxDrawer>
                </FaqBoxContent>
            </AboutFaqBox>
        </AboutContainer>
    )
}

export default AboutPage;