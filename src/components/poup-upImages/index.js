import { useEffect, useState } from "react"
import { BodyText, TitleH2 } from "../../common/foundation/typography";
import { PoupupImageContainer } from "./style"


const PoupupImageComponent = (props)=>{
    const {active, mainImage, arrayOfImages} = props.props
    const [open, setOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(mainImage);

    useEffect(()=>{
        setOpen(active)
        setCurrentImage(mainImage)
    },[props])
    
    const changeImage = (event)=>{
        event.preventDefault();
        const next = event.target.className.includes("next");
        const index = arrayOfImages.map(item=>item.name).indexOf(currentImage)
    
        if(next && index == arrayOfImages.length-1) return setCurrentImage(arrayOfImages[0].name)

        if(!next && index == 0) return setCurrentImage(arrayOfImages[arrayOfImages.length-1].name)

        console.log("passou de todos os ifs", arrayOfImages.length-1, index)
        next ? setCurrentImage(arrayOfImages[index+1].name):setCurrentImage(arrayOfImages[index-1].name)
    }

    return(
        <PoupupImageContainer active={open}>
            <TitleH2 className="exit" onClick={()=>setOpen(!open)}>X</TitleH2>
            <TitleH2 className="back" onClick={changeImage}>{"<<"}</TitleH2>
            <img className="image" src={currentImage}/>
            <TitleH2 className="next" onClick={changeImage}>{">>"}</TitleH2>
        </PoupupImageContainer>
    )
}

export default PoupupImageComponent