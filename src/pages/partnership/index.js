import { BodyText } from "../../common/foundation/typography";
import ButtonComponent from "../../components/button";
import { PartnershipContainer, PartnershipForm, PartnershipTitles } from "./style"


const PartnershipPage = ()=>{
    window.scrollTo(0,0);


    return(
        <PartnershipContainer>
            <PartnershipTitles>
                <BodyText>
                    Quer fazer uma parceria conosco?
                </BodyText>

                <BodyText>
                    Então preencha o formulário abaixo que entraremos em contato.
                </BodyText>
            </PartnershipTitles>

            <PartnershipForm>
                <form>
                    <input type="text" placeholder="Nome completo" required/>
                    <input type="email" placeholder="E-mail" required/>
                    <input type="phone" placeholder="Telefone com DDD" required/>
                    <ButtonComponent>ENVIAR</ButtonComponent>
                </form>
            </PartnershipForm>
        </PartnershipContainer>
    )
}

export default PartnershipPage;