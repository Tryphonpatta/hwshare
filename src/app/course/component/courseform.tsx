"use client"

import { useState,SetStateAction } from "react"
import axios from "axios";

interface Prop {
    show : boolean;
    setShow : React.Dispatch<SetStateAction<boolean>>;
}

export default function Courseform({show,setShow} : Prop) {
    const [coursename,setName] = useState<string>("");
    const [courseId,setId] = useState<string>("");

    const addcourse = async() => {
        // console.log(coursename,courseId);
        const res = axios.post("/api/course",{coursename,courseId});
    }

    return (
        <div>
            <div className="border w-fit h-[125px] p-3 rounded-md border-white bg-neutral">
                <div className="">
                    <input type="text" value={coursename} onChange={(e) => setName(e.target.value)} placeholder="coursename" className="input input-primary"/>
                    <input type="text" value={courseId} onChange={(e) => setId(e.target.value)}  placeholder="courseid" className="input input-primary"/>
                </div>
                <div className="mt-2 float-right ">
                    <button className="btn btn-success mr-2" onClick={addcourse}>Submit</button>
                    <button className="btn btn-warning" onClick={() => setShow(false)}>Close</button>
                </div>
            </div>
        </div>
    )
}