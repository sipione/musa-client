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
                <BodyText>A Mulheres SA ( MUSA) é uma plataforma que conecta empreendedoras a mulheres que desejam comprar seus produtos ou serviços,  com o objetivo de fomentar o empreendedorismo feminino e a realização de negócios entre mulheres.</BodyText>

                <BodyText>Criada por uma mulher, mãe e empreendedora, a MUSA nasce para ser mais que uma plataforma de negócios, sua missão é criar uma grande comunidade de mulheres que negociam, aprendem e prosperam entre si.</BodyText>

                <BodyText>As empreendedoras cadastradas na MUSA podem criar um perfil onde é possível incluir todos os dados de contatos e fotos de seu trabalho. </BodyText>

                <BodyText>Para as mulheres que desejam comprar produtos ou serviços, a MUSA é uma grande vitrine, recheada de opções.</BodyText>

                <BodyText>A MUSA quer fortalecer o empreendedorismo materno, temos um filtro específico para você que deseja comprar de mães empreendedoras.</BodyText>

                <BodyText>Em nossa comunidade, é possível participar de lives, palestras, interagir com outras mulheres, compartilhando aprendizados e desafios da jornada empreendedora.</BodyText>

                <BodyText>MUSA, conectando mulheres e negócios!</BodyText>
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

                <BodyText>Oi MUSA! </BodyText>
                <BodyText>Que bom que você está aqui!</BodyText>
                <BodyText>Bem-vinda ao nosso termo de uso e instruções gerais, vamos lá?</BodyText>

                <TitleH3>O que é a MUSA? </TitleH3>
                <BodyText>A MUSA é uma plataforma que conecta mulheres para facilitar a realização de negócios. </BodyText>
                <BodyText>Nossa proposta é te aproximar de uma mulher que esteja mais perto de você, a fim de incentivar os negócios femininos.  </BodyText>

                <TitleH3>COMO FUNCIONAMOS:</TitleH3>
                <BodyText>Aqui nós oferecemos um espaço online que permita a aproximação de mulheres e a realização de negócios. Nosso diferencial é propiciar que mulheres que desejam comprar de outras mulheres tenham onde buscar essa informação. </BodyText>
                <BodyText>Para participar da MUSA é importante que você saiba de algumas considerações: </BodyText>
                <BodyText>A criação do perfil é gratuita. </BodyText>
                <BodyText>Nós somos responsáveis pelo espaço. </BodyText>
                <BodyText>A gestão do perfil, as fotos publicadas, os preços praticados, os contatos disponibilizados são de responsabilidade das anunciantes. </BodyText>
                <BodyText>A MUSA não vende nenhum produto ou serviço, não interferimos nos preços praticados, e não é possível realizar pagamentos dentro de nossa plataforma. Nosso propósito é dar visibilidade para o negócio, toda a negociação será feita diretamente com a fornecedora do serviço, assim como as tratativas de pagamento. </BodyText>
                <BodyText>Em caso de qualquer tipo de problema, a anunciante deverá ser contactada. </BodyText>
                <BodyText>A veracidade e a exatidão das informações sobre os produtos e serviços apresentados pelas anunciantes são de responsabilidade das mesmas. </BodyText>
                <BodyText>A MUSA oferece filtros para possibilitar que você negocie especificamente com mães, fortalecer o empreendedorismo materno é também uma de nossas bandeiras. </BodyText>

                <TitleH3>O QUE NÃO PODE SER FEITO: </TitleH3>
                <BodyText>Anúncios que violem a legislação vigente, oferecendo produtos ou serviços proibidos por lei.</BodyText>
                <BodyText>Comunicação ou transmissão de informações que contenham qualquer tipo de discriminação.</BodyText>
                <BodyText>Conteúdos de cunho obsceno ou ofensivo.</BodyText>

                <TitleH3>SE VOCÊ PRECISAR DE ALGUMA INFORMAÇÃO, OU PRECISAR ESCLARECER DÚVIDAS, NOS ACIONE EM: </TitleH3>
                <BodyText>contato@mulheressa.com.br</BodyText>
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