import axios from 'axios';
import { Link } from "react-router-dom";
import { BodyText, TitleH2 } from "../../common/foundation/typography";
import { CarrousselCard, HomeCarrousselContainer, HomeCategoriesContainer, HomeContainer, HomeDescriptionContainer } from "./style";
import {ReactComponent as Logo} from "../../assets/images/logo.svg";
import {ReactComponent as Logo2} from "../../assets/images/logo2.svg";
import users from "../../assets/json/users.json";
import { useContext } from 'react';
import { CategoryContext } from '../../common/contexts/categoryContext';
import LoadingComponent from '../../components/loading';
import { UserContext } from '../../common/contexts/userContext';
import { ImagesContext } from '../../common/contexts/imagesContext';

const PageHome = ()=> {
    const {setCategorySelected, categories} = useContext(CategoryContext);
    const{userLoged, professionals}=useContext(UserContext);
    const {avatars} = useContext(ImagesContext);
    window.scrollTo(0,0);



    return(
        <HomeContainer>
            <div className="banner-top">
                <Logo2/>
            </div>

            <div className="separator">
                <span className="separator__span"/>
                <TitleH2>Categorias</TitleH2>
                <span className="separator__span"/>
            </div>

            <HomeCategoriesContainer>
                {categories.filter(cat=>cat.img_name!=null).map(item=>{
                    return (
                        <Link
                        to="/jobs" 
                        className="category"
                        onClick={()=>setCategorySelected(item.name)} 
                        key={item.name}>
                            <img className="category__image" src={require("../../assets/images/"+item.img_name)} alt="category representation"/>
                            <BodyText className="category__title">{item.label}</BodyText>
                        </Link>
                    )
                })}
            </HomeCategoriesContainer>

            <HomeDescriptionContainer>
                <Logo className="logo"/>

                <BodyText>A Mulheres SA ( MUSA) é uma plataforma que conecta empreendedoras a mulheres que desejam comprar seus produtos ou serviços,  com o objetivo de fomentar o empreendedorismo feminino e a realização de negócios entre mulheres.</BodyText>

                <BodyText>Criada por uma mulher, mãe e empreendedora, a MUSA nasce para ser mais que uma plataforma de negócios, sua missão é criar uma grande comunidade de mulheres que negociam, aprendem e prosperam entre si.</BodyText>

                <BodyText>As empreendedoras cadastradas na MUSA podem criar um perfil onde é possível incluir todos os dados de contatos e fotos de seu trabalho. </BodyText>

                <BodyText>Para as mulheres que desejam comprar produtos ou serviços, a MUSA é uma grande vitrine, recheada de opções.</BodyText>

                <BodyText>A MUSA quer fortalecer o empreendedorismo materno, temos um filtro específico para você que deseja comprar de mães empreendedoras.</BodyText>

                <BodyText>Em nossa comunidade, é possível participar de lives, palestras, interagir com outras mulheres, compartilhando aprendizados e desafios da jornada empreendedora.</BodyText>

                <BodyText>MUSA, conectando mulheres e negócios!</BodyText>
            </HomeDescriptionContainer>

            <span className='single-separator'/>

            <HomeCarrousselContainer>
                {professionals.map(item=>{

                    return (
                        <Link onClick={()=> userLoged ? null:alert("você precisa logar para vizualizar o perfil")} to={userLoged ? `/profile/${item.id}`: "#"}>
                        <CarrousselCard image={avatars ? avatars?.filter(img=> img.user_id == item.id)[0]?.name : ""}>
                            <div className='card-title'>
                                <BodyText className='card-title__text'>{item.name.split(" ").at().toUpperCase() + " "+ item.name.split(" ").at(-1).toUpperCase()}</BodyText>
                                <BodyText className='card-title__text'>{item.function}</BodyText>
                            </div>
                        </CarrousselCard>
                        </Link>
                    )
                })}
            </HomeCarrousselContainer>
        </HomeContainer>
    )
}

export default PageHome;