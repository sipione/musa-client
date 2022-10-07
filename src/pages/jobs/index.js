import { useContext, useEffect, useState } from "react";
import { ContentText, JobsCategoryIndicator, JobsContainer, JobsFilterBox, JobsOffersBox, OfferBoxContent } from "./style"
import usersJson from "../../assets/json/users.json";
import { BodyText, TitleH3 } from "../../common/foundation/typography";
import ButtonComponent from "../../components/button";
import categoriesJson from "../../assets/json/categories.json";
import { CategoryContext } from "../../common/contexts/categoryContext";
import { UserContext } from "../../common/contexts/userContext";
import { ImagesContext } from "../../common/contexts/imagesContext";
import { Link } from "react-router-dom";

const PageJobs = ()=> {
    const [users, setUsers] = useState(usersJson);
    const [hidden, setHidden] = useState(true);
    const {categories, categorySelected, setCategorySelected} = useContext(CategoryContext);
    const {userLoged, professionals} = useContext(UserContext);
    const {allImages} = useContext(ImagesContext);
    const [filteredItems, setFilteredItems] = useState(null)
    
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });

        categorySelected 
        ? setFilteredItems([...professionals.filter(user=>user.category == categorySelected.name)])  
        : setFilteredItems([...professionals]);

    }, [categorySelected, professionals])

    if(!filteredItems || !allImages) return <h1>Loading...</h1>

    return(
        <JobsContainer>
            <JobsCategoryIndicator selection={categorySelected}>
                <BodyText>Categoria selecionada: {categorySelected.label} 
                <span onClick={()=>setCategorySelected(false)}> x </span>
                </BodyText>
            </JobsCategoryIndicator>

            <JobsFilterBox categories={categories.length} hidden={hidden}>
                <BodyText className="filter__item filter__item--title">Buscar por categorias: </BodyText>

                <span onClick={()=>setHidden(!hidden)} className="arrow"/>

                {categories.map(category=>{

                    return(
                        <div onClick={()=>setCategorySelected(category)} key={category.name}>
                            <BodyText className="filter__item filter__item--desc">
                                {category.label.toUpperCase()}
                            </BodyText>
                        </div>
                    )
                })}
            </JobsFilterBox>

            <JobsOffersBox>
                {filteredItems.map(user=>{
                    var userAvatar = "";
                    allImages.map(img=>img.user_id == user.id && img.role == "avatar" ? userAvatar = img.name : null)
                    
                    return (
                        <Link to={userLoged ? `/profile/${user.id}` : "#"} onClick={event=> userLoged ? null : alert("você precisa estar logado para acessar os perfís")} >
                            <OfferBoxContent key={user.id} src={userAvatar}>
                            <div className="img"/>

                            <ContentText>
                                <TitleH3 className="content-text__title">Está procurando uma profissional de {categories.filter(item=> item.name === user.category)[0]?.label}?</TitleH3>
                                
                                <BodyText className="content__desc">{user.about.substring(0, 125)}...</BodyText>

                                <div className="content__button">
                                    <ButtonComponent small={true}>ENVIE MENSAGEM PARA {user.name.split(" ")[0].toUpperCase()}</ButtonComponent>
                                </div>
                            </ContentText>
                        </OfferBoxContent></Link>
                    )
                })}
            </JobsOffersBox>
        </JobsContainer>
    )
}

export default PageJobs;