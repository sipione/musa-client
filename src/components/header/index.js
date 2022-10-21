import { HeaderContainer, HeaderMobileNavegation, HeaderNavigation, HeaderResearch, HeaderTitle } from "./style";
import { Link } from "react-router-dom";
import { TitleH3 } from "../../common/foundation/typography"; 
import {ReactComponent as Logo} from "../../assets/images/logo.svg";
import {ReactComponent as Facebook} from "../../assets/images/facebook.svg";
import {ReactComponent as Instagram} from "../../assets/images/instagram.svg";
import {ReactComponent as Search} from "../../assets/images/search-icon.svg";
import {ReactComponent as Menu} from "../../assets/images/menu.svg";
import { useContext, useState } from "react";
import { UserContext } from "../../common/contexts/userContext";


const HeaderComponent = ()=>{
    const [open, setOpen] = useState(false);
    const {userLoged} = useContext(UserContext);

    return (
        <HeaderContainer open={open}>
            <HeaderTitle>
                <div>
                    <Facebook />
                    <Instagram />
                </div>

                <Link to="/" className="logo"><Logo /></Link>
                
                {userLoged.name
                ? <TitleH3>Olá, {userLoged.name.split(" ")[0].toUpperCase()}</TitleH3>
                : <Link to="login"><TitleH3 aria-label="logout" className="login">Login</TitleH3></Link>}

            </HeaderTitle>
            
            <HeaderMobileNavegation>
                <Menu onClick={()=>setOpen(!open)}/>
                <nav className={open?"open":""}>
                    <Link className="box-bottom" to="/"><TitleH3>Serviços</TitleH3></Link>

                    <Link className="box-bottom" to="/jobs"><TitleH3>Encontre uma profissional</TitleH3></Link>

                    <Link className="box-bottom" to="/partnership"><TitleH3>Parcerias</TitleH3></Link>

                    <Link className="box-around" to={userLoged ? `/profile/${userLoged.id}` : "/register"}><TitleH3>Criar Perfil</TitleH3></Link>
                </nav>
            </HeaderMobileNavegation>

            <HeaderResearch>
                <input type="search" placeholder="Busca"/>
                <Search className="search"/>
            </HeaderResearch>

            <HeaderNavigation>
                <Link className="box-bottom" to="/"><TitleH3>Serviços</TitleH3></Link>

                <Link className="box-bottom" to="/jobs"><TitleH3>Encontre uma profissional</TitleH3></Link>
                
                <Link className="box-bottom" to="/partnership"><TitleH3>Parcerias</TitleH3></Link>
                
                <Link className="box-around" to={userLoged ? `/profile/${userLoged.id}` : "/register"}><TitleH3>Criar Perfil</TitleH3></Link>
            </HeaderNavigation>
        </HeaderContainer>
    )
}

export default HeaderComponent;