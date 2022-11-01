import { useState } from "react";
import { BodyText, TitleH2, TitleH3 } from "../../common/foundation/typography";
import { AboutContainer, AboutContent, AboutFaqBox, AboutNav, FaqBoxContent, FaqBoxDrawer } from "./style"
import AnchorLink from 'react-anchor-link-smooth-scroll';

const AboutPage = ()=>{
    window.scrollTo(0,0);

    const [hide, setHide] = useState(false)

    return(
        <AboutContainer>
            <AboutNav>
                <AnchorLink href="#sobre"> <TitleH3 className="about-nav__title">Sobre Nós</TitleH3></AnchorLink>

                <TitleH3 className="about-nav__title">|</TitleH3>
                
                <AnchorLink href="#politica"> <TitleH3 className="about-nav__title">Política de privacidade</TitleH3></AnchorLink>
                
                <TitleH3 className="about-nav__title">|</TitleH3>
                
                <AnchorLink href="#suporte"> <TitleH3 className="about-nav__title">Suporte</TitleH3></AnchorLink>

                <TitleH3 className="about-nav__title">|</TitleH3>

                <AnchorLink href="#termos"><TitleH3 className="about-nav__title">Termos de uso</TitleH3></AnchorLink>

                <TitleH3 className="about-nav__title">|</TitleH3>

                <AnchorLink href="#faq"> <TitleH3 className="about-nav__title">FAQ</TitleH3></AnchorLink>
            </AboutNav>

            <AboutContent id="sobre">
                <TitleH2>Sobre nós</TitleH2>
                <BodyText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</BodyText>
            </AboutContent>

            <AboutContent id="politica">
                <TitleH2>Política de privacidade</TitleH2>
                <BodyText>A presente política de privacidade contém informações  a respeito do modo como tratamos, total ou parcialmente, de forma automatizada ou não, os dados pessoais dos usuários que acessam nosso site.</BodyText>

                <BodyText>Todas as suas informações pessoais recolhidas, serão usadas para o ajudar a tornar a sua visita no nosso site o mais produtiva e agradável possível. A garantia da confidencialidade dos dados pessoais dos utilizadores do nosso site é importante para nós.</BodyText>

                <BodyText>Todas as informações pessoais</BodyText> 
                <BodyText>relativas a clientes, assinantes  ou visitantes que usem o site NOME DO SEU SITE serão tratadas em concordância com a Lei Federal de proteção de dados pessoais n.º 13.709, de 14 de agosto de 2018</BodyText>

                <BodyText>A informação pessoal recolhida pode incluir o seu nome, e-mail, número de telefone e/ou outros. O uso do site NOME DO SEU SITE pressupõe a aceitação deste Acordo de privacidade.</BodyText>

                <BodyText>Coleta de dados</BodyText>
                <BodyText>Coletamos dados da seguinte forma:</BodyText> 

                <BodyText>Histórico de contato – guarda informações de todos os contatos já realizados com nossos usuários, tais como interações por email.</BodyText>

                <BodyText>Informação de navegação (Cookies) – Utilizamos o Google Analytics, que utiliza de ‘cookies’ para armazenar informações, tais como o número que vezes que visitou nosso site, localização geográfica, endereço IP, tipo de navegador e páginas visitadas.</BodyText>

                <BodyText>Você detém o poder de desligar os seus cookies, nas opções do seu browser, ou efetuando alterações nas ferramentas de programas Anti-Virus. No entanto, isso poderá alterar a forma como interage com o nosso website, ou outros websites. Isso poderá afetar ou não permitir que faça logins em programas sites.</BodyText>

                <BodyText>Informações fornecidas por você –  Coletamos informações através de um questionário. Algumas informações podem ser obtidas por meio de um contato direto via e-mail ou telefone.</BodyText>

                <BodyText>Você pode solicitar que se corrija ou exclua suas informações pessoais enviando um e-mail para EMAIL@SEUDOMINIO.COM . No entanto não podemos acatar um pedido para alterar informações que acreditamos que a alteração violaria qualquer lei ou requisito legal ou que a informação está incorreta.</BodyText>

                <BodyText>Segurança de dados</BodyText>
                <BodyText>Estamos comprometidos em manter suas informações seguras de acidentes, perda acidentais e de acidentes de acesso, alterações, uso ou divulgação não autorizada.</BodyText>

                <BodyText>Sabemos que cabe a você manter e ter cuidado na divulgação dos seus dados em áreas públicas do site, fóruns e ou seções de comentários.</BodyText>

                <BodyText>Infelizmente sabemos que a transmissão de informações pela internet não é completamente segura. Embora façamos o melhor para proteger suas informações pessoais, não podemos garantir a segurança de suas informações pessoais transmitidas ao nosso site. Qualquer envio de informação pessoal é de sua responsabilidade. Não somos responsáveis pela evasão de quaisquer configurações de privacidade ou medidas de segurança contidas no site.</BodyText>

                <BodyText>Alterações</BodyText>
                <BodyText>Nos reservamos ao direito de alterar este acordo sem aviso prévio. Deste modo, recomendamos que consulte a nossa política de privacidade com regularidade de forma a estar sempre atualizado.</BodyText>
            </AboutContent>

            <AboutContent id="suporte">
                <TitleH2>Suporte</TitleH2>
                <BodyText>Nosso contato</BodyText>
                <BodyText>Qualquer dúvida sobre esta política de privacidade e nossas práticas de privacidade, entre em contato através de e-mail EMAIL@SEUDOMINIO.COM</BodyText>
            </AboutContent>

            <AboutContent id="termos">
                <TitleH2>Termos de uso</TitleH2>
                <BodyText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</BodyText>
            </AboutContent>

            <AboutFaqBox id="faq" hide={hide}>
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