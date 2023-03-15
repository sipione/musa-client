import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../common/contexts/userContext";
import { BodyLittleText, BodyText, TitleH2 } from "../../common/foundation/typography";
import ButtonComponent from "../../components/button";
import LoadingComponent from "../../components/loading";
import { AdminContainer, AdminStatics, DataContainer, DataContent, FormContainer, FormUserSelector } from "./style";
import {ReactComponent as Block} from "../../assets/images/block.svg";
import {ReactComponent as Unblock} from "../../assets/images/unblock.svg";
import { CategoryContext } from "../../common/contexts/categoryContext";
import axios from "axios";

const userTypes = [
    {
        name: "Usuário ativos",
        id: "all",
        value: ""
    },
    {
        name: "Empreendedoras",
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
        blockUser,
        getAllUsers
    } = useContext(UserContext)
    const {categories} = useContext(CategoryContext);
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
    const [ totalOfProfessional, setTotalOfProfessional] = useState();
    const [ totalByCategory, setTotalByCategory] = useState();
    const [ totalOfMothers, setTotalOfMothers] = useState();
    const [ allUsers, setAllUsers] = useState();

    useEffect(()=>{
        if(userLoged){
            verifyUserRole();
            getAllTotals()
        }
    }, [userLoged]);
    
    const downloadFile = async () => {
        setLoading(true)
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/csv`);
        const url = window.URL.createObjectURL(new Blob([response.data])) 
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', "todos_usuarios.csv")
        document.body.appendChild(link)
        link.click()
        link.remove()
        setLoading(false)
    }

    const getAllTotals = async (blocked = false)=>{
        //getTotalOfProfessionals();
        //const totalUser = await getTotalofUsers(false);
        setLoading(true)
        
        const allUsersResponse = await getAllUsers({jwt:userLoged.jwt});

        setAllUsers(()=>allUsersResponse)
        setTotalOfProfessional(allUsersResponse.filter(user=>user.category !== null).length)
        setTotalOfBlockedUser(allUsersResponse.filter(user=>user.blocked).length)
        setTotalOfMothers(allUsersResponse.filter(user=>user.mother).length)
        setTotalOfUsers(allUsersResponse.length)
        setTotalByCategory(await getTotalByCategory(allUsersResponse))
        setLoading(false)
    }

    async function getTotalByCategory(allUsers){
        let categoriesObject = {};

        categories.forEach(category=>{
            categoriesObject ={
                ...categoriesObject,
                [category.label]: allUsers.filter(user=>user.category == category.name).length
            }
        })

        return categoriesObject;
    }

    async function verifyUserRole(){
        if(userLoged.role !== "admin"){
            setLoading(false);
            return navigate("/")
        }
        setLoading(false);
    }

    function handleUserSelection(selection){
        setTypeSelected(selection)
    }

    async function handleSubmit(){
        setUsersGetted(()=>null)

        const objetctActions = {
            workers: ()=>(allUsers.filter(user=>user.category !== null)),

            all: ()=>(allUsers.filter(user=>user.blocked == false)),

            hirer: ()=>allUsers.filter(user=>user.category == null),

            blocked: ()=>allUsers.filter(user=>user.blocked)
        };

        const users = objetctActions[typeSelected?.id]() || objetctActions.all(); 

        setUsersGetted(()=>users)
    }

    async function handleBlock(id, blocked){
        setLoading(true)
        try{
            if (window.confirm(`Você tem certeza que deseja ${blocked ? "bloquear" : "desbloquear"} o usuário de id ${id}?`) === false) return

            const response = await blockUser(id, userLoged.jwt, blocked)
            
            alert(response)

            window.location.reload();
        }catch(err){
            alert(err)
            console.log(err)
        }
        setLoading(false)
        
    }

    if(loading || !userLoged || !allUsers) return <LoadingComponent/>

    return(
        <AdminContainer>
            <div onClick={downloadFile} className="dowload">
                <ButtonComponent> <BodyLittleText>Download CSV File</BodyLittleText></ButtonComponent>
            </div>
            <TitleH2 className="title">Painel administrativo</TitleH2>

            <AdminStatics open={open.totalCategories}>
                <div className="stats__element">
                    <BodyText>Usuários Ativos: {totalOfUsers || 0}</BodyText>
                </div>
                <div className="stats__element">
                    <BodyText>Empreendedoras: {totalOfProfessional || 0} </BodyText>
                </div>
                <div className="stats__element">
                    <BodyText>Clientes: { totalOfUsers - totalOfProfessional || 0} </BodyText>
                </div>
                <div className="stats__element">
                    <BodyText>Mães: {totalOfMothers || 0} </BodyText>
                </div>
                <div className="stats__element">
                    <BodyText>Usuários bloqueados: {totalOfBlockedUser || 0}</BodyText>
                </div>

                <div 
                    className="total--category stats__element"
                    onMouseEnter={()=>setOpen({...open, totalCategories: true})} 
                    onMouseLeave={()=>setOpen({...open, totalCategories: false})}
                >
                    <BodyText>Por categoria</BodyText>

                    <BodyText className="arrow">V</BodyText>

                    <ul className="category__dropdown">
                        {Object.entries(totalByCategory).sort((a,b)=> b[1] - a[1]).map(categoryArray=>{
                            if(categoryArray[1]>0){
                                return(
                                    <li className="dropdown__item" key={categoryArray[0]}>
                                        <BodyText>{categoryArray[0]}: {categoryArray[1]}</BodyText>
                                    </li>
                                )
                            }
                        })}
                    </ul>
                </div>
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
                {usersGetted?.map((user)=>(
                    <DataContent blocked={user.blocked}>
                        <div className="title-box">
                            <BodyText>{user.name}</BodyText>
                            <BodyText className="title__cat">{user?.category || null}</BodyText>
                            <BodyText>{user.email}</BodyText>
                            {
                                user.blocked
                                ?(<Unblock className="unblock" onClick={()=>handleBlock(user.id, false)}/>)
                                :(<Block className="block" onClick={()=>handleBlock(user.id, true)} />)
                            }
                        </div>
                        
                        <div className="body-box">
                            <BodyText> <span>Serviços:</span> {user?.profession || "sem dados"}</BodyText>
                            <BodyText> <span>Mãe:</span> {user?.mother ? "sim" : "Não"}</BodyText>
                            <BodyText> <span>Telefone:</span> {user?.phone || "sem dados"}</BodyText>
                            <BodyText> <span>Região:</span> {user?.city ? `${user?.city}/${user?.state}` : "sem dados"}</BodyText>
                            <BodyText> <span>CEP:</span> {user?.zipcode || "sem dados"}</BodyText>
                            <BodyText> <span>Criado em:</span> {new Date(user?.createdAt).toLocaleString("pt-br") || "sem dados"}</BodyText>
                            <BodyText> <span>Id:</span> {user?.id || "sem dados"}</BodyText>
                        </div>
                    </DataContent>
                ))}
            </DataContainer>
        </AdminContainer>
    )
}

export default PageAdmin;