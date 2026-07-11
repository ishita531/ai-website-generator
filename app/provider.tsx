'use client'
import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import {  UserDetailContext } from '@/context/UserDetailContext';
import { onSaveContext } from '@/context/onSaveContext';
function Provider({
    children,
}: Readonly<{
        children: React.ReactNode;
    }>) {
        const{user}=useUser();
        const[userDetail,setUserDetail]=useState<any>()
        const [onsSaveData,setOnSaveData]=useState<any>(null)
        
        useEffect(()=>{
            user && CreateNewUser()
        },[user]
        )
        const CreateNewUser =  async() =>{
            const result=await axios.post('/api/users',{

            })
            console.log(result.data)
            setUserDetail(result.data.user)
        }
    return (
        <div>
            <UserDetailContext.Provider value={{userDetail,setUserDetail}}>
                <onSaveContext.Provider value={{onsSaveData,setOnSaveData}}>
                        {children}
                </onSaveContext.Provider>
            
        </UserDetailContext.Provider>
        </div>
        
        
    )
}

export default Provider