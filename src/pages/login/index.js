import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../common/contexts/userContext";
import { BodyText } from "../../common/foundation/typography";
import { secondaryColorHex } from "../../common/foundation/variables";
import ButtonComponent from "../../components/button";
import LoadingComponent from "../../components/loading";
import { BoxInputLabelDiv, LoginContainer, LoginForm, LoginInputsBox, LoginTitles } from "./style";

const PageLogin = ()=> {
    window.scrollTo(0,0);
    const { setUserLoged } = useContext(UserContext);
    const [inputs, setInputs] = useState({
        identifier: "",
        password: ""
    });
    const navigate = useNavigate()
    const [loading, setLoading]= useState(false);
    const [forgot, setForgot] = useState(false)


    const login = async ()=>{

        const data = {
            email: inputs.identifier,
            password: inputs.password
        };

        try{
            const response = await axios.request({
                url: `${process.env.REACT_APP_BASE_URL}/login`,
                method: 'POST',
                data: data
            });
            return response
        }catch(err){
            console.log(err);
            alert("Login ou senha incorreto");
        }
    }

    const makelogin = async ()=>{
        setLoading(true);
        try{
            const response = await login();

            if(response){
                window.sessionStorage.setItem("accessToken", response.data.jwt);
                window.sessionStorage.setItem("logedData", JSON.stringify(response.data));
                
                setUserLoged({
                    id: response.data.id,
                    name: response.data.name,
                    jwt: response.data.jwt
                })
                navigate(`/`)
            }

        }catch(err){
            alert(err);
            console.log(err);
        }
        setLoading(false);
    }

    const sendEmail = async (event)=>{
        setLoading(true)

        try{
            await axios.request({
                method: "post",
                url: `${process.env.REACT_APP_BASE_URL}/forgotpass`,
                data: {email: event.target.dory.value}
            })

            alert("Email enviado com sucesso. Confira sua caixa de entrada e a pasta de spam");

        }catch(err){
            alert(err.response.data);
        }

        setLoading(false)
    }

    if(loading) return <LoadingComponent/>

    return(
        <LoginContainer>
            <LoginTitles>
                <BodyText>
                    Faça os eu Login
                </BodyText>
            </LoginTitles>

            <LoginForm>
                <form onSubmit={makelogin}>
                    <input 
                        type="text" 
                        placeholder="Usuário" 
                        required
                        onChange={event=>setInputs({...inputs, identifier: event.target.value})}
                    />
                    
                    <input 
                        type="password" 
                        placeholder="Senha" 
                        required
                        onChange={event=>setInputs({...inputs, password: event.target.value})}
                    />
                    
                    <ButtonComponent>FAZER LOGIN</ButtonComponent>
                </form>
            </LoginForm>

            <LoginTitles forgot={forgot} >
                <BodyText>Ou faça o seu <Link to="/register" style={{color: secondaryColorHex, fontWeight: 700}}>Registro</Link></BodyText>

                <BodyText className="forgot--text" onClick={()=>setForgot(!forgot)} >Esqueci minha senha</BodyText>
                <form className="forgot--form" onSubmit={sendEmail} >
                    <input name="dory" placeholder="Digite o seu email" type="email"/>
                    <ButtonComponent>Enviar email</ButtonComponent>
                </form>
            </LoginTitles>
        </LoginContainer>
    )
}

export default PageLogin;