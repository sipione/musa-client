import { BodyText, TitleH3 } from "../../common/foundation/typography";
import { ButtonContainer } from "./style"


const ButtonComponent = ({children, small, type})=>{

    return (
        <ButtonContainer type={type} small={small}>
            {small
            ? <BodyText className="button__title">{children}</BodyText> 
            :<TitleH3 className="button__title">{children}</TitleH3>}
        </ButtonContainer>
    )
}

export default ButtonComponent;