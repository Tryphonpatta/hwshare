"use client"
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import {authOptions} from "../api/auth/[...nextauth]/route";
import Addcourse from "./component/newcourse";
export default function Coursepage() {
    const router = useRouter();
    const {data : session,status} = useSession();
    console.log(status);
    if(status == "unauthenticated"){
        redirect("/");
    }
    const handlelogout = () => {
        signOut();
        redirect("/")        
    }
    return (    
        <div>
            <h1>Course</h1>
            <h1>{session?.user?.name}</h1>
            <button className="btn btn-error" onClick={handlelogout}>log out </button>
            <Addcourse/>
        </div> 
    )
}