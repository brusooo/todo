import NextAuth from "next-auth"
import Providers from "next-auth/providers"

export default NextAuth({
  session: {
    jwt: true
  },
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  jwt:{
    secret : process.env.SECRET_KEY,
  },
  database : process.env.MONGODB_URI
  
})