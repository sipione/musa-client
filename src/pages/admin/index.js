import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../common/contexts/userContext";
import { BodyText, TitleH2 } from "../../common/foundation/typography";
import ButtonComponent from "../../components/button";
import LoadingComponent from "../../components/loading";
import { AdminContainer, AdminStatics, DataContainer, DataContent, FormContainer, FormUserSelector } from "./style";
import {ReactComponent as Block} from "../../assets/images/block.svg";
import {ReactComponent as Unblock} from "../../assets/images/unblock.svg";

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
        name: "Não prestadoras",
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
        getAllUsers,
        getNotProfessionalUsers,
        blockUser,
        getTotalofUsers,
        total,
        getTotal
    } = useContext(UserContext)
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState({
        userSelector: false
    });
    const [ typeSelected, setTypeSelected ] = useState(null);
    const [ searchInput, setSearchInput ] = useState(null);
    const [ usersGetted, setUsersGetted ] = useState(null);
    const [ totalOfUsers, setTotalOfUsers] = useState();
    const [ totalOfBlockedUser, setTotalOfBlockedUser] = useState();
    
    useEffect(()=>{
        if(userLoged){
            verifyUserRole()
        }
    }, [userLoged, verifyUserRole]);

    useEffect(()=>{
        getAllTotals()
    });

    const getAllTotals = async ()=>{
        const totalUser = await getTotalofUsers(false);
        const totalBlock = await getTotalofUsers(true);
        getTotal();

        setTotalOfBlockedUser(totalBlock)
        setTotalOfUsers(totalUser)
    }

    async function verifyUserRole(){
        const user = await getUserById(userLoged.id, userLoged.jwt);
        if(user.role !== "admin") return navigate("/")
        setLoading(false);
    }

    function handleUserSelection(selection){
        setTypeSelected(selection)
    }

    async function handleSubmit(){

        const objetctActions = {
            workers: getProfessionals(0, {}),

            all: getAllUsers(0, {jwt: userLoged.jwt, search: searchInput, blocked: false}),

            hirer: getNotProfessionalUsers(0, {jwt: userLoged.jwt, search: searchInput}),

            blocked: getAllUsers(0, {jwt: userLoged.jwt, search: searchInput, blocked: true})
        };

        setLoading(true)

        try{
            const users = await objetctActions[typeSelected?.id] || await objetctActions.all; 

            setUsersGetted(users)
        }catch(err){
            alert(err)
            console.log(err)
        }

        setLoading(false)
    }

    async function handleBlock(id, blocked){
        setLoading(true)
        try{
            if (window.confirm(`Você tem certeza que deseja ${blocked ? "bloquear" : "desbloquear"} o usuário de id ${id}?`) === false) return

            const response = await blockUser(id, userLoged.jwt, blocked)

            alert(response)
            
            
            await handleSubmit();
            
            await getAllTotals()
        }catch(err){
            alert(err)
            console.log(err)
        }
        setLoading(false)
        
    }

    if(loading) return <LoadingComponent/>

    return(
        <AdminContainer>
            <TitleH2 className="title">Painel administrativo</TitleH2>

            <AdminStatics>
                <BodyText>Total Usuários: {totalOfUsers || 0}</BodyText>
                <BodyText>Total de prestadoras de serviço: {total || 0} </BodyText>
                <BodyText>Total Usuários bloqueados: {totalOfBlockedUser || 0}</BodyText>
            </AdminStatics>
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
                        value={searchInput}
                        onChange={event=>setSearchInput(event.target.value)}
                    />
                </div>

                <div className="btn">
                    <ButtonComponent>BUSCAR</ButtonComponent>
                </div>
            </FormContainer>

            <DataContainer>
                {
                    usersGetted?.map((key)=>(
                        <DataContent>
                            <BodyText>{key.id}</BodyText>
                            <BodyText>{key.name}</BodyText>
                            <BodyText>{key.email}</BodyText>
                            {
                                key.blocked
                                ?(<Unblock className="unblock" onClick={()=>handleBlock(key.id, false)}/>)
                                :(<Block className="block" onClick={()=>handleBlock(key.id, true)} />)
                            }
                            
                        </DataContent>
                    ))
                }
            </DataContainer>
        </AdminContainer>
    )
}

export default PageAdmin;