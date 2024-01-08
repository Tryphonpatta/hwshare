"use client"
import Link from 'next/link'
import { useState } from "react";
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
export default function Loginform() {
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");
    const router = useRouter();
	const  handlesumbit = async(e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("submit");
		const res = await signIn("credentials",{username : username,password : password,redirect: false,});
		if(res?.error){
			console.log(res.error);
			return res.error;
		}
        try{
        router.push("/course");
        }
        catch (e){
            console.log(e);
        }
		return res;
	}
	return (
		<div className="w-[400px] border p-5 rounded-md">
			<h1 className="text-bold mb-3">LoginForm</h1>
			<form onSubmit={handlesumbit} className="flex flex-col gap-2">
				<input type="text" placeholder="username" className="input input-bordered" value={username} onChange={(e) => setUsername(e.target.value)}/>
				<input type="password" placeholder="password" className="input  input-bordered" value={password} onChange={(e) => setPassword(e.target.value)}/>
				<button className="btn btn-active btn-primary" type="submit">Sign In</button>
				<Link href="/signup">Doesn't has an account go <span className='underline'>sign up</span></Link>
			</form>
		</div>
	)
}