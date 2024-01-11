
import { connectDB } from "../../../../lib/mongodb";
import course from "../../../../models/course";
export async function POST(req:any) {
	console.log('POST');
	const {coursename,courseId} = await req.json();
	console.log(coursename,courseId);
	await connectDB();
	await course.create({coursename,courseId});
	return Response.json({
		text : "hello world"
	})
}