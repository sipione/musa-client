import { useContext, useEffect, useState } from "react";
import { ContainerInputRadioBox, RegisterContainer, RegisterForm, RegisterTitles } from "./style";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BodyText } from "../../common/foundation/typography";
import ButtonComponent from "../../components/button";
import { secondaryColorHex } from "../../common/foundation/variables";
import { UserContext } from "../../common/contexts/userContext";
import LoadingComponent from "../../components/loading";

const PageRegister = ()=> {
    const [inputs, setInputs] = useState({});
    const [emailPreview, setemailPreview] = useState(null);
    const [passPreview, setpassPreview] = useState(null);
    const navigate = useNavigate()
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    const { setUserLoged } = useContext(UserContext);
console.log(inputs);
    useEffect(()=>{
        window.scrollTo(0,0);

    }, [])
    
    const makeRegister = async (event)=>{
        event.preventDefault();
        setLoading(true)

        try{
            const response = await axios.request({
                method: "post",
                url: `${process.env.REACT_APP_BASE_URL}/register`, 
                data: inputs,
                headers: {}
            });
            console.log(response.data)
            
            window.sessionStorage.setItem("accessToken", response.data.jwt);
            
            window.sessionStorage.setItem("logedData", JSON.stringify(response.data));
            setUserLoged({
                id: response.data.id,
                name: response.data.name,
                jwt: response.data.jwt
            })
            event.target.role.value == "buyer" ? navigate(`/`) : navigate(`/profile/edit/${response.data.id}`)

        }catch(err){
            console.log(err)
            setError(err.response.data.message);
        }
        setLoading(false)
    }
    
    if(loading){
        return <LoadingComponent/>
    }

    if(error){
        return <h1>{error}</h1>
    }

    return(
        <RegisterContainer>
            <RegisterTitles>
                <BodyText>
                    Faça o seu Registro
                </BodyText>
            </RegisterTitles>

            <RegisterForm>
                <form onSubmit={makeRegister}>
                    <input 
                        type="text" 
                        placeholder="Nome" 
                        required
                        onChange={(event)=>setInputs({...inputs, name: event.target.value})}
                    />
                    
                    <input 
                        type="email" 
                        placeholder="Email" 
                        required
                        onChange={(event)=>setemailPreview(event.target.value)}
                    />
                    
                    <input 
                        type="email" 
                        placeholder="Confirme o seu email"
                        onChange={(event)=>{
                            if(event.target.value == emailPreview){
                                setInputs({...inputs, email: event.target.value})
                                event.target.classList.replace("wrong", "done");
                                event.target.setCustomValidity("")
                            }else{
                                event.target.classList.replace("done", "wrong") || event.target.classList.add("wrong");
                                event.target.setCustomValidity("O email não corresponde ao digitado no campo anterior. Favor verificar.")
                            }
                        }}
                        required
                    />
                    
                    <input 
                        type="password" 
                        placeholder="Escolha a sua senha"
                        onChange={(event)=>setpassPreview(event.target.value)} 
                        required
                    />
                    
                    <input 
                        type="password" 
                        placeholder="Confirme a sua senha" 
                        required
                        onChange={(event)=>{
                            if(event.target.value == passPreview){
                                setInputs({...inputs, password: event.target.value})
                                event.target.classList.replace("wrong", "done");
                                event.target.setCustomValidity("")
                            }else{
                                event.target.classList.replace("done", "wrong") || event.target.classList.add("wrong");
                                event.target.setCustomValidity("A senha não corresponde ao digitado no campo anterior. Favor verificar.")
                            }
                        }}
                    />
                    
                    <input 
                        type="phone" 
                        placeholder="Digite seu telefone com DDD" 
                        required
                        onChange={(event)=>setInputs({...inputs, phone: event.target.value.replaceAll(/[^0-9]/g, "")})}
                    />

                    <ContainerInputRadioBox>
                        <div>
                            <input defaultChecked id="saller" type="radio" value="saller" name="role"/>
                            <span>X</span>
                            <label htmlFor="saller">SOU PRESTADORA DE SERVIÇO</label>
                        </div>

                        <div>
                            <input id="buyer" type="radio" value="buyer" name="role"/>
                            <span>X</span>
                            <label htmlFor="buyer">QUERO CONTRATAR SERVIÇO</label>
                        </div>
                    </ContainerInputRadioBox>
                    <ButtonComponent>FAZER REGISTRO</ButtonComponent>
                </form>
            </RegisterForm>

            <RegisterTitles>
                <BodyText>Ou faça o seu <Link to="/login" style={{color: secondaryColorHex, fontWeight: 700}}>Login</Link></BodyText>
            </RegisterTitles>
        </RegisterContainer>
    )
}

export default PageRegister;