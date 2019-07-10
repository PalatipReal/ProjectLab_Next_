import React,{useState,useContext,useEffect} from 'react';
import {GlobalContext} from '../../hook/GlobalHook';
import Router from 'next/router';
export default function signupcourse () {
    const GlobalHook = useContext(GlobalContext);
    const[getToken,setToken]= useState()
    const[getUser,setUser]= useState()
    useEffect(() => {
        if (localStorage.getItem("globalToken")) {
          const token = localStorage.getItem("globalToken");
          const user = JSON.parse(localStorage.getItem("globalUser"));
          setToken(token);
          setUser(user)
          console.log("localtoken:"+localStorage.getItem("globalToken"))
          console.log("localuser:"+JSON.parse(localStorage.getItem("globalUser")))
          console.log("token:"+token)
          console.log(user)
          console.log(getToken)
          console.log("getuser:"+getUser)
    
        }
      }, []);
      function HandleSignup(){
       
        }
      if(getToken){
        return (
            <div>
                Hello User
                
            </div>
        ) }
        else{
            console.log("Pls Login")
            return(
                <div>SignUp
                    {
                        HandleSignup()
                        }
                </div>
            )
        }
    
}
