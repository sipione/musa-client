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
import PoupupImageComponent from "../../components/poup-upImages";
import { lightColorHex, secondaryColorHex } from "../../common/foundation/variables";

const PageProfile = ()=> {
    const {id} = useParams();
    const [data, setData] = useState(false);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    const { professionals, userLoged, getUserById } = useContext(UserContext);
    const { getImagesById } = useContext(ImagesContext);
    const [ owner, setOwner] = useState( false );
    const [poupupProps, setPoupupProps] = useState({
        active: false,
        mainImage: "",
        arrayOfImages: []
    });
    const [allImages, setAllImages] = useState(false)

    const getData = async ()=>{
        var professional = await getUserById(id, userLoged.jwt);
        setData(professional);
    }

    const getImages = async id => {
        const imgs = await getImagesById(id);
        setAllImages(imgs);
    }
    

    useEffect(()=>{
        window.scrollTo(0,0);
        if(userLoged){
            getData();
            setOwner(userLoged.id == id);
            getImages(id)
        }
    }, [userLoged, id])

    if(loading || !allImages) return <LoadingComponent/>
    if(error) return <h1>{error}</h1>
    if(!data) return <h1>Nada por hora</h1>
    if(data.category == null) return <ProfileContainer> <Link className="unloged-link" to={`/profile/edit/${id}`}><BodyText> {">>"} Olá {userLoged.name}, edite seu perfil para poder anunciar</BodyText></Link></ProfileContainer>

    return(
        <ProfileContainer>
            <PoupupImageComponent poupupProps={poupupProps} setPoupupProps={setPoupupProps}/>
            <ProfileDataBox owner={owner} img={allImages.filter(img=>img.role==="avatar")[0]?.name || null}>
                <div className="profile__pic"/>
                <div className="profile__data">
                    <TitleH3 className="data__title data__title--name">
                        {data.name.toUpperCase()}  
                        <Link to={owner ? `/profile/edit/${id}` : "#"} className="title--name__link"><Edit/> <BodyText>Editar perfil</BodyText></Link> 
                    </TitleH3>

                    <div className="data__web">
                        <a href={`https://${data.site}`} target="__blank"><TitleH3 className="data__title data__title--site">{data.site || null}</TitleH3></a>
                        
                        <div className="data__instagram">
                            <Instagram/>
                            <a href={`https://www.instagram.com/${data.instagram}/`} target="__blank"><TitleH3 className="data__title">@{data.instagram  || null}</TitleH3></a>
                        </div>
                    </div>

                    
                    <TitleH3 className="data__title data__title--about">{data.about  || null}</TitleH3>
                    
                    <TitleH3 className="data__title data__title--func">{data.function?.toLocaleUpperCase()  || null}</TitleH3>
                    
                    {data.mother 
                    ? <TitleH3 className="data__title data__title--last"> <span style={{background: secondaryColorHex, color: lightColorHex, padding:"0.5% 1.5%", borderRadius: "5px", marginRight: "1vw"}}>X</span>Mãe</TitleH3> 
                    : null}

                    <a className="data__wpp" href={`https://wa.me/55${data.phone}`} target="__blank"><ButtonComponent>ENTRAR EM CONTATO</ButtonComponent></a>
                </div>
            </ProfileDataBox>

            <TitleH2 className="title-images">Veja alguns dos meus trabalhos: </TitleH2>
            
            <ProfileImagesBox>
                {
                    allImages.filter(img=>img.role!=="avatar").map(image=>{
                        return(
                            <ImagesBoxCard 
                                profileImage={image.name}
                                onClick={()=>setPoupupProps({
                                    active: true,
                                    mainImage: image,
                                    arrayOfImages: [...allImages.filter(img=>img.role!=="avatar")]
                                })}
                            >
                                <div className="card__picture"/>
                                <BodyText className="card__desc">{image.description}</BodyText>
                                <BodyText className="card__desc">{image.price ? `R$ ${image.price},00` : ""}</BodyText>
                            </ImagesBoxCard>
                        )
                    })
                }
            </ProfileImagesBox>
        </ProfileContainer>
    )

}

export default PageProfile;