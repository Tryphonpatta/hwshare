"use client"

import { useState,SetStateAction } from "react"

interface Prop {
    show : boolean;
    setShow : React.Dispatch<SetStateAction<boolean>>;
}

export default function Courseform({show,setShow} : Prop) {
    const [name,setName] = useState<string>("");
    const [Id,setId] = useState<string>("");
    return (
        <div>
            <div className="border w-fit h-[125px] p-3 rounded-md border-white bg-neutral">
                <div className="">
                    <input type="text" placeholder="coursename" className="input input-primary"/>
                    <input type="text" placeholder="courseid" className="input input-primary"/>
                </div>
                <div className="mt-2 float-right ">
                    <button className="btn btn-success mr-2">Submit</button>
                    <button className="btn btn-warning" onClick={() => setShow(false)}>Close</button>
                </div>
            </div>
        </div>
    )
}