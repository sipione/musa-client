import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../common/contexts/userContext";
import { BodyText } from "../../common/foundation/typography";
import { secondaryColorHex } from "../../common/foundation/variables";
import ButtonComponent from "../../components/button";
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


    const login = async ()=>{

        const data = {
            email: inputs.identifier,
            password: inputs.password
        };

        try{
            const response = await axios.request({
                url: 'https://musa-mktplace.herokuapp.com/login',
                method: 'POST',
                data: data
            });
            return response
        }catch(err){
            throw new Error(err.message);
        }
    }

    const makelogin = async ()=>{
        setLoading(true);
        try{
            const response = await login()
            window.sessionStorage.setItem("accessToken", response.data.jwt);
            window.sessionStorage.setItem("logedData", JSON.stringify(response.data));

            setUserLoged({
                id: response.data.id,
                name: response.data.name,
                jwt: response.data.jwt
            })

            navigate(`/`)

        }catch(err){
            alert(err.message);
        }
        setLoading(false);
    }

    if(loading) return <h1>Logando...</h1>

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

            <LoginTitles>
                <BodyText>Ou faça o seu <Link to="/register" style={{color: secondaryColorHex, fontWeight: 700}}>Registro</Link></BodyText>

                <Link to="#">Esqueci minha senha</Link>
            </LoginTitles>
        </LoginContainer>
    )
}

export default PageLogin;