import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ButtonComponent from "../../components/button";


const ChangePasswordPage = ()=>{
    const { token } = useParams();
    const [ newPassword, setNewPassword] = useState();

    const changePassword = async (event)=>{

        try{
            const response = await axios.request({
                method: "post",
                url: `http://localhost:8080/api/changepass`,
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

    }

    return (
        <section>
            <form onSubmit={changePassword}>
                <input onChange={event=>setNewPassword(event.target.value)} type=""/>
                <input onChange={event=>{
                    event.target.value == newPassword
                    ? event.target.setCustomValidity("")
                    : event.target.setCustomValidity("as senhas são diferentes")
                }} name="newPass"/>
                <ButtonComponent>Mudar Senha</ButtonComponent>
            </form>
        </section>
    )
}

export default ChangePasswordPage;