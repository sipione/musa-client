import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../common/contexts/userContext";
import { BodyText } from "../../common/foundation/typography";
import ButtonComponent from "../../components/button";
import LoadingComponent from "../../components/loading";
import { AdminContainer, FormContainer, FormUserSelector } from "./style";

const userTypes = [
    {
        name: "Todos os usuários",
        id: "all",
        value: ""
    },
    {
        name: "Prestadoras de serviço",
        id: "workers",
        value: ""
    },
    {
        name: "Contratantes",
        id: "hirer",
        value: ""
    },
    {
        name: "Usuários bloqueados",
        id: "blocked",
        value: ""
    }
];


const PageAdmin = ()=>{
    const {
        userLoged, 
        getUserById, 
        getProfessionals, 
        getAllUsers
    } = useContext(UserContext)
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState({
        userSelector: false
    });
    const [ typeSelected, setTypeSelected ] = useState(null)
    const [ searchInput, setSearchInput ] = useState(null)
    const [ usersGetted, setUsersGetted ] = useState(null)
    
    useEffect(()=>{
        if(userLoged){
            verifyUserRole()
        }
    }, [userLoged]);

    const verifyUserRole = async () => {
        const user = await getUserById(userLoged.id, userLoged.jwt);
        if(user.role !== "admin") return navigate("/")
        setLoading(false);
    }

    const handleUserSelection = (selection) =>{
        setTypeSelected(selection)
    }

    const handleSubmit = async event =>{
        event.preventDefault();

        const objetctActions = {
            workers: getProfessionals(0, {}),
            all: getAllUsers({jwt: userLoged.jwt})
        };
        setLoading(true)
        try{
            const users = await objetctActions[typeSelected.id]
            setUsersGetted(users)
        }catch(err){
            console.log(err)
        }
        setLoading(false)
    }

    if(loading) return <LoadingComponent/>
    console.log(usersGetted)

    return(
        <AdminContainer>
            <FormContainer onSubmit={handleSubmit}>
                <FormUserSelector 
                    open={open.userSelector}
                    onMouseEnter={()=>setOpen({...open, userSelector: true})} 
                    onMouseLeave={()=>setOpen({...open, userSelector: false})}
                >
                    <div  
                        onClick={()=>setOpen({...open, userSelector: !open.userSelector})} 
                        className="box"
                    >
                        <BodyText>{typeSelected?.name || "Selecionar tipo de usuário"}</BodyText>
                        <BodyText className="arrow">V</BodyText>
                    </div>

                    <div className="dropdown">
                        {userTypes.map(userType=>(
                            <div key={userType.id}>
                                <input 
                                    id={userType.id} 
                                    name="selectUser" 
                                    type="radio"
                                    onChange={()=>handleUserSelection(userType)}
                                />
                                <label className="span" htmlFor={userType.id}>x</label>
                                <label htmlFor={userType.id}><BodyText>{userType.name}</BodyText></label>
                            </div>
                        ))}
                    </div>
                </FormUserSelector>

                <div className="user-searcher">
                    <input 
                        placeholder="pesquisar por nome" 
                        type="text"
                        onChange={event=>setSearchInput(event.target.value)}
                    />
                </div>

                <div className="btn">
                    <ButtonComponent>BUSCAR</ButtonComponent>
                </div>
            </FormContainer>

            <div>
                {
                    Object.keys(usersGetted ? usersGetted[0] : {}).map(key=>(
                        <BodyText>{key}</BodyText>
                    ))
                }
            </div>
        </AdminContainer>
    )
}

export default PageAdmin;