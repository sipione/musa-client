import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PageLogin from "../login";
import { ImagesBoxCard, ProfileContainer, ProfileDataBox, ProfileImagesBox } from "./style";
import axios from "axios";
import users from "../../assets/json/users.json";
import { BodyText, TitleH2, TitleH3 } from "../../common/foundation/typography";
import ButtonComponent from "../../components/button";
import { ReactComponent as Instagram } from "../../assets/images/instagram.svg";
import { ReactComponent as Edit } from "../../assets/images/edit.svg";
import { UserContext } from "../../common/contexts/userContext";
import { ImagesContext } from "../../common/contexts/imagesContext";
import LoadingComponent from "../../components/loading";

const PageProfile = ()=> {
    const {id} = useParams();
    const [data, setData] = useState(false);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    const { professionals, userLoged } = useContext(UserContext);
    const { allImages } = useContext(ImagesContext);
    const [ owner, setOwner] = useState( false );

    const getData = async ()=>{
        var professional = {...professionals.filter(person=>person.id == id)[0]};
        professional.images = allImages?.filter(img=>img.user_id === id);
        setData(professional);
    }
    

    useEffect(()=>{
        window.scrollTo(0,0);
        getData();
        setOwner(userLoged.id == id);
    }, [professionals, allImages, id])

    if(loading) return <LoadingComponent/>
    if(error) return <h1>{error}</h1>
    if(!data) return <h1>Nada por hora</h1>
    if(data.category == null) return <ProfileContainer> <Link className="unloged-link" to={`/profile/edit/${id}`}><BodyText> {">>"} Olá {userLoged.name}, edite seu perfil para poder anunciar</BodyText></Link></ProfileContainer>

    return(
        <ProfileContainer>
            <ProfileDataBox owner={owner} img={data.images.filter(img=>img.role==="avatar")[0]?.name || null}>
                <div className="profile__pic"/>
                <div className="profile__data">
                    <TitleH3 className="data__title data__title--name">
                        {data.name.toUpperCase()}  
                        <Link to={`/profile/edit/${id}`} className="title--name__link"><Edit/></Link> 
                    </TitleH3>

                    <TitleH3 className="data__title">{data.site || null}</TitleH3>
                    
                    <div className="data__instagram">
                        <Instagram/>
                        <a href={`https://www.instagram.com/${data.instagram}/`}><TitleH3 className="data__title">@{data.instagram  || null}</TitleH3></a>
                    </div>
                    
                    <TitleH3 className="data__title data__title--about">{data.about  || null}</TitleH3>
                    
                    <TitleH3 className="data__title data__title--func">{data.function?.toLocaleUpperCase()  || null}</TitleH3>
                    
                    <TitleH3 className="data__title data__title--last">{data.mother ? "mãe" : null}</TitleH3>

                    <ButtonComponent>ENTAR EM CONTATO</ButtonComponent>
                </div>
            </ProfileDataBox>

            <TitleH2 className="title-images">Veja alguns dos meus trabalhos: </TitleH2>
            
            <ProfileImagesBox>
                {
                    data.images.filter(img=>img.role!=="avatar").map(image=>{

                        return(
                            <ImagesBoxCard profileImage={image.name}>
                                <div className="card__picture"/>
                                <BodyText className="card__desc">{image.description}</BodyText>
                            </ImagesBoxCard>
                        )
                    })
                }
            </ProfileImagesBox>
        </ProfileContainer>
    )

}

export default PageProfile;