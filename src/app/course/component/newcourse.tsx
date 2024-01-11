"use client"
import { useState } from "react"
import Courseform from "./courseform";
import { IoCloseCircle } from "react-icons/io5";
export default function Addcourse() {
    const [show,setShow] = useState<boolean>(false);

    return (
        <div>
            <button className="btn btn-primary " onClick={() => setShow(!show)}>Add</button>

            {show &&
            <div className="absolute top-0 left-0 flex justify-center items-center w-screen h-screen bg-gray-900 bg-opacity-40 ">
                <div>
                    <Courseform show = {show} setShow={setShow}/>
                </div>
            </div>
            }
        </div>
    )
}