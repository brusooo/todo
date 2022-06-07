import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  session: {
    jwt: true,
  },

  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Providers.Credentials({
      name: "Credentials",
      credentials: {
        name: { label: "username", type: "text" },
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        let result = await fetch(
          `http://localhost:3000/api/auth/emaillogin?name=${credentials.name}&email=${credentials.email}&password=${credentials.password}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        let user = await result.json();
        if (user) {
          return user;
        }
        return null;
      },
    }),
  ],

  jwt: {
    secret: process.env.SECRET_KEY,
    encryption: true,
  },

  database: process.env.MONGODB_URI,

  pages: {
    error: "/",
    signIn: "/",
  },
});
