
import { connectDB } from "../../../../lib/mongodb";
import user from "../../../../models/user";
export async function POST(req:any) {
	console.log('POST');
	const {name,username,password} = await req.json();
	console.log(name,username,password);
	await connectDB();
	await user.create({name,username,password});
	return Response.json({
		text : "hello world"
	})
}