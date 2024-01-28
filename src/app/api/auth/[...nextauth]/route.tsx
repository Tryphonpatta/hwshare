import NextAuth,{NextAuthOptions} from "next-auth";
import CredentialsProvider  from "next-auth/providers/credentials";
import { connectDB } from "../../../../../lib/mongodb";
import user from "../../../../../models/user";
const authOptions : NextAuthOptions = {
	session: {
		strategy: "jwt",
	},
	providers: [
		CredentialsProvider({
				type: "credentials",
				credentials: {},
				async authorize(credentials){
					const {username,password} = credentials as {
						username : string;
						password : string;
					};
					console.log(username,password);
					try {
						await connectDB();
						const que = await user.findOne({username : username});
						if(!que){
							throw Error("user not found");
						}
						if(password !== que.password){
							throw Error("password not match");
						}
						console.log("signin")
						return que;
					}
					catch (err) {
						console.log(err);
						throw new Error("Failed to connect to the database");
					}
				},
				
		})
	],
	pages: {
		signIn: "/",
		error: "/",
	},
	secret: process.env.NEXTAUTH_SECRET,
}


const handler = NextAuth(authOptions);
export {handler as GET,handler as POST,authOptions}