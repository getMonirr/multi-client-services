import { postUser } from "@/controllers/users.controller";
import User from "@/models/users.model";
import connectMongoDB from "@/utils/connectMongoDB";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      profile(profile) {
        console.log(profile);
        return {
          ...profile,
          role: profile.role ?? "seller",
          id: profile.sub,
          image: profile.picture,
        };
      },
      clientId: process.env.GoogleClientId as string,
      clientSecret: process.env.GoogleClientSecret as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "your-cool-username",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "your-awesome-password",
        },
      },
      async authorize(credentials) {
        const user = {
          id: "42",
          name: "Dave",
          password: "nextauth",
          role: "admin",
        };

        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  // custom page define here
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    },
    // save user into database
    async signIn({ user, account, profile }) {
      if (account?.provider === "google") {
        const { email, name }: any = profile;

        await connectMongoDB();

        const existingUser = await User.findOne({ email });

        if (!existingUser) {
          const result = await postUser({ email, name });

          return result;
        } else {
          return user;
        }
      }
    },
  },
};
