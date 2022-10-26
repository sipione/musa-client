import { useEffect, useState } from "react"
import { BodyText, TitleH2 } from "../../common/foundation/typography";
import LoadingComponent from "../loading";
import { PoupupImageContainer } from "./style"


const PoupupImageComponent = (props)=>{
    const {active, mainImage, arrayOfImages} = props.poupupProps;
    const {setPoupupProps} = props.setPoupupProps;
    const [loading, setLoading] =useState(false);
    const [open, setOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(mainImage);
    console.log(props)

    useEffect(()=>{
        setOpen(active)
        setCurrentImage(mainImage)
    },[props])
    
    const changeImage = (event)=>{
        event.preventDefault();
        const next = event.target.className.includes("next");
        const index = arrayOfImages.map(item=>item.name).indexOf(currentImage.name)
    
        if(next && index == arrayOfImages.length-1) return setCurrentImage(arrayOfImages[0])

        if(!next && index == 0) return setCurrentImage(arrayOfImages[arrayOfImages.length-1])

        console.log("passou de todos os ifs", arrayOfImages.length-1, index)
        next ? setCurrentImage(arrayOfImages[index+1]):setCurrentImage(arrayOfImages[index-1])
    }

    if(loading) return <LoadingComponent/>

    return(
        <PoupupImageContainer active={open}>
            <TitleH2 className="exit" onClick={()=>props.setPoupupProps({
                ...props.poupupProps,
                active: false
            })}>X</TitleH2>
            <TitleH2 className="back" onClick={changeImage}>{"<<"}</TitleH2>
            <div className="poupup__content">
                <img className="image" src={currentImage.name}/>
                <BodyText>{currentImage.description}</BodyText>
                <BodyText>{currentImage.price}</BodyText>
            </div>
            <TitleH2 className="next" onClick={changeImage}>{">>"}</TitleH2>
        </PoupupImageContainer>
    )
}

export default PoupupImageComponent