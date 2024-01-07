import { connectDB } from "../../../lib/mongodb";
export async function GET() {
	console.log('GET');
	await connectDB();
	return Response.json({
		text : "hello world"
	})
}