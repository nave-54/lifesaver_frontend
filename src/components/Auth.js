import {React,useContext,useState,createContext} from 'react';
const Auths = createContext()
export  default function Auth(props)
{
    const [disname,setdisname] = useState("")
    const [email,setemail] = useState("")
    const [pno,setpno] = useState("")
    const fun = (nam,email,pno)=>
    {
        setdisname(nam);
        setemail(email);
        setpno(pno)
    }
    // console.log(disname);
    
    return(
        
            <Auths.Provider value={{fun,disname,email,pno}}>
                {props.children}
            </Auths.Provider>
    )
}
export const useAuth=()=>
{
    return useContext(Auths)
}