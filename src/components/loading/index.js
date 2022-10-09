import icon from "../../assets/images/icon.png";
import { LoadingContainer } from "./style";

const LoadingComponent = () => {

    return(
        <LoadingContainer>
            <img className="icon" src={icon}/>
        </LoadingContainer>
    )
}

export default LoadingComponent;