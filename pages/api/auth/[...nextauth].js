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
        username: { label: "username", type: "text" },
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        let result = await fetch(
          `http://localhost:3000/api/auth/emaillogin?username=${credentials.username}&email=${credentials.email}&password=${credentials.password}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        let user = await result.json();

        if (user.signIn == "successful") {
          return user;
        }
        return null;
      },
    }),
  ],

  jwt: {
    secret: process.env.SECRET_KEY,
  },

  database: process.env.MONGODB_URI,

  callbacks: {
    async signIn({ email }) {
      if (email) {
        let result = await fetch(
          `http://localhost:3000/api/auth/googlelogin?email=${email}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        let isAuthenticated = await result.json();

        if (isAuthenticated.signIn == "successful") return true;
        return false;
      }
    },
  },

  pages: {
    error: "/",
    signIn: "/",
  },
});
