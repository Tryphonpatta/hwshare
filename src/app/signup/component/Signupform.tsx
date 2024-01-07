"use client"
import { useState } from "react";
import axios from "axios";
export default function Signupform() {
	const [name,setName] = useState<string>("");
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [cpassword, setcPassword] = useState<string>("");
	const checkerror = () => {
		if(!name || !username || !password || !cpassword) return (<p className=" bg-red-700 rounded-lg w-fit px-2">Please fill all of above.</p>);
		if(password !== cpassword) return (<p className=" bg-red-700 rounded-lg w-fit px-2">Passwords are not same.</p>);
	}
	const  handlesumbit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			axios.post("/api/register",{name,username,password});
		}
		catch(err) {
			console.log(err);
		}
		console.log("submit");
	}
	return (
		<div className="w-[400px] border p-5 rounded-md">
			<h1 className="text-bold mb-3">LoginForm</h1>
			<form onSubmit={handlesumbit} className="flex flex-col gap-2">
			<input type="text" placeholder="name" className="input input-bordered" value={name} onChange={(e) => setName(e.target.value)}/>
				<input type="text" placeholder="username" className="input input-bordered" value={username} onChange={(e) => setUsername(e.target.value)}/>
				<input type="password" placeholder="password" className="input input-bordered" value={password} onChange={(e) => setPassword(e.target.value)}/>
				<input type="password" placeholder="confirm password" className="input input-bordered" value={cpassword} onChange={(e) => setcPassword(e.target.value)}/>
				<button className="btn btn-active btn-primary" type="submit">Sign Up</button>
				{checkerror()}
			</form>
		</div>
	)
}