import { useContext, useEffect, useState } from "react";
import { ContentText, JobsCategoryIndicator, JobsContainer, JobsFilterBox, JobsOffersBox, OfferBoxContent } from "./style"
import { BodyText, TitleH3 } from "../../common/foundation/typography";
import ButtonComponent from "../../components/button";
import { CategoryContext } from "../../common/contexts/categoryContext";
import { UserContext } from "../../common/contexts/userContext";
import { ImagesContext } from "../../common/contexts/imagesContext";
import { Link } from "react-router-dom";
import LoadingComponent from "../../components/loading";

const PageJobs = ()=> {
    const [hidden, setHidden] = useState(true);
    const {categories, categorySelected, setCategorySelected} = useContext(CategoryContext);
    const {userContextLoading, userLoged, getUsers, professionals, locations, states} = useContext(UserContext);
    const { avatars} = useContext(ImagesContext);
    const [page, setPage] = useState(0);
    const [customProfessionals, setCustomProfessionals] = useState(null)
    const [filters, setFilters] = useState({
        category: categorySelected,
        mother: false,
        state: false,
        city: false
    })

    useEffect(()=>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });

        setCustomProfessionals(professionals)
    }, [professionals, avatars]);

    useEffect(()=>{
        handleCustomProfessionals()

    }, [page, filters, categorySelected])

    const handleCustomProfessionals = async ()=>{
        try{
            const result = await getUsers(page, filters);
            setCustomProfessionals(result);
        }catch(err){
            console.log(err)
        }
    }

    if(!customProfessionals || userContextLoading || !avatars) return <LoadingComponent/>

    return(
        <JobsContainer>
            <JobsCategoryIndicator selection={categorySelected}>
                <BodyText>Categoria selecionada: {categorySelected.label || categorySelected} 
                <span onClick={()=>{
                    setCategorySelected(false)
                    setFilters({
                        ...filters,
                        category: null
                    })
                    }}> x </span>
                </BodyText>
            </JobsCategoryIndicator>

            <JobsFilterBox categories={categories.length} hidden={hidden}>
                <BodyText className="filter__item filter__item--title">Buscar: </BodyText>
                <span onClick={()=>setHidden(!hidden)} className="arrow"/>

                <div className="filters01">
                    <div className="filters01__filter--mother">
                        <label htmlFor="mother">
                            <BodyText>Mãe</BodyText>
                        </label>
                        <input onChange={event => {
                            setFilters({
                                ...filters,
                                mother: event.target.checked
                            })
                        }} 
                        id="mother" 
                        type="checkbox"
                        />
                    </div>

                    <div className="filters01__filter--location">
                        <select 
                            id="state" 
                            onChange={event=>{
                            if(!event.target.value){
                                return setFilters({
                                    ...filters,
                                    state: null,
                                    city: null
                                })
                            }
                            setFilters({
                                ...filters,
                                state: event.target.value
                            })
                        }}>
                            <option value="">Estado</option>
                            {states?.map(state=>{
                                return(
                                    <option value={state}>
                                        {state}
                                    </option>
                                )
                            })}
                        </select>

                        <BodyText>/</BodyText>
                        
                        <select
                            onChange={event=>{
                                setFilters({
                                ...filters,
                                city: event.target.value
                                });
                            }}
                        >
                            <option value="">Cidade</option>
                            {
                                filters.state
                                ? locations.map(location=>{
                                    if(location.state == filters.state){
                                        return(
                                        <option value={location.city}>
                                            {location.city}
                                        </option>
                                        )
                                    }
                                    })
                                : null
                            }
                        </select>
                    </div>
                </div>

                {categories.map(category=>{

                    return(
                        <div 
                            onClick={()=>{
                                setCategorySelected(category)
                                setFilters({
                                    ...filters,
                                    category: category.name
                                })
                            }}
                            key={category.name}
                        >
                            <BodyText className="filter__item filter__item--desc">
                                {category.label.toUpperCase()}
                            </BodyText>
                        </div>
                    )
                })}
            </JobsFilterBox>

            <JobsOffersBox>
                {customProfessionals.map(user=>{
                    var userAvatar = "";
                    avatars.map(img=>img.user_id == user.id && img.role == "avatar" ? userAvatar = img.name : null)
                    
                    return (
                        <Link to={userLoged ? `/profile/${user.id}` : "#"} onClick={event=> userLoged ? null : alert("você precisa estar logado para acessar os perfís")} >
                        <OfferBoxContent key={user.id} src={userAvatar}>
                            <div className="img"/>

                            <ContentText>
                                <TitleH3 className="content-text__title">Está procurando uma profissional de {categories.filter(item=> item.name === user.category)[0]?.label}?</TitleH3>
                                
                                <BodyText className="content__desc">{user.about.substring(0, 90)}...</BodyText>

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