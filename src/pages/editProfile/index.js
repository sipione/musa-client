import { useContext, useEffect, useState } from "react";
import { BodyText, TitleH2 } from "../../common/foundation/typography";
import ButtonComponent from "../../components/button";
import { EditProfileContainer, EditProfileForm, FormPortfolio, PortfolioCards } from "./style";
import { useNavigate, useParams } from "react-router-dom";
import { storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { UserContext } from  "../../common/contexts/userContext";
import axios from "axios";
import { ImagesContext } from "../../common/contexts/imagesContext";
import LoadingComponent from "../../components/loading";
import { CategoryContext } from "../../common/contexts/categoryContext";
import logo from "../../assets/images/icon.png";

const EditProfilePage =  ()=>{
    const {id} = useParams();
    const[loading, setLoading]=useState(null);
    const[userToEdit, setUserToEdit]=useState(false);
    const[userImages, setUserImages]=useState(false);
    const { userLoged, getUserById } = useContext(UserContext);
    const { getImagesById } = useContext(ImagesContext);
    const { categories } = useContext(CategoryContext);
    const [portfolioArray, setPortfolioArray] = useState([
        {
            role: "portfolio01"
        },
        {
            role: "portfolio02"
        },
        {
            role: "portfolio03"
        },
        {
            role: "portfolio04"
        },
        {
            role: "portfolio05"
        },
        {
            role: "portfolio06"
        }
    ]);
    const [portfolioToEdit, setPortfolioToEdit] = useState({})
    const navigate = useNavigate()

    useEffect(()=>{
        window.scrollTo(0,0);

        if(userLoged.id && userLoged.id != id){
            alert("Você não pode editar o perfil de outra pessoa, se voltar a tentar será bloqueado!")
            return navigate("/")
        }

        if(userLoged.jwt){
            getUser()
        }
        
        if(!userImages){
            getUserImages()
        }
    }, [userLoged]);

    const getUserImages = async ()=>{
        const array = await getImagesById(id);
        setUserImages(array);
    }

    const getUser = async ()=>{
        const user = await getUserById(id, userLoged.jwt);
        setUserToEdit(user)
    }

    const uploadAvatar = async (e)=>{
        e.preventDefault();

        setLoading(true);
        
        const role = e.target.name === "avatar" ? "avatar" : e.target.name;
        
        const description = "";

        const imageRef = ref(storage, `${id}/${e.target.name}`);

        try{
            const resp = await uploadBytes(imageRef, e.target.files[0]);
            const url = await getDownloadURL(resp.ref);

            const data = {
                name: url,
                role: role,
                user_id: id,
                description: description
            }
            
            await axios.request({
                method: "post",
                url: `${process.env.REACT_APP_BASE_URL}/images`,
                data: data
            })

        }catch(err){
            alert(err);
        }
        setLoading(false);

        window.location.reload();
    }

    const previewPortfolio = (event)=>{
        const file = event.target.files[0];

        const fr = new FileReader();
        fr.onload = () => {
            console.log({
                src: fr.result,
                name: file.name,
                role: "portfolio",
                id: event.target.name
            })
        };
        fr.readAsDataURL(file);
    }

    const getAddress = async (zipcode)=>{
        const cleanedZipcode = zipcode.replace("-","")
        const options = {
            method: 'GET',
            headers:{
                "Content-Type":'application/json',
                "Access-Control-Allow-Origin": "*"
            }
        }
        const url = `https://viacep.com.br/ws/${cleanedZipcode}/json/`;

        const data = await fetch(url, options);

        return data.json();
    }

    const editProfile = async (event)=>{
        event.preventDefault();

        setLoading(true)

        try{
            await axios.request({
                method: "put",
                url: `${process.env.REACT_APP_BASE_URL}/users/${id}`,
                data: userToEdit
            })
            alert("Seu perfil foi atualizado com sucesso!");
            navigate(`/profile/${id}`)
        }catch(err){
            alert(err)
        }
        setLoading(false)
    }

    const uploadDescription = async event=>{
        event.preventDefault();
        const description = event.target.value;
        const role = event.target.name;

        

        try{
            setLoading(true);
            await Promise.all(Object.entries(portfolioToEdit).map(async porftfolio=>{
                const response = await axios({
                    method: "post",
                    url: `${process.env.REACT_APP_BASE_URL}/images/`,
                    data: {
                        role: porftfolio[0],
                        description: porftfolio[1].description,
                        price: porftfolio[1].price,
                        user_id: id
                    }
                })
                console.log(response.data);
            }))
            setLoading(false);
        }catch(err){
            alert(err)
        }
    }

    const deleteImage = async (event)=>{
        const imageId = userImages.filter(img=>img.role === event.target.attributes.imageRole.value)[0]?.id;
        const sure = window.confirm(`Realmente deseja deletar essa imagem? Ela não poderá ser recuperada`);
        if(sure){
            setLoading(true)
            try{
                await axios.request({
                    method: "delete",
                    url:`${process.env.REACT_APP_BASE_URL}/images/${imageId}`
                })
                window.location.reload();
            }catch(err){
                alert(err.message);
                console.log(err)
            }
            setLoading(false)
        }
    }

    if(!userToEdit || !userImages || loading) return <LoadingComponent/>

    if(!userToEdit) return <h1>Nada pra editar...</h1>

    return(
        <EditProfileContainer>
            <BodyText>Preencha o formulário para disponibilizar o seu serviço</BodyText>

            <EditProfileForm avatar={userImages.filter(img=>img.role === "avatar")[0]}>
                <form onSubmit={event => {event.preventDefault(); editProfile(event)}}>
                    <div className="fieldsetFirst">
                        <input
                            id="avatar"
                            type="file"
                            className="big"
                            name= "avatar"
                            accept="image/png, image/jpeg, image/webp"
                            onChange={event=>{uploadAvatar(event)}}
                        />
                        <label className="label--avatar" htmlFor="avatar">Clique aqui para escolher imagem de perfil</label>
                        <img
                            className="small"
                            src={userImages.filter(img=>img.role === "avatar")[0] ? userImages.filter(img=>img.role === "avatar")[0]?.name : require("../../assets/images/default_avatar.webp")}
                            alt="profile avatar"
                        />
                        <span 
                            imageRole="avatar"
                            className="delete"
                            onClick={deleteImage}
                        >
                        X</span>
                    </div>
                    
                    <div className="fieldset">
                        <input 
                            className="big"
                            defaultValue={userToEdit.name} 
                            type="text" 
                            placeholder="Nome completo"
                            name="name" 
                            required
                            onChange={event=>setUserToEdit({...userToEdit, name: event.target.value})}
                        />

                        <div className="medium">
                            <select
                                defaultValue={userToEdit.category}
                                onChange={event=>setUserToEdit({...userToEdit, category: event.target.value})}
                            >
                                <option value={null}>Escolha uma categoria</option>
                                {categories.map(category=>(
                                    <option 
                                    key={category.name}
                                    value={category.name}>
                                        {category.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="fieldset">
                        <input 
                            value={userToEdit.phone}
                            placeholder="Digite seu telefone com DDD"
                            className="small" 
                            required
                            maxLength="11"
                            onChange={event=>setUserToEdit({...userToEdit, phone: event.target.value.replaceAll(/[^0-9]/g, "")})}
                        />
                        <div 
                            className="input--checkbox small" 
                        >
                            <input 
                                defaultChecked={userToEdit.mother} 
                                type="checkbox"
                                onChange={event=>setUserToEdit({...userToEdit, mother: event.target.checked})}
                            />
                            <label> Sou mãe</label>
                        </div>
                        <input 
                            defaultValue={userToEdit.profession} type="text" 
                            placeholder="Que produto ou serviço você deseja ofertar?" 
                            className="medium"
                            required
                            onChange={event=>setUserToEdit({...userToEdit, profession: event.target.value})}
                        />
                    </div>

                    <div className="fieldset">
                        <input 
                            defaultValue={userToEdit.zipcode} type="text" 
                            placeholder="Digite o cep" 
                            className="big"
                            required
                            onChange={event=>{
                                setUserToEdit({...userToEdit, zipcode: event.target.value})

                                setTimeout(async ()=>{
                                    try{
                                        const address = await getAddress(event.target.value)
                                        setUserToEdit({...userToEdit, city: address.localidade, state: address.uf});
                                        event.target.classList.replace("wrong", "done") || event.target.classList.add("done");

                                    }catch(err){
                                        console.log(err)
                                        event.target.classList.replace("done", "wrong") || event.target.classList.add("wrong")
                                    }
                                }, 1000)
                            }}
                        />
                        
                        <input 
                            defaultValue={userToEdit.state} 
                            type="text" 
                            placeholder="Estado"
                            className="small"
                            readOnly
                        />
                        
                        <input 
                            defaultValue={userToEdit.city} type="text" 
                            placeholder="Cidade"
                            className="small"
                            readOnly
                        />
                    </div>

                    <textarea 
                        defaultValue={userToEdit.about} 
                        placeholder="Sobre mim"
                        onChange={event=>setUserToEdit({...userToEdit, about: event.target.value})}
                    />

                    <div className="fieldset">
                        <input 
                            defaultValue={userToEdit.site} 
                            type="text" 
                            className="medium"
                            placeholder="Site"
                            onChange={event=>setUserToEdit({...userToEdit, site: event.target.value})}
                        />

                        <input 
                            className="medium"
                            defaultValue={"@"+userToEdit.instagram} 
                            type="text" 
                            placeholder="Instagram"
                            onChange={event=>setUserToEdit({...userToEdit, instagram: event.target.value.replaceAll("@", "")})}
                        />
                    </div>

                    <ButtonComponent type="submit">ATUALIZAR PERFIL</ButtonComponent>
                </form>

                <form onSubmit={uploadDescription}>
                    <FormPortfolio>
                        <TitleH2 className="title">Faça upload de fotos dos seus melhores trabalhos: </TitleH2>
                        {portfolioArray.map(object=>{
                            return(
                                <PortfolioCards image={userImages.filter(img=>img.role === object.role)[0]}>
                                    <input 
                                        type="file" 
                                        name={object.role}
                                        accept="image/png, image/jpeg" 
                                        onChange={uploadAvatar}
                                    />

                                    <img 
                                        src={userImages.filter(img=>img.role === object.role)[0]?.name 
                                            ?userImages.filter(img=>img.role === object.role)[0]?.name
                                            : logo
                                        } 
                                        alt={userImages.filter(img=>img.role === object.role)[0]?.description}/>

                                    <span 
                                        imageRole={object.role}
                                        className="delete"
                                        onClick={deleteImage}
                                    >
                                    X</span>

                                    <div className="portfolio__details">

                                    <input 
                                        placeholder="Descrição" defaultValue={userImages.filter(img=>img.role === object.role)[0]?.description} 
                                        name={object.role}
                                        onChange={(event)=>{
                                            const obj = portfolioToEdit[object.role] || {};

                                            obj.description = event.target.value;

                                            setPortfolioToEdit({
                                                ...portfolioToEdit,
                                                [object.role]: obj
                                            })
                                        }} 
                                    />

                                    <input 
                                        placeholder="Preço" 
                                        type="number"
                                        defaultValue={userImages.filter(img=>img.role === object.role)[0]?.price} 
                                        name={object.role}
                                        onChange={(event)=>{
                                            const obj = portfolioToEdit[object.role] || {};

                                            obj.price = event.target.value;

                                            setPortfolioToEdit({
                                                ...portfolioToEdit,
                                                [object.role]: obj
                                            })
                                        }} 
                                    />
                                    </div>
                                </PortfolioCards>
                            )
                        })}
                    </FormPortfolio>
                </form>
            </EditProfileForm>
        </EditProfileContainer>
    )
}

export default EditProfilePage;