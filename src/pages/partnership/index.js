import axios from "axios";
import { useEffect, useState } from "react";
import { BodyText } from "../../common/foundation/typography";
import ButtonComponent from "../../components/button";
import LoadingComponent from "../../components/loading";
import { PartnershipContainer, PartnershipForm, PartnershipTitles } from "./style"


const PartnershipPage = ()=>{
    const [inputs, setInputs] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        window.scrollTo(0,0);
    }, [])

    const sendMail = async (event)=>{
        event.preventDefault();
        
        setLoading(true)

        try{
            await axios.request({
                method: "post",
                url: `${process.env.REACT_APP_BASE_URL}/partnership`,
                data: inputs
            })

            alert("email enviado! Você também tem um, confira a caixa de entrada e o spam.")
        }catch(err){
            console.log(err)
        }
        setLoading(false)
    }

    if(loading) return <LoadingComponent/>

    return(
        <PartnershipContainer>
            <PartnershipTitles>
                <BodyText>
                    Quer fazer uma parceria conosco?
                </BodyText>

                <BodyText>
                    Então, preencha o formulário abaixo que entraremos em contato.
                </BodyText>
            </PartnershipTitles>

            <PartnershipForm>
                <form onSubmit={sendMail}>
                    <input 
                        type="text" 
                        placeholder="Nome completo"
                        onChange={event=>setInputs({
                            ...inputs,
                            name: event.target.value
                        })}
                        required
                    />

                    <input 
                        type="email" 
                        placeholder="E-mail"
                        onChange={event=>setInputs({
                            ...inputs,
                            email: event.target.value
                        })}
                        required
                    />

                    <input 
                        type="phone" 
                        placeholder="Telefone com DDD"
                        onChange={event=>setInputs({
                            ...inputs,
                            phone: event.target.value
                        })}
                        required
                    />
                    <ButtonComponent>ENVIAR</ButtonComponent>
                </form>
            </PartnershipForm>
        </PartnershipContainer>
    )
}

export default PartnershipPage;