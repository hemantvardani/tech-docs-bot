"use client"
import { useSession, signIn, signOut } from 'next-auth/react';

export default function AuthButton(){
    const { data : session } = useSession();

    if(session){
        return <button onClick={()=>signOut()} className='border-1 border-blue-300 hover:border-blue-400 text-blue-600 hover:text-blue-700 p-2 rounded-md'>Sign Out</button>
    }else {
        return <button onClick={()=>signIn()} className='border-1 border-blue-300 hover:border-blue-400 text-blue-600 hover:text-blue-700 p-2 rounded-md' >Sign In</button>
    }
}