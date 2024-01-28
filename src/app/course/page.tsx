"use client"
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import {authOptions} from "../api/auth/[...nextauth]/route";
import Addcourse from "./component/newcourse";
import { use, useEffect,useState } from "react";
import course from "../../../models/course";
import { set } from "mongoose";
export default function Coursepage() {
    const router = useRouter();
    const {data : session,status} = useSession();
    const [courses,setCourses] = useState<any[]>([]);
    console.log(status);
    if(status == "unauthenticated"){
        redirect("/");
    }
    const handlelogout = () => {
        signOut();
        redirect("/")        
    }
    const coursefetch = async () => {
        const res = await fetch("/api/course")
        const data = await res.json();
        console.log(data);
        setCourses(data.course);
    }
    useEffect(() => {
        coursefetch();
    },[])
    return ( 
        <div>
            <h1>Course</h1>
            <h1>user : {session?.user?.name}</h1>
            <button className="btn btn-error" onClick={handlelogout}>log out </button>
            <Addcourse/>
            {
                courses.map((course,index) => {
                    return (
                        <div className="flex my-2">
                        <div key={course.courseId} className="flex justify-between w-[400px] h-[30px] border px-2 cursor-pointer" onClick={() => {
                            router.push(`/course/${course.courseId}`);
                        }}>
                            <h1>{course.coursename}</h1>
                            <h1>Id : {course.courseId}</h1>
                        </div>
                        </div>
                    )
                })
            }
        </div> 
    )
}