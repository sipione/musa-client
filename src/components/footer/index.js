import { FlexBoxContentCenter, FlexBoxContentLeft, FooterContainer, FooterCopy, FooterFlexBox } from "./style"
import bgPeople from "../../assets/images/bgPeople.webp";
import bgSocial from "../../assets/images/bgSocial.webp"; 
import { BodyLittleText, BodyText, TitleH3 } from "../../common/foundation/typography";
import {ReactComponent as Instagram} from "../../assets/images/instagram.svg";
import {ReactComponent as Facebook} from "../../assets/images/facebook.svg";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../common/contexts/userContext";

const FooterComponent = ()=>{
    const {userLoged} = useContext(UserContext);
    const navigate = useNavigate();

    const logout = ()=>{
        window.sessionStorage.clear();
        navigate("/");
        window.location.reload();
    }

    return (
        <FooterContainer>
            <FooterFlexBox>
                <FlexBoxContentCenter bg={bgPeople}/>

                <FlexBoxContentCenter bg={bgSocial}>
                    <TitleH3 className="flex-box__title">Acesse nossa comunidade no facebook</TitleH3>

                    <a href={userLoged ? "https://www.facebook.com/groups/musamulheressa" : "#/login"} target="__blank" className="flex-box__button"><TitleH3 className="button__title">CLIQUE AQUI</TitleH3></a>
                </FlexBoxContentCenter>
            </FooterFlexBox>

            <FooterFlexBox>
                <FlexBoxContentLeft>
                    <nav className="flex-box__nav">
                        <Link to="/">
                            <TitleH3>Serviços</TitleH3>
                        </Link>

                        <Link to="/jobs">
                            <TitleH3>Encontre uma profissional</TitleH3>
                        </Link>

                        <Link to="/partnership">
                            <TitleH3>Parcerias</TitleH3>
                        </Link>

                        <Link to="/about">
                            <TitleH3>Termos de uso</TitleH3>
                        </Link>

                        <Link to="/about">
                            <TitleH3>Políticas de privacidade</TitleH3>
                        </Link>
                    </nav>

                </FlexBoxContentLeft>

                <FlexBoxContentLeft className="flex-box--media">
                    <BodyText className="flex-box__text">Inscreva-se em nossa newsletter</BodyText>

                    <input className="flex-box__input" placeholder="Digite o seu e-mail"/>

                    <div className="icon-div">
                        <Facebook className="icon-div__svg"/>
                        <Instagram className="icon-div__svg"/>
                    </div>
                    
                    {
                    userLoged
                        ? <BodyText className="logout" onClick={logout} >Logout</BodyText>
                        : <Link to="/login" className="logout"><BodyText>Login</BodyText></Link>
                    }
                </FlexBoxContentLeft>
            </FooterFlexBox>
            <FooterCopy>
                <BodyLittleText>Agência: <a href="https://celineestrategias.com/" target="__blank"> Celine Estratégias</a></BodyLittleText>
                <BodyLittleText>Todos os direitos reservados a Musa©</BodyLittleText>
                <BodyLittleText>Programação: <a href="https://sipione.tech" target="__blank">Sipione Tech</a></BodyLittleText>
            </FooterCopy>
        </FooterContainer>
    )
}

export default FooterComponent;