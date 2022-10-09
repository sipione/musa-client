import { useContext, useEffect, useState } from "react";
import { BodyText } from "../../common/foundation/typography";
import ButtonComponent from "../../components/button";
import { EditProfileContainer, EditProfileForm, FormPortfolio } from "./style";
import categories from "../../assets/json/categories.json";
import { useParams } from "react-router-dom";
import { storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { UserContext } from  "../../common/contexts/userContext";
import axios from "axios";
import { ImagesContext } from "../../common/contexts/imagesContext";
import { LoadingContainer } from "../../components/loading/style";
import LoadingComponent from "../../components/loading";

const EditProfilePage =  ()=>{
    const {id} = useParams();
    const[loading, setLoading]=useState(null);
    const[userToEdit, setUserToEdit]=useState(null);
    const[userImages, setUserImages]=useState(null);
    const { userLoged } = useContext(UserContext);
    const { allImages } = useContext(ImagesContext);
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
    ])
    
    useEffect(()=>{
        window.scrollTo(0,0);
        if(userLoged.jwt){
            getUserById()
        }
        
        if(allImages){
            getUserImages()
        }
    }, [userLoged, allImages]);

    const getUserImages = ()=>{
        const array = allImages.filter(img=>img.user_id == id);
        setUserImages(array);
    }

    const getUserById = async ()=>{
        setLoading(true)
        try{
            const user = await axios.request({
                method: "get",
                url: `${process.env.REACT_APP_BASE_URL}/users/${id}`,
                headers : {
                    "Authorization": userLoged.jwt
                }
            });

            setUserToEdit(user.data)
        }catch(err){
            alert(err)
        }
        setLoading(false)
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
        }catch(err){
            alert(err)
        }
        setLoading(false)
    }

    const uploadDescription = async event=>{
        const description = event.target.value;
        const role = event.target.name;

        try{
            const response = await axios({
                method: "put",
                url: `${process.env.REACT_APP_BASE_URL}/images/${id}`,
                data: {
                    role,
                    description
                }
            })
            alert(response.data);

        }catch(err){
            alert(err)
        }
    }

    if(loading) return <LoadingComponent/>

    if(!userToEdit) return <h1>Nada pra editar...</h1>

    return(
        <EditProfileContainer>
            <BodyText>Preencha o formulário para disponibilizar o seu serviço</BodyText>

            <EditProfileForm>
                <form onSubmit={event => {event.preventDefault(); editProfile(event)}}>
                    <div className="fieldset">
                        <input
                            type="file"
                            style={{width: "75%"}}
                            name= "avatar"
                            onChange={event=>{uploadAvatar(event)}}
                        />
                        <img
                            style={{width:"25%"}} 
                            src={userImages.filter(img=>img.role === "avatar")[0]?.name || ""}
                            alt="profile avatar"
                        />
                    </div>
                    <div className="fieldset">
                        <input 
                            style={{width: "70%"}} 
                            defaultValue={userToEdit.name} 
                            type="text" 
                            placeholder="Nome completo"
                            name="name" 
                            required
                            onChange={event=>setUserToEdit({...userToEdit, name: event.target.value})}
                        />

                        <div style={{width: "30%"}}>
                            <select
                                defaultValue={userToEdit.category}
                                onChange={event=>setUserToEdit({...userToEdit, category: event.target.value})}
                                
                            >
                                <option value={null}>escolha uma categoria</option>
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
                            defaultValue={userToEdit.phone} type="phone" 
                            placeholder="Digite seu telefone com DDD"
                            style={{width: "35%"}} 
                            required
                            onChange={event=>setUserToEdit({...userToEdit, phone: event.target.value})}
                        />
                        <div className="input--checkbox" style={{width: "15%"}}>
                            <input 
                                defaultChecked={userToEdit.mother} 
                                type="checkbox"
                                onChange={event=>setUserToEdit({...userToEdit, mother: event.target.checked})}
                            />
                            <label> Sou mãe</label>
                        </div>
                        <input 
                            defaultValue={userToEdit.profession} type="text" 
                            placeholder="Profissão" 
                            style={{width: "45%"}}
                            required
                            onChange={event=>setUserToEdit({...userToEdit, profession: event.target.value})}
                        />
                    </div>

                    <div className="fieldset">
                        <input 
                            defaultValue={userToEdit.zipcode} type="text" 
                            placeholder="Digite o cep" 
                            style={{width: "35%"}}
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
                            style={{width: "15%"}} 
                            readOnly
                        />
                        
                        <input 
                            defaultValue={userToEdit.city} type="text" 
                            placeholder="Cidade"
                            style={{width: "45%"}} 
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
                            style={{width: "60%"}}
                            placeholder="Site"
                            onChange={event=>setUserToEdit({...userToEdit, site: event.target.value})}
                        />

                        <input 
                            style={{width: "40%"}}
                            defaultValue={userToEdit.instagram} 
                            type="text" 
                            placeholder="Instagram"
                            onChange={event=>setUserToEdit({...userToEdit, instagram: event.target.value})}
                        />
                    </div>

                    <BodyText>Faça upload de fotos dos seus melhores trabalhos: </BodyText>

                    <FormPortfolio>
                        {portfolioArray.map(object=>{
                            return(
                                <div className="portfolio__cards">
                                    <input 
                                        type="file" 
                                        name={object.role} 
                                        accept="image/png, image/jpeg" 
                                        onChange={uploadAvatar}
                                    />

                                    <img src={userImages.filter(img=>img.role === object.role)[0]?.name} alt={userImages.filter(img=>img.role === object.role)[0]?.description}/>

                                    <input placeholder="descrição" defaultValue={userImages.filter(img=>img.role === object.role)[0]?.description} 
                                    onBlur={event=>{
                                        if(event.target.value.length > 1){
                                            uploadDescription(event)
                                        }
                                    }} 
                                    name={object.role}/>
                                </div>
                            )
                        })}
                    </FormPortfolio>


                    <ButtonComponent type="submit">ATUALIZAR PERFIL</ButtonComponent>
                </form>
            </EditProfileForm>
        </EditProfileContainer>
    )
}

export default EditProfilePage;