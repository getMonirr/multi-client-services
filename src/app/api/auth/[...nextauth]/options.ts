import { postUser } from "@/controllers/users.controller";
import User from "@/models/users.model";
import connectMongoDB from "@/utils/connectMongoDB";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";
export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      profile(profile) {
        // customize the default profile
        return {
          ...profile,
          role: profile.role ?? "seller",
          id: profile.sub,
          profilePicture: profile.picture,
        };
      },
      clientId: process.env.GoogleClientId as string,
      clientSecret: process.env.GoogleClientSecret as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email:",
          type: "text",
          placeholder: "your-cool-email",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "your-awesome-password",
        },
      },
      async authorize(credentials) {
        try {
          await connectMongoDB();

          // find user from database by credentials information
          const user = await User.findOne({ email: credentials?.email });
          if (!user) throw new Error(`User not found`);

          // comparer password for verification
          const password: any = credentials?.password;
          const isPasswordValid = await bcrypt.compare(password, user.password);

          if (!isPasswordValid) throw new Error(`password is not valid`);

          if (credentials?.email === user?.email && isPasswordValid) {
            return user;
          } else {
            return null;
          }
        } catch (error: any) {
          console.log(error);
          throw new Error(error);
        }
      },
    }),
  ],
  // custom page define here
  pages: {
    signIn: "/login",
  },
  callbacks: {
    // customize the token object to use in the backend
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.profilePicture = user.profilePicture;
      }

      return token;
    },
    // customize the session object to use in the frontend
    async session({ session, token }) {
      session.user.role = token.role;
      session.user.profilePicture = token.profilePicture;

      return session;
    },
    // use callback to  save user into database
    async signIn({ user, account, profile }) {
      if (account?.provider === "google") {
        const { email, picture }: any = profile;

        await connectMongoDB();

        // find user by email from database
        const existingUser = await User.findOne({ email });

        if (!existingUser) {
          // generate a new username
          const username = email.split("@")[0];
          // save user in database
          const result = await postUser({
            email,
            username,
            password: "google_user", // default password
            role: user.role || "seller", // default role
            profilePicture: picture,
          });
          // for safety empty password field
          result.password = "";

          return result;
        } else {
          return existingUser;
        }
      } else {
        return user;
      }
    },
  },
};
