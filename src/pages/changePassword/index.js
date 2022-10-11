import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ButtonComponent from "../../components/button";
import LoadingComponent from "../../components/loading";
import { ChangePassContainer, ChangePassForm, ChangePassTitles } from "./style";


const ChangePasswordPage = ()=>{
    const { token } = useParams();
    const [ newPassword, setNewPassword] = useState();
    const [ loading, setLoading ] = useState();

    const changePassword = async (event)=>{
        setLoading(true)

        try{
            const response = await axios.request({
                method: "post",
                url: `${process.env.REACT_APP_BASE_URL}/changepass`,
                data: {
                    token,
                    newPassword: event.target.newPass.value
                }
            })

            alert("sucesso", response);
        }catch(err){
            alert(err.response.data)
            console.log(err)
        }
        setLoading(false)
    }

    if(loading) return <LoadingComponent/>;

    return (
        <ChangePassContainer>
            <ChangePassTitles>
                Insira sua nova senha, o token só tem validade depois de 60 minutos de solicitação
            </ChangePassTitles>

            <ChangePassForm>
                <form onSubmit={changePassword}>
                    <input onChange={event=>setNewPassword(event.target.value)} placeholder="Nova Senha" type="password"/>
                    <input 
                    placeholder="Repita a senha"
                        type="password"
                        onChange={event=>{
                        event.target.value == newPassword
                        ? event.target.setCustomValidity("")
                        : event.target.setCustomValidity("as senhas são diferentes")
                    }} name="newPass"/>
                    <ButtonComponent>Mudar Senha</ButtonComponent>
                </form>
            </ChangePassForm>
        </ChangePassContainer>
    )
}

export default ChangePasswordPage;