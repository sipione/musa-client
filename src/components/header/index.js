import { HeaderContainer, HeaderMobileNavegation, HeaderNavigation, HeaderResearch, HeaderTitle } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { BodyLittleText, BodyText, TitleH3 } from "../../common/foundation/typography"; 
import {ReactComponent as Logo} from "../../assets/images/logo.svg";
import {ReactComponent as Search} from "../../assets/images/search-icon.svg";
import {ReactComponent as Menu} from "../../assets/images/menu.svg";
import { useContext, useState } from "react";
import { UserContext } from "../../common/contexts/userContext";
import ButtonComponent from "../button";
import { CategoryContext } from "../../common/contexts/categoryContext";


const HeaderComponent = ()=>{
    const [open, setOpen] = useState(false);
    const {userLoged} = useContext(UserContext);
    const {setCategorySelected, categories} = useContext(CategoryContext);
    const navigation = useNavigate();

    const researchCategory = (event)=>{
        if(event.key == "Enter"){
            const regex = new RegExp(event.target.value, "gim");
            const {name} = categories.filter(item=>item.label.match(regex))[0] || alert("Categoria não encontrada");
            setCategorySelected(name);
            event.target.value = "";
            navigation("/jobs");
        }
    }

    return (
        <HeaderContainer open={open}>
            <HeaderTitle>
                <div className="comunidade">
                    <a className="comunidade__link" href={userLoged ? "https://t.me/+erXenQho3wYyZDdh" : "#/login"} target={userLoged ? "__blank" : "_self"}><ButtonComponent> <BodyLittleText>Participe da nossa COMUNIDADE</BodyLittleText></ButtonComponent></a>
                </div>

                <Link to="/" className="logo"><Logo /></Link>

                <div className="login-box">
                    {userLoged.name
                    ? <TitleH3>Olá, {userLoged.name.split(" ")[0].toUpperCase()}</TitleH3>
                    : <Link to="login"><TitleH3 aria-label="logout" className="login">Login</TitleH3></Link>}
                    {userLoged.role == "admin" && (<Link className="painel" to="/admin"><BodyText>Painel Admin</BodyText></Link>)}
                </div>
                

            </HeaderTitle>
            
            <HeaderMobileNavegation>
                <Menu onClick={()=>setOpen(!open)}/>
                <nav className={open?"open":""}>
                    <div>
                        {userLoged.name
                        ? <TitleH3>Olá, {userLoged.name.split(" ")[0].toUpperCase()}</TitleH3>
                        : <Link to="login"><TitleH3 aria-label="logout" className="login">Login</TitleH3></Link>}
                        {userLoged.role == "admin" && (<Link className="painel" to="/admin"><TitleH3>Painel Admin</TitleH3></Link>)}
                    </div>

                    <Link className="box-bottom" to={userLoged ? `/profile/edit/${userLoged.id}` : "/register"}><TitleH3>Cadastrar serviços</TitleH3></Link>

                    <Link className="box-bottom" to="/jobs"><TitleH3>Encontre uma profissional</TitleH3></Link>

                    <Link className="box-bottom" to="/partnership"><TitleH3>Parcerias</TitleH3></Link>

                    <Link className="box-around" to={userLoged ? `/profile/${userLoged.id}` : "/register"}><TitleH3>Criar Perfil</TitleH3></Link>
                </nav>
            </HeaderMobileNavegation>

            <HeaderResearch>
                <input 
                    onKeyDown={researchCategory} 
                    type="search" 
                    placeholder="Busca"/>
                <Search className="search"/>
            </HeaderResearch>

            <HeaderNavigation>
                <Link className="box-bottom" to={userLoged ? `/profile/edit/${userLoged.id}` : "/register"}><TitleH3>Cadastrar serviços</TitleH3></Link>

                <Link className="box-bottom" to="/jobs"><TitleH3>Encontre uma profissional</TitleH3></Link>
                
                <Link className="box-bottom" to="/partnership"><TitleH3>Parcerias</TitleH3></Link>
                
                <Link className="box-around" to={userLoged ? `/profile/${userLoged.id}` : "/register"}><TitleH3>Criar Perfil</TitleH3></Link>
            </HeaderNavigation>
        </HeaderContainer>
    )
}

export default HeaderComponent;